import { IFeatureFlags } from '@/shared/types/featureFlags';
import { ReactElement } from 'react';
import { getFeatureFlag } from '../setGetFeatures';

interface IToggleFeaturesProps {
  featureName: keyof IFeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: IToggleFeaturesProps) => {
  const { featureName, off, on } = props;
  if (getFeatureFlag(featureName)) {
    return on;
  }
  return off;
};

export default ToggleFeatures;
