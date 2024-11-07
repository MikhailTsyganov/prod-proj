import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './Code.module.scss';
import { Button, EButtonVariants } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import CopyIcon from '@/shared/assets/icons/copy.svg';

interface ICodeProps {
  className?: string;
  code: string;
}

export const Code: FC<ICodeProps> = memo((props) => {
  const { className, code } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={classNames(s.Code, {}, [className])}>
      <Button
        className={s.copyBtn}
        variant={EButtonVariants.TRANSPARENT}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} className={s.icon} />
      </Button>
      <code className={s.code}>{code}</code>
    </pre>
  );
});
