import { articleService } from '@/services/ArticleService';
import { commentsService } from '@/services/CommentsService';

const reducers = {
  [articleService.reducerPath]: articleService.reducer,
  [commentsService.reducerPath]: commentsService.reducer,
};

export default reducers;
