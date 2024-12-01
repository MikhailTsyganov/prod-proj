import { IFeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface IToggleFeaturesProps<T> {
  name: keyof IFeatureFlags;
  on: () => T;
  off: () => T;
}

export const toggleFeatures = <T>({
  name,
  on,
  off,
}: IToggleFeaturesProps<T>): T => {
  if (getFeatureFlag(name)) {
    return on();
  }
  return off();
};

export default toggleFeatures;
