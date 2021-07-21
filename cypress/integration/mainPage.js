describe('Main page', () => {
  beforeEach(() => {
    
    cy.fixture('reservationMockList').then((testReservationList) => {
      cy.intercept('http://localhost:3001/api/v1/reservations', testReservationList)
      cy.visit('http://localhost:3000')
    })
  });
  it('Should be able to visit the page and render the title', () => {
    cy.get('.app-title')
      .contains('Turing Cafe Reservations')
  });
  it('Should have a container that holds all the reservations', () => {
    cy.get('.card').should('have.length','1')
  })
  it('Should have reservation details in the card', () => {
    cy.get('.card')
      .get('.card-name').should('exist').contains('Christie')
      .get('.card-date').should('exist').contains('12/29')
      .get('.card-time').should('exist').contains('7:00')
      .get('.card-number').should('exist').contains(12)
  })
  it('Should have a form with name, date, time, number of guests input', () => {
    cy.get('.form')
      .get('.form-name').should('exist')
      .get('.form-date').should('exist')
      .get('.form-time').should('exist')
      .get('.form-number').should('exist')
      .get('.form-button').should('exist')
  })
})