import { type ECountry, type ECurrency } from 'shared/const/common.types';

export interface IProfile {
  firstname?: string
  lastname?: string
  age?: number
  currency?: ECurrency
  country?: ECountry
  city?: string
  username?: string
  avatar?: string
}

export interface IProfileSchema {
  data?: IProfile
  currentDataForm?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}
