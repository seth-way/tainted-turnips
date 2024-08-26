const baseURL = 'http://localhost:3000/tainted-turnips';
// const baseURL = 'https://seth-way.github.io/tainted-turnips/';
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
    cy.get(':nth-child(1) > .card-inside > .img-wrapper > img')
      .scrollIntoView()
      .should('be.visible');
    cy.get(':nth-child(1) > .card-inside > .img-wrapper > img').click();
  });

  it('Should render the footer', () => {
    cy.get('footer').contains('Marshall Hotaling');
    cy.get('footer').contains('Seth Way');
  });
});
