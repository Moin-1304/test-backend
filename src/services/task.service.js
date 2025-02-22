const httpStatus = require("http-status");
const { Task } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a Task
 * @param {Object} taskBody
 * @returns {Promise<Task>}
 */
const createTask = async (taskBody) => {
  return Task.create(taskBody);
};

/**
 * Query for tasks
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} userId - User's ID to filter tasks by user
 * @returns {Promise<QueryResult>}
 */
const queryTasks = async (filter, options, userId) => {
  const updatedFilter = { ...filter, userId };

  const sortOptions = options.sortBy || 'createdAt:desc';
  const sort = {};
  
  if (sortOptions) {
    const [field, order] = sortOptions.split(':');
    sort[field] = order === 'asc' ? 1 : -1;
  }

  const tasks = await Task.paginate(updatedFilter, { ...options, sort });
  return tasks;
};


/**
 * Get task by id
 * @param {ObjectId} id
 * @param {string} userId
 * @returns {Promise<Task>}
 */
const getTaskById = async (id, userId) => {
  return Task.findById(id, userId);
};

/**
 * Update title by id
 * @param {ObjectId} taskId
 * @param {Object} updateBody
 * @param {string} userId
 * @returns {Promise<Task>}
 */
const updateTaskById = async (taskId, updateBody, userId) => {
  const task = await getTaskById(taskId, userId);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, "Task not found");
  }
  Object.assign(task, updateBody);
  await task.save();
  return task;
};

/**
 * Delete task by id
 * @param {ObjectId} taskId
 * @param {string} userId
 * @returns {Promise<Task>}
 */
const deleteTaskById = async (taskId, userId) => {
  const task = await getTaskById(taskId, userId);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, "task not found");
  }
  await task.remove();
  return task;
};

module.exports = {
  createTask,
  queryTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
