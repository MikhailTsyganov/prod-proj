import { useCallback, type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { ETextVariant, Text } from '@/shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { useAsyncReducer } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';

export interface ILoginFormProps {
  className?: string
  onSuccess?: () => void
}

// eslint-disable-next-line
const LoginForm: FC<ILoginFormProps> = memo((props) => {
  const { className, onSuccess } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [onSuccess, dispatch, username, password])

  const reducers = { loginForm: loginReducer }
  useAsyncReducer(reducers)

  return (
    <div className={classNames(s.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={error} variant={ETextVariant.ERROR} />}
      {error && <div></div>}
      <Input
        type="text"
        className={s.input}
        placeholder={t('Введите имя')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={s.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={s.loginBtn}
        variant={EButtonVariants.OUTLINED}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
});

export default LoginForm;
