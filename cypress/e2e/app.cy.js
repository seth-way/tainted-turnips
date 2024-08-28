const baseURL = 'http://localhost:3000/#';
const singleMovieURL = 'http://localhost:3000/#/movies/1013860';

describe('Load the app', () => {
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

    cy.visit(baseURL);
  });

  it('Should render the navbar with title', () => {
    cy.get('h1').contains('Tainted Turnips');
  });

  it('Should render the hero carousel with slides', () => {
    cy.get('#all-movies').first('.nuka-wrapper').as('heroCarousel');
    cy.get('@heroCarousel').first('.slide').as('slide').should('be.visible');
  });

  it('Should render all movies as movie cards', () => {
    cy.get('#all-movies')
      .first('.movie-cards-container')
      .as('cardContainer')
      .contains('All Movies');
    cy.get('@cardContainer')
      .first('.movie-card')
      .as('movieCard')
      .first('.img-wrapper');
    cy.get(':nth-child(2) > :nth-child(1) > .card-inside').contains('Smile');
  });

  it('Should show single movie view after movie card click', () => {
    cy.get('#all-movies')
      .first('.movie-cards-container')
      .as('cardContainer')
      .contains('All Movies');
    cy.get('@cardContainer')
      .first('.movie-card')
      .as('movieCard')
      .first('.img-wrapper');
    cy.get(':nth-child(2) > :nth-child(1) > .card-inside > .img-wrapper > img')
      .scrollIntoView()
      .should('be.visible');
    cy.get(
      ':nth-child(2) > :nth-child(1) > .card-inside > .img-wrapper > img'
    ).click();
    cy.url().should('eq', 'http://localhost:3000/#/movies/1013860');
  });

  it('Should render a featured movies carousel', () => {
    cy.get(
      '#hero-carousel > .nuka-slide-container > [data-testid="nuka-overflow"] > [data-testid="nuka-wrapper"] > :nth-child(1)'
    )
      .first('h2')
      .contains('R.I.P.D. 2: Rise of the Damned');
  });

  it('Should accept a click on the feature carousel button & render the single movie page', () => {
    cy.get(':nth-child(1) > a > .more-info').should('be.visible').click();
    cy.url().should('eq', 'http://localhost:3000/#/movies/1013860');
  });

  it('Should render the footer', () => {
    cy.get('footer').contains('Marshall Hotaling');
    cy.get('footer').contains('Seth Way');
  });
});

describe('Request movie that is not found', () => {
  it('Should return a 404 if movie is not found', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860',
      { stastatusCode: 404 }
    );
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860/videos',
      { stastatusCode: 404 }
    );
    cy.visit(singleMovieURL);
  });
});

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
