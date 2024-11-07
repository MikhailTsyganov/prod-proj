import { useCallback, useMemo, useState } from 'react';

interface IUseHoverFuncs {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type TUseHoverResult = [boolean, IUseHoverFuncs];

export const useHover = (): TUseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(() => {
    return [isHover, { onMouseEnter, onMouseLeave }];
  }, [isHover, onMouseEnter, onMouseLeave]);
};
