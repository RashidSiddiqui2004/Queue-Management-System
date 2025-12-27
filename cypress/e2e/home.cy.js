describe('Queue Management System', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should contain the title and description', () => {
    cy.getByData('queue-management-system-title').should('have.text', 'Queue Management System')
    cy.getByData('queue-management-system-description').should('have.text', 'Manage your customers efficiently')
  })

  it('should contain the author and embed buttons', () => {
    cy.getByData('author-button').should('have.text', 'Rashid Siddiqui')
    cy.getByData('embed-button').should('have.text', 'Embed')
  })

  it('should contain the footer text', () => {
    cy.getByData('footer-text').should('have.text', '© 2025 Queue Management System. All rights reserved.')
  })
});