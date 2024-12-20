import { selectByTestId } from '../../helpers/selectByTestId';

describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('/articles');
    });
  });

  it('и статьи успешно подгружаются', () => {
    cy.get(selectByTestId('ArticleList')).should('exist');
    cy.get(selectByTestId('ArticleListItem')).should('have.length.lessThan', 3);
  });
  it('на стабах', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.get(selectByTestId('ArticleList')).should('exist');
    cy.get(selectByTestId('ArticleListItem')).should('have.length.lessThan', 3);
  });
  it.skip('пример заскипанного теста', () => {
    cy.get('123123123').should('exist');
  });
});
