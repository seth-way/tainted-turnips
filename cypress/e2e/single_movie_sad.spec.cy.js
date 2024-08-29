const singleMovieURL = 'http://localhost:3000/#/movies/1013860';

describe('Request movie that is not found', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860',
      { statusCode: 404 }
    );
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860/videos',
      { statusCode: 404 }
    );
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 200, fixture: 'movies' }
    );
    cy.visit(singleMovieURL);
  });

  it('Should return a 404 if movie is not found', () => {
    cy.get('h2').contains('404');
  });
});
