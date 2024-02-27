import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

// import s from './ArticleBlockCode.module.scss';
import { type IArticleBlockCode } from '../../model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface IArticleBlockCodeProps {
  className?: string
  block: IArticleBlockCode
}

export const ArticleBlockCode: FC<IArticleBlockCodeProps> = memo((props) => {
  const { block, className } = props;
  const { code } = block;

  return <Code code={code} className={classNames('s.ArticleBlockCode', {}, [className])} />
});
