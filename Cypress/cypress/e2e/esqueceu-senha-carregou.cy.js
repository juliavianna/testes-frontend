describe('Página de login', () => {
  it('Dado que o usuário esteja na página “login”, quando o usuário clicar em "Forgot your password?", então o ele deve ser redirecionado para a página "http://www.automationpractice.pl/index.php?controller=password"', () => {
    
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')

    cy.contains('a', 'Forgot your password?').click();

    cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=password');
    
  })
})

