describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should do maths', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('should do multiple operations be chained together', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '7')
  })

  it('should as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-4')
  })

  it('should be able to do exceptional circumstances', () => {
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0')

  })
})