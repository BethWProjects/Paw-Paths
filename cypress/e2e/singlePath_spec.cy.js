describe('Single Path page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://paw-paths.herokuapp.com/api/v1/pathData', {
      fixture: "detailPageData.json"
    }).as("detail")
    cy.visit('http://localhost:3000/1')
  });
  
  it('Should show a detail page for a hike or park', () => {
    cy.get('.path-details-container').find('.details-image').should('have.attr', 'src', 'https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2022/03/IMG_9133.jpeg')
    .get('.title').contains('Mayflower Gulch Trail near Copper Mountain')
    .get('.location').contains('Mayflower Gulch Trail, CO-91, Frisco, CO 80443')
    .get('.path-details').contains('Distance - 3 miles')
    .get('.path-details').contains('Difficulty - Easy to Moderate')
    .get('.path-details').contains('Leash required? - Yes')
    .get('.overview').contains('Easy parking. Gentle elevation. Three miles round trip. And a ghost town? The Mayflower Gulch Trail gives you all this and a shockingly gorgeous basin to behold. On top of all this, the hike works well for families, especially if there exists any curiosity about the old west. The spacious gulch invites visitors to wander around and discover the fringes…a running stream, abandoned mines, and ridge line views. Caution: DO NOT inspect abandoned mines or even walk too closely; enjoy them from a distance! They can have unstable internal structures and entrances.')
  });

  it('Should have four icons', () => {
    cy.get('.location > .icon').should('have.attr', 'alt', 'Location Icon')
    cy.get(':nth-child(3) > .icon').should('have.attr', 'alt', 'Distance Footprint Icon')
    cy.get(':nth-child(4) > .icon').should('have.attr', 'alt', 'Difficulty Spicy Pepper Icon')
    cy.get(':nth-child(5) > .icon').should('have.attr', 'alt', 'Dog with Leash Required Icon')
  });
});
