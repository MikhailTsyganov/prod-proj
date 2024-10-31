export const addComment = (text: string) => {
  cy.getByTestId('AddNewComment.input').type(text)
  cy.getByTestId('AddNewComment.addBtn').click()
  //   return cy.request({
  //     method: 'POST',
  //     url: `http://localhost:8000/articles/${articleId}`,
  //     headers: {
  //       Authorization: 'daawdasd'
  //     },
  //     body: article ?? defaultArticle

//   }).then(res => {
//     return res.body
//   })
}

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line
      addComment(text: string): Chainable<void>
    }
  }
}
