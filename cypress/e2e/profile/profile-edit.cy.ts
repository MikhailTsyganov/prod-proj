let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data?.id;
      cy.visit(`/profile/${data?.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('И успешно загружает его', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'TEST');
  });
  it('И редактирует его', () => {
    cy.updateProfile('new', 'lastname');
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'lastname');
  });
});
