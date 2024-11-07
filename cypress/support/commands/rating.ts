export const setRate = (rate: number = 5, feedback: string = 'feedback') => {
  cy.getByTestId(`StarRating.${rate}`).click();
  cy.getByTestId('RatingCard.feedbackInput').type(feedback);
  cy.getByTestId('RatingCard.sendBtn').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line
      setRate(rate: number, feedback: string): Chainable<void>;
    }
  }
}
