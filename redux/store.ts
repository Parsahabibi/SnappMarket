import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/Slice/Slice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})