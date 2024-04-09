import { fireEvent, screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard';
import { type IMainDecoratorOptions, MainDecorator } from 'shared/config/testsDecorators/mainDecorator';
import userEvent from '@testing-library/user-event'
import { EValidateProfileError, type IProfile } from 'entities/Profile';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { profileReducer } from '../model/slice/profileSlice';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { $api } from 'shared/api/api';

const profile: IProfile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 228,
  currency: ECurrency.RUB,
  country: ECountry.Russia,
  city: 'Moscow',
  username: 'adm123'
}

const options: IMainDecoratorOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      currentDataForm: profile
    },
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  },
  asyncReducers: { profile: profileReducer }
}

describe('widgets/EditableProfileCard', () => {
  beforeEach(() => {
    MainDecorator(<><ProfilePageHeader /><EditableProfileCard/></>, { ...options })
  });

  test('Режим readonly должен переключиться', async () => {
    // MainDecorator(<><ProfilePageHeader /><EditableProfileCard/></>, options)
    await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'))
    expect(screen.getByTestId('ProfilePageHeader.cancelBtn')).toBeInTheDocument()
  });
  test('При нажатии на кнопку "отмена" значения должны обнуляться', async () => {
    // MainDecorator(<><ProfilePageHeader /><EditableProfileCard/></>, options)
    await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), '123')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), '123')

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('123')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('123')

    await userEvent.click(screen.getByTestId('ProfilePageHeader.cancelBtn'))

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
  });
  test('Должна появиться ошибка', async () => {
    // MainDecorator(<><ProfilePageHeader /><EditableProfileCard/></>, options)
    await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'))
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.click(screen.getByTestId('ProfilePageHeader.saveBtn'))
    expect(screen.getByTestId('EditableProfileCard.error.text')).toBeInTheDocument()
  });
  test('Если нет ошибок валидации на сервер должен уйти PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put')
    // MainDecorator(<><ProfilePageHeader /><EditableProfileCard/></>, { ...options, initialState: { profile: { validateErrors: [], readonly: true } } })
    await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'))
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), '123')
    await userEvent.click(screen.getByTestId('ProfilePageHeader.saveBtn'))

    expect(mockPutReq).toHaveBeenCalled()
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin123')
  });
})
