const baseURL = 'http://localhost:3000/#';

describe('Simulate down server', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 503 }
    );

    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860',
      { statusCode: 503 }
    );

    cy.visit(baseURL);
  });

  it('Should render error with 503 error message', () => {
    cy.get('h2').contains('503');
  });
});
