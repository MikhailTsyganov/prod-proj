import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const counterValue = useSelector(getCounterValue)

  const onIncrement = () => {
    dispatch(counterActions.increment())
  }

  const onDecrement = () => {
    dispatch(counterActions.decrement())
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
    </div>
  )
};
