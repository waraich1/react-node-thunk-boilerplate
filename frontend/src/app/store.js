import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from '../containers/reduxPage/reduxSlice'

export default configureStore({
  reducer: {
    counter: reduxReducer
  }
})