import { validateProfileData } from './validateProfileData';
import avatar from 'shared/assets/tests/storybook.jpeg'
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { EValidateProfileError } from 'entities/Profile';

describe('validateProfileData', () => {
  const data = {
    firstname: 'Mike',
    lastname: 'Tsyganov',
    age: 26,
    currency: ECurrency.USD,
    country: ECountry.Belarus,
    city: 'Tbilisi',
    username: 'FFir3',
    avatar

  };

  test('no errors', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([]);
  })

  test('without firstname and laslname', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' })
    expect(result).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 })
    expect(result).toEqual([EValidateProfileError.INCORRECT_AGE]);
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })
    expect(result).toEqual([EValidateProfileError.INCORRECT_COUNTRY]);
  })

  test('incorrect all (empty profile)', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.INCORRECT_AGE,
      EValidateProfileError.INCORRECT_COUNTRY
    ]);
  })

  test('without profile', async () => {
    const result = validateProfileData()
    expect(result).toEqual([
      EValidateProfileError.NO_DATA
    ]);
  })
})
