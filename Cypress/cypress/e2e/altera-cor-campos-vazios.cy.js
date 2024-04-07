describe('Página de login', () => {
    it('Apenas clicar nos campos e não preenchê-los e verificar se a cor dos campos muda para rgb(241, 51, 64) ', () => {

        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')

        cy.get('#email')
            .click()
            .blur();
        cy.get('#passwd')
            .click()
            .blur();
            cy.get('#email_create')
            .click()
            .blur();

        cy.get('.form-group.form-error #email').should('have.css', 'color', 'rgb(241, 51, 64)');
        cy.get('.form-group.form-error #passwd').should('have.css', 'color', 'rgb(241, 51, 64)');
        cy.get('.form-group.form-error #email_create').should('have.css', 'color', 'rgb(241, 51, 64)');
    })
  })
  