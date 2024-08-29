const singleMovieURL = 'http://localhost:3000/#/movies/1013860';

describe('Load the single movie view', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { statusCode: 200, fixture: 'movies' }
    );

    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860',
      { statusCode: 200, fixture: 'movie' }
    );

    cy.visit(singleMovieURL);
  });

  it('Should render the navbar with title', () => {
    cy.get('h1').contains('Tainted Turnips');
  });

  it('Should render the single movie slide', () => {
    cy.get('.slide').first('h2').contains('R.I.P.D. 2: Rise of the Damned');
  });

  it('should render the video carousel', () => {
    cy.get('.all-videos')
      .first('.nuka-wrapper')
      .first('iframe-wrapper')
      .get('iframe')
      .should('exist');
  });

  it('should render information for the movie', () => {
    cy.get('.movie-info > :nth-child(1) > h3').contains('Description');
  });

  it('Should render the footer', () => {
    cy.get('footer').contains('Marshall Hotaling');
    cy.get('footer').contains('Seth Way');
  });

  it('Should accept a click on the home button & return to all movies view', () => {
    cy.get('#home-btn').click();
    cy.get('.movie-cards-container').contains('All Movies');
  });
});
