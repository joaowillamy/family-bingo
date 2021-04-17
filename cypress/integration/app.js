describe('app', () => {
    it('should has a message error when code no exist', () => {
        cy.visit('/')
        cy.findByText(/não encontramos/i).should('exist')
    });

    it('should has a message error when code is invalid', () => {
        cy.visit('/asdasd')
        cy.findByText(/não encontramos/i).should('exist')
    });

    it('should have url code', () => {
        cy.visit('/family-bingo#/?code=maria')
        cy.findByText(/maria/i).should('exist')
    });
});