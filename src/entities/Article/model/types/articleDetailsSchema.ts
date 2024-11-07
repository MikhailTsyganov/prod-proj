import { type IArticle } from './article';

export interface IArticleDetailsSchema {
  data?: IArticle;
  isLoading: boolean;
  error?: string;
}
