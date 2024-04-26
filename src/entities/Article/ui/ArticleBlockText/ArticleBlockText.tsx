import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './ArticleBlockText.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { type IArticleBlockText } from '../../model/types/article';

interface IArticleBlockTextProps {
  className?: string
  block: IArticleBlockText
}

export const ArticleBlockText: FC<IArticleBlockTextProps> = memo((props) => {
  const { className, block } = props;
  const { title, paragraphs } = block;

  return (
    <div className={classNames(s.ArticleBlockText, {}, [className])}>
      {title && <Text title={title} className={s.title} />}
      {paragraphs.map(item => <Text text={item} key={item} className={s.paragraph} />)}
    </div>

  )
});
