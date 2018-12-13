import { combineReducers } from 'redux'
import All_ProjectsReducer from './All_ProjectsReducer'

const rootReducer = combineReducers({
    All_ProjectsReducer: All_ProjectsReducer,
  });

export default rootReducer; 