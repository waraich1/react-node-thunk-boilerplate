import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from '../containers/reduxPage/reduxSlice'
import asyncReducer from '../containers/asyncPage/asyncSlice';

export default configureStore({
  reducer: {
    counter: reduxReducer,
    asyncR: asyncReducer,
  }
})