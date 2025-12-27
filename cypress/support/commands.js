// Custom commands

// getByData
// This command is used to select elements by data-testid attribute
Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-testid=${selector}]`)
})

// findByData
// This command is used to select elements by data-testid attribute
// within a parent element
Cypress.Commands.add(
    "findByData",
    { prevSubject: "element" },
    (subject, selector) => {
        return cy.wrap(subject).find(`[data-testid="${selector}"]`)
    }
)
