export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const SET_TASK_COMPLETION = "SET_TASK_COMPLETION";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SET_GROUP_NAME = "SET_GROUP_NAME";
export const REQUEST_AUTHETICATE_USER = "REQUEST_AUTHETICATE_USER";
export const PROCESS_AUTHENTICATING_USER = "PROCESS_AUTHENTICATING_USER";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const AUTHENTICATING = "AUTHENTICATING";
export const SET_STATE = "SET_STATE";
export const SET_COMMENTS = "SET_COMMENTS";
export const REQUEST_ADD_COMMENTS = "REQUEST_ADD_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
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
export const requestAuthenticateUser = (username, password) => {
  return {
    type: REQUEST_AUTHETICATE_USER,
    username,
    password,
  };
};
export const processAuthenticateUser = (
  status = AUTHENTICATING,
  session = null
) => {
  return {
    type: PROCESS_AUTHENTICATING_USER,
    session,
    authenticated: status,
  };
};
export const setState = (state = {}) => {
  return {
    type: SET_STATE,
    state,
  };
};
export const setComments = (taskId, comments, ownerId, id) => {
  //console.log(`setcomments actions-${taskId}-${comments}-${ownerId}-${id}`);
  return {
    type: SET_COMMENTS,
    taskId,
    commentsValue: comments,
    ownerId,
    id,
  };
};
export const requestAddComments = (taskId, content, userId) => {
  //console.log(`add comments action-${taskId}-${content}-${userId}`);
  return {
    type: REQUEST_ADD_COMMENTS,
    taskId,
    content,
    userId,
  };
};
export const addComments = (taskId, content, userId, comment_id) => {
  return {
    type: ADD_COMMENTS,
    taskId,
    content,
    userId,
    comment_id,
  };
};
