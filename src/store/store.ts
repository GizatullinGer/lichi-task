import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { articleService } from '@/services/ArticleService';
import { commentsService } from '@/services/CommentsService';

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articleService.middleware, commentsService.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
