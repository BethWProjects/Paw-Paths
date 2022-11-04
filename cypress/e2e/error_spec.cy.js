describe('Error handling flows', () => {
  it('Should show error when all paths cannot be retrieved', () => {
    cy.intercept('GET', 'https://paw-paths.herokuapp.com/api/v1/pathData', {
      forceNetworkError: true
    }).as('error')
    cy.visit('http://localhost:3000')
    cy.get('[class="error-message"]').contains('Error Getting Paths')
  });
});