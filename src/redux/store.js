import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

// import { tasksReducer, filtersReducer } from './reducer';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
