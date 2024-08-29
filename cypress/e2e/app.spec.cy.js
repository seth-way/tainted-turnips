const baseURL = 'http://localhost:3000/#';

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
