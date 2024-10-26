import { loginComm } from './commands/login';

Cypress.Commands.add('login', loginComm)

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line
      login(username?: string, password?: string): Chainable<void>
    }
  }
}

export {};
