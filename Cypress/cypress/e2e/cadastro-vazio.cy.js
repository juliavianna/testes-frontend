describe('Página de login', () => {
    it('Deixar o campo Email adress vazio e clicar em Create an account ', () => {
      
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
      
      cy.contains('button', 'Create an account').click();
      cy.contains('Invalid email address.').should('be.visible')
    })
  })
  