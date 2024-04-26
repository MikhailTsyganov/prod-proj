import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './ArticleBlockImage.module.scss';
import { type IArticleBlockImage } from '../../model/types/article';
import { ETextAlign, Text } from '@/shared/ui/Text/Text';

interface IArticleBlockImageProps {
  className?: string
  block: IArticleBlockImage
}

export const ArticleBlockImage: FC<IArticleBlockImageProps> = memo((props) => {
  const { className, block } = props;
  const { src, title } = block;

  return (
    <div className={classNames(s.ArticleBlockImage, {}, [className])}>
      <img src={src} alt={title} className={s.img} />
      {title && <Text text={title} align={ETextAlign.CENTER} />}
    </div >
  )
});
