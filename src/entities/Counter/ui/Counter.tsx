import { type FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button, EButtonVariants } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const counterValue = useCounterValue()
  const { addAny, decrement, increment } = useCounterActions()

  const onIncrement = () => {
    increment()
  }

  const onDecrement = () => {
    decrement()
  }

  const onIncFive = () => {
    addAny(5)
  }

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button
        data-testid='increment-btn'
        onClick={onIncrement}
        variant={EButtonVariants.OUTLINED}
      >
        {t('увеличить')}
      </Button>
      <Button
        data-testid='decrement-btn'
        onClick={onDecrement}
        variant={EButtonVariants.OUTLINED}
      >
        {t('уменьшить')}
      </Button>
      <Button
        data-testid='decrement-btn'
        onClick={onIncFive}
        variant={EButtonVariants.OUTLINED}
      >
        {t('Увел на 5')}
      </Button>
    </div>
  )
};
