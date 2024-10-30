describe('template spec', () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.createArticle()
      // cy.visit('/articles/1')
    })
  });

  afterEach(() => {
    cy.removeArticle()
  })

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
