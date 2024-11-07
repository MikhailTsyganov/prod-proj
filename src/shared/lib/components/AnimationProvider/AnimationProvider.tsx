import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type TSpring = typeof import('@react-spring/web');
type TGesture = typeof import('@use-gesture/react');

interface IAnimationContext {
  Gesture?: TGesture;
  Spring?: TSpring;
  isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContext>({});

const getAsyncAnimationModules = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<IAnimationContext>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<TSpring>();
  const GestureRef = useRef<TGesture>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([spring, gesture]) => {
      setIsLoaded(true);
      SpringRef.current = spring;
      GestureRef.current = gesture;
    });
  }, []);

  const providerValue = useMemo(() => {
    return {
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    };
  }, [isLoaded]);

  return (
    <AnimationContext.Provider value={providerValue}>
      {children}
    </AnimationContext.Provider>
  );
};
