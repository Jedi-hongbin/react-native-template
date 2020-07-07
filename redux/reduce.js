import { combineReducers } from 'redux'

function action (state = false, action) {
  if(action.type === 'LIVE') {
    return true
  }
  if(action.type === 'STOP') {
    return false
  }
  return state
}

const reducer = combineReducers({ action })
export default reducer