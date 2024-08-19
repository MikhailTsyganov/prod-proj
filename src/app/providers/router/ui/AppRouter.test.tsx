import { MainDecorator } from '@/shared/config/testsDecorators/mainDecorator'
import AppRouter from './AppRouter'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { screen } from '@testing-library/react'
import { EUserRoles } from '@/entities/User'

describe('app/router/AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    MainDecorator(<AppRouter/>, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    MainDecorator(<AppRouter/>, {
      route: '/dawdwadawddwddsdad'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя на главную', async () => {
    MainDecorator(<AppRouter/>, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    MainDecorator(<AppRouter/>, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ запрещен (отсутствует роль)', async () => {
    MainDecorator(<AppRouter/>, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Доступ разрешен (присутствует роль)', async () => {
    MainDecorator(<AppRouter/>, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [EUserRoles.ADMIN]
          }
        }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
