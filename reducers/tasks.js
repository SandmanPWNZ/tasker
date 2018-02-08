import { FETCH_TASKS, CREATE_TASK_ERROR } from '../constants'

const initialState = {
  tasks: []
}

export default function update(state = initialState, action) {
  console.log(action)
  const { payload } = action
  if(action.type === FETCH_TASKS) {
    return { tasks: payload.message.tasks, status: payload.status }
  }
  else if(action.type === CREATE_TASK_ERROR) {
    return { message: payload }
  }
  return state
}
