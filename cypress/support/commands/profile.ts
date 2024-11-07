export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('ProfilePageHeader.editBtn').click();
  cy.getByTestId('ProfileCard.firstname')
    .clear()
    .type(firstname ?? 'new');
  cy.getByTestId('ProfileCard.lastname')
    .clear()
    .type(lastname ?? 'lastname');
  cy.getByTestId('ProfilePageHeader.saveBtn').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'daawdasd',
    },
    body: {
      id: 4,
      firstname: 'TEST',
      lastname: 'USER',
      age: '36',
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Kiev',
      username: 'testuser',
      avatar:
        'https://cdnn21.img.ria.ru/images/146095/02/1460950266_491:0:3627:3136_1920x0_80_0_0_b2fa213b2de09667975ba6598ae34edb.jpg',
      userId: 4,
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      // eslint-disable-next-line
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
