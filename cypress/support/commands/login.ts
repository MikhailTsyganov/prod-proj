import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage'
import { IUser } from '../../../src/entities/User/model/types/userSchema'

export const loginComm = (username: string = 'testuser', password: string = '123') => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    return body;
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line
      login(username?: string, password?: string): Chainable<IUser>
    }
  }
}
