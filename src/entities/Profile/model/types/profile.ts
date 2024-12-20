import { type ECurrency } from '@/entities/Currency';
import { type ECountry } from '@/entities/Country';

export enum EValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: ECurrency;
  country?: ECountry;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  currentDataForm?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: EValidateProfileError[];
}
