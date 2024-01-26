import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, EButtonVariants } from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface ILangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant={EButtonVariants.TRANSPARENT}
      className={classNames('', {}, [className])}
      onClick={toggle}>
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
