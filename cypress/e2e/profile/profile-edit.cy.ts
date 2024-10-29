describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(data => {
      cy.visit(`/profile/${data?.id}`)
    })
  });

  it('И успешно загружает его', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'TEST')
  })
  it('И редактирует его', () => {
    // cy.visit('https://example.cypress.io')
  })
})
