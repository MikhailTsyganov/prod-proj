import { IArticle } from '../../../src/entities/Article/model/types/article';

const defaultArticle = {
  title: 'test news',
  subtitle: 'Что нового в E2E за 2022 год?',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
  views: 5204,
  createdAt: '26.02.2024',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: IArticle) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: {
        Authorization: 'daawdasd',
      },
      body: article ?? defaultArticle,
    })
    .then((res) => {
      return res.body;
    });
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
      Authorization: 'daawdasd',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line
      createArticle(article?: IArticle): Chainable<IArticle>;
      // eslint-disable-next-line
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
