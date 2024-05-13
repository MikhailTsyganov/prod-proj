import s from './RatingCard.module.scss';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { StarRating } from '@/features/Rating';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, EButtonSizes, EButtonVariants } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface IRatingCardProps {
  className?: string
  title?: string
  feedBackTitle?: string
  hasFeedBack?: boolean
  onAccept?: (starNumber: number, feedback?: string) => void
  onCancel?: (starNumber: number) => void
  dataStarsCount?: number
}

export const RatingCard = memo((props: IRatingCardProps) => {
  const {
    className,
    feedBackTitle = 'Оставьте отзыв, если хотите',
    hasFeedBack = false,
    onAccept,
    onCancel,
    title,
    dataStarsCount = 0
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(dataStarsCount)
  const [feedback, setFeedback] = useState('')

  const onStarClick = useCallback(
    (starNumber: number) => {
      setStarsCount(starNumber)
      hasFeedBack
        ? setIsModalOpen(true)
        : onAccept?.(starNumber)
    },
	  [hasFeedBack, onAccept]
  )

  const acceptHandler = useCallback(
	  () => {
      onAccept?.(starsCount, feedback)
	  setIsModalOpen(false)
	  },
	  [onAccept, starsCount, feedback]
  )

  const deniedHandler = useCallback(
	  () => {
      onCancel?.(starsCount)
	  setIsModalOpen(false)
	  },
	  [onCancel, starsCount]
  )

	  const modalContent = (
  <>
    <Text title={feedBackTitle}/>
    <Input placeholder="Ваш отзыв" onChange={(value: string) => { setFeedback(value) }} value={feedback}/>
  </>
	  )

  return (
    <Card className={classNames(s.RatingCard, {}, [className])} max>
      <VStack align="center" gap="8">
        <Text title={dataStarsCount ? 'Спасибо за оценку' : title}/>
        <StarRating size={40} onSelect={onStarClick} selectedStars={starsCount}/>
      </VStack>

      <MobileView>
        <Drawer isOpened={isModalOpen} lazy onClose={deniedHandler}>
          <VStack needMaxWidth gap="32">
            {modalContent}
            <Button variant={EButtonVariants.OUTLINED_RED} onClick={acceptHandler} size={EButtonSizes.L} fullWidth>Отправить</Button>
          </VStack>
        </Drawer>
      </MobileView>
      <BrowserView>
        <Modal isOpened={isModalOpen} lazy>
          <VStack needMaxWidth gap="32">
            {modalContent}
            <HStack needMaxWidth gap='16' justify="end">
              <Button variant={EButtonVariants.OUTLINED_RED} onClick={deniedHandler}>Закрыть</Button>
              <Button variant={EButtonVariants.FILLED} onClick={acceptHandler}>Отправить</Button>
            </HStack>
          </VStack>

        </Modal>
      </BrowserView>

    </Card >
  )
});
