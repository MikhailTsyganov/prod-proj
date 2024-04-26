import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

interface IForbiddenPageProps {
  className?: string
}

export const ForbiddenPage: FC<IForbiddenPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      {t('У Вас нет доступа к этой странице')}
    </Page>
  )
};
