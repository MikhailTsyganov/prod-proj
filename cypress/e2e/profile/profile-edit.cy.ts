import { loginComm } from '../../support/commands/login';

const user = {}

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('');
    loginComm().then(data => { data })
  });

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
