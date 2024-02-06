import { useCallback, type FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { ETextVariant, Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';

export interface ILoginFormProps {
  className?: string
}

// eslint-disable-next-line
const LoginForm: FC<ILoginFormProps> = memo((props) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

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
