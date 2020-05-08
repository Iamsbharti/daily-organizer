export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";

export const requestTaskCreate = (groupId) => {
  console.log(`mutation/action for ${groupId}`);
  return {
    type: REQUEST_TASK_CREATION,
    groupId,
  };
};

export const createTask = (taskId, groupId, ownerId) => {
  console.log(`dispatching create task-${taskId}-${groupId}-${ownerId}`);
  return {
    type: CREATE_TASK,
    taskId,
    groupId,
    ownerId,
  };
};
