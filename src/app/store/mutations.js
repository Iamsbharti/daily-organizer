export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const SET_TASK_COMPLETION = "SET_TASK_COMPLETION";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SET_GROUP_NAME = "SET_GROUP_NAME";

export const requestTaskCreate = (groupId) => {
  return {
    type: REQUEST_TASK_CREATION,
    groupId,
  };
};

export const createTask = (taskId, groupId, ownerId) => {
  return {
    type: CREATE_TASK,
    taskId,
    groupId,
    ownerId,
  };
};

export const setTaskCompletion = (taskId, isComplete) => {
  return {
    type: SET_TASK_COMPLETION,
    taskId,
    isComplete,
  };
};
export const setTaskName = (taskId, taskName) => {
  return {
    type: SET_TASK_NAME,
    taskId,
    taskName,
  };
};
export const setGroupName = (taskId, groupId) => {
  return {
    type: SET_GROUP_NAME,
    taskId,
    groupId,
  };
};
