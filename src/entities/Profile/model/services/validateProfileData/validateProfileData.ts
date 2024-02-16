import { EValidateProfileError, type IProfile } from '../../types/profile';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [EValidateProfileError.NO_DATA]
  }

  const { firstname, lastname, age, country } = profile;
  const errors: EValidateProfileError[] = []

  if (!firstname || !lastname) {
    errors.push(EValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || isNaN(age)) {
    errors.push(EValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(EValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors;
}
