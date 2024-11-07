import { type IUser } from '@/entities/User';

export enum EArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum EArticleBlockType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  CODE = 'CODE',
}

export enum EArticleView {
  LIST = 'LIST',
  TILE = 'TILE',
}

export interface IArticleBlockBase {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleBlockText extends IArticleBlockBase {
  type: EArticleBlockType.TEXT; // для автокомплита
  title?: string;
  paragraphs: string[];
}

export interface IArticleBlockCode extends IArticleBlockBase {
  type: EArticleBlockType.CODE; // для автокомплита
  code: string;
}

export interface IArticleBlockImage extends IArticleBlockBase {
  type: EArticleBlockType.IMAGE; // для автокомплита
  src: string;
  title: string;
}

export type TArticleBlock =
  | IArticleBlockText
  | IArticleBlockCode
  | IArticleBlockImage;

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  user: IUser;
  type: EArticleType[];
  blocks: TArticleBlock[];
}
