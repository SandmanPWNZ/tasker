import {
  HOME_PATH,
  FETCH_TASKS,
  CREATE_TASK,
  DEVELOPER_NAME
} from '../constants'
import {browserHistory} from 'react-router'
import axios from 'axios'

export const fetchTasks = (sort_field = 'id', page = 0, sort_direction = 'asc') => async dispatch => {
    const res = await axios.get('https://uxcandy.com/~shapoval/test-task-backend/',{
        params: {
            developer: DEVELOPER_NAME,
            sort_field: sort_field,
            sort_direction: sort_direction,
            page: page,
        }
    });
    dispatch({type: FETCH_TASKS, payload: res.data})
};

export const createTask = (form) => async dispatch => {
    const res = await axios({
      method: 'post',
      url: 'https://uxcandy.com/~shapoval/test-task-backend/create',
      params: {developer: DEVELOPER_NAME},
      conentType: false,
      mimeType: 'multipart/form-data',
      data: form
    });
    if(res.data.status === 'ok'){
      browserHistory.push(HOME_PATH)
    }
    if(res.data.status === 'error'){
      dispatch({type: CREATE_TASK_ERROR, payload: res.data.message})
    }
}
