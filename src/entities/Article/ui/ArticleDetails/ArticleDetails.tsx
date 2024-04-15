import { type FC, memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './ArticleDetails.module.scss';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { ETextAlign, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { EArticleBlockType, type TArticleBlock } from '../../model/types/article';
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText';
import { ArticleBlockCode } from '../ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImage } from '../ArticleBlockImage/ArticleBlockImage';
import { HStack, VStack } from 'shared/ui/Stack';

interface IArticleDetailsProps {
  className?: string
  id?: string
}

export const ArticleDetails: FC<IArticleDetailsProps> = memo((props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch()
  const { t } = useTranslation('articles')

  const data = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  const renderBlocks = useCallback(
    (block: TArticleBlock) => {
      switch (block.type) {
        case EArticleBlockType.TEXT:
          return <ArticleBlockText block={block} key={block.id} />;
        case EArticleBlockType.CODE:
          return <ArticleBlockCode block={block} key={block.id} />;
        case EArticleBlockType.IMAGE:
          return <ArticleBlockImage block={block} key={block.id} />;
        default:
          return null;
      }
    },
    []
  )

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  useAsyncReducer({ articleDetails: articleDetailsReducer })

  let content;

  if (isLoading) {
    content = (
      <VStack gap='16' needMaxWidth>
        <HStack needMaxWidth justify='center'>
          <Skeleton height={200} width={200} borderRad='50%' />
        </HStack>
        <Skeleton height={30} width={670} />
        <Skeleton height={30} width={400} />
        <Skeleton height={231} width='100%' />
        <Skeleton height={231} width='100%' />
      </VStack>
    )
  } else if (error) {
    content = <Text title={t('Произошла ошибка при загрузке статьи')} align={ETextAlign.CENTER} />
  } else {
    content = (
      <>
        <HStack needMaxWidth justify='center'>
          <Avatar
            size={200}
            src={data?.img}
          />
        </HStack>

        <Text
          title={data?.title}
          text={data?.subtitle}
        />
        <HStack gap='8'>
          <Icon Svg={EyeIcon}/>
          <Text text={String(data?.views)} />
        </HStack>
        <HStack gap='8'>
          <Icon Svg={CalendarIcon}/>
          <Text text={String(data?.createdAt)} />
        </HStack>
        {data?.blocks?.map(renderBlocks)}
      </>
    )
  }

  return (
    <VStack
      className={classNames(s.ArticleDetails, {}, [className])}
      gap='8'
    >
      {content}
    </VStack >
  )
});
