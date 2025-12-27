describe('Add Customer', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('should not add customer when name is empty', function () {
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('john.doe@example.com');
        cy.getByData('queue-form-service-type').select('consultation');
        cy.getByData('queue-form-check-in').click();

        // queue should be empty
        cy.getByData('queue-title').should('contain', 'Current Queue (0)');
    });

    it('should not add customer when email is empty', function () {
        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('John Doe');
        cy.getByData('queue-form-service-type').select('consultation');
        cy.getByData('queue-form-check-in').click();

        // queue should be empty
        cy.getByData('queue-title').should('contain', 'Current Queue (0)');
    });


    it('should not add customer when email is not valid', function () {
        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('John Doe');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('Doe');
        cy.getByData('queue-form-service-type').select('consultation');
        cy.getByData('queue-form-check-in').click();

        // queue should be empty
        cy.getByData('queue-title').should('contain', 'Current Queue (0)');
    });

    it('should add customer when all fields are valid', function () {
        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('John Doe');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('john.doe@example.com');
        cy.getByData('queue-form-service-type').select('consultation');
        cy.getByData('queue-form-check-in').click();

        // queue should not be empty
        cy.getByData('queue-title').should('contain', 'Current Queue (1)');
        cy.getByData('customer-card').should('contain', 'John Doe');
    });

    it('should add multiple customers', function () {
        // Actions 
        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('John Doe');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('john.doe@example.com');
        cy.getByData('queue-form-service-type').select('consultation');
        cy.getByData('queue-form-check-in').click();
        cy.getByData('queue-form-name').click();
        cy.getByData('queue-form-name').type('Rashid Siddiqui');
        cy.getByData('queue-form-email').click();
        cy.getByData('queue-form-email').type('rashid.siddiqui@example.com');
        cy.getByData('queue-form-service-type').select('training');
        cy.getByData('queue-form-check-in').click();

        // Assertions
        cy.getByData('queue-title').should('contain', 'Current Queue (2)');
        cy.getByData('customer-card').eq(0).should('contain', 'John Doe');
        cy.getByData('customer-card').eq(1).should('contain', 'Rashid Siddiqui');
    })

});
