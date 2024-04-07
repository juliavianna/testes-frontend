describe('Página de login', () => {
  it('Clicar em "Forgot your password?" e verificar se o usuário está sendo redirecionado para a página "http://www.automationpractice.pl/index.php?controller=password"', () => {
    
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')

    cy.contains('a', 'Forgot your password?').click();

    cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=password');
    
  })
})

