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

  it('should as expected for a range of numbers (negative)', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-4')
  })

  it('should as expected for a range of numbers (positive)', () => {
    cy.get('#number6').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })

  it('should as expected for a range of numbers (decimals)', () => {
    cy.get('#number2').click()
    cy.get('#decimal').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#decimal').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('should as expected for a range of numbers (large numbers)', () => {
    cy.get('#number2').click()
    cy.get('#number2').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '160')
  })


  it('should be able to do exceptional circumstances', () => {
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0')

  })
})