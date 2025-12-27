describe('Serve Customer', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173');

        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('Tanjiro Kamado');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('tanjiro.kamado@example.com');
        cy.getByData('queue-form-service-type').select('training');
        cy.getByData('queue-form-check-in').click();

        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('Nezuko Kamado');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('nezuko.kamado@example.com');
        cy.getByData('queue-form-service-type').select('training');
        cy.getByData('queue-form-check-in').click();

        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('Zenitsu Agatsuma');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('zenitsu.agatsuma@example.com');
        cy.getByData('queue-form-service-type').select('training');
        cy.getByData('queue-form-check-in').click();
    })

    it('should serve the first customer and serve button should be disabled', function () {
        cy.getByData('customer-card').eq(0).findByData('serve-btn').click();
        cy.getByData('customer-card').eq(0).findByData('serve-btn').should('not.exist');
    });

    it('serving customers should be displayed first, followed by waiting customers', function () {
        cy.getByData('customer-card').eq(1).findByData('serve-btn').click();

        cy.getByData('customer-card').eq(0).findByData('customer-name').should('contain', 'Nezuko Kamado');
        cy.getByData('customer-card').eq(1).findByData('customer-name').should('contain', 'Tanjiro Kamado');
        cy.getByData('customer-card').eq(2).findByData('customer-name').should('contain', 'Zenitsu Agatsuma');
    });

    it('should remove the first customer from the queue', function () {
        cy.getByData('customer-card').eq(0).findByData('serve-btn').click();
        cy.getByData('customer-card').eq(0).findByData('remove-btn').click();
        cy.getByData('customer-card').eq(0).findByData('customer-name').should('not.contain', 'John Doe');
    });
});

