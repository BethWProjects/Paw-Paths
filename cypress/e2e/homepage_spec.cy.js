describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://paw-paths.herokuapp.com/api/v1/pathData', {
      fixture: "sampleData.json"
    }).as("paths")
    cy.visit('http://localhost:3000')
  })

  it('Should be able to have a homepage with a nav bar', () => {
    cy.get('.nav-container').should('exist')
    .get('.pawLogo').should('exist')
    .get('.title').contains('Paw Paths')
    .get('.tagline').contains('For the walks you haven\'t taken yet...')
  });

  it('Should have a featured hikes and parks collection of five cards', () => {
    cy.get(".carousel-container")
      .get(".swiper-slide-prev").find(".carouselCard").find(".carousel-image").should("exist")
      .get(".swiper-slide-prev").find(".carouselCard").find(".carousel-card-title").should("exist")
      .get(".swiper-slide-prev").find(".carouselCard").find(".carousel-card-type").should("exist")
  });

  it('Should have a search bar with three buttons that filter results', () => {
    cy.get('.btn-container').should('exist')
    .get('.btn-container > :nth-child(1)').contains('Hikes')
    .get('.btn-container > :nth-child(2)').contains('Parks')
    .get('.btn-container > :nth-child(3)').contains('Clear')
    .get('.btn-container > :nth-child(1)').click()
    .get('.paths-container').find('.card').should('have.length', 4)
    .get('.btn-container > :nth-child(3)').click()
    .get('.paths-container').find('.card').should('have.length', 5)
  });

  it('Should have a collection of cards with an image, title, and type text visible', () => {
    cy.get('.paths-container > :nth-child(1)').find('.image').should('have.attr', 'src', 'https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2022/03/IMG_9133.jpeg')
    cy.get('.paths-container > :nth-child(1)').find('.card-title').contains('Mayflower Gulch Trail near Copper Mountain')
    cy.get('.paths-container > :nth-child(1)').find('.card-type').contains('Hike')
    cy.get('.paths-container > :nth-child(2)').find('.image').should('have.attr', 'src', 'https://dayhikesneardenver.com/wp-content/uploads/2022/03/IMG_9021.jpeg')
    cy.get('.paths-container > :nth-child(2)').find('.card-title').contains('Beaver Brook Trail at Windy Saddle Park')
    cy.get('.paths-container > :nth-child(2)').find('.card-type').contains('Hike')
  });

  it('Should be able to use the browser arrow buttons to go between the main page and individual path page', () => {
    cy.get('.paths-container > :nth-child(1)').click()
      .visit('http://localhost:3000/1').wait(2000)
      .url().should('eq', 'http://localhost:3000/1')
      cy.go('back').reload()
      .url().should('eq', 'http://localhost:3000/')
      cy.go('forward').reload()
      .url().should('eq', 'http://localhost:3000/1')
  });
});