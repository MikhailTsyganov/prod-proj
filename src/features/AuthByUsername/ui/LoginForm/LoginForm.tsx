import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ILoginFormProps {
  className?: string
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation()

  return (
    <div className={classNames(s.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={s.input}
        placeholder={t('Введите имя')}
        autofocus
      />
      <Input
        type="text"
        className={s.input}
        placeholder={t('Введите пароль')}
      />
      <Button
        className={s.loginBtn}
        variant={EButtonVariants.OUTLINED}
      >
        {t('Войти')}
      </Button>
    </div>
  )
};
