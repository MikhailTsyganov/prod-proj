import { buildSelector } from '@/shared/lib/store';
import { IJSONSettings } from '../types/jsonSettings';

const defaultJsonSettings: IJSONSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
  (state, key: keyof IJSONSettings) =>
    state.user?.authData?.jsonSettings?.[key],
);
