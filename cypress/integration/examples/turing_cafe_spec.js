describe("Turing Cafe", () => {
  it("Should display a reservation form and list of reservations", () => {
    cy.intercept("http://localhost:3001/api/v1/reservations", {fixture: "reservations.json"})
    cy.visit("http://localhost:3000/")
    cy.contains("Turing Cafe Reservations")
    cy.get("[data-test=reservation-form]").children().should("have.length", 5)
    cy.get("[data-test=form-btn]").contains("Make Reservation")
    cy.get("[data-test=reservation-card]").should("have.length", 2)
    cy.get("[data-test=reservation-card]").first().contains("Christie")
    cy.get("[data-test=reservation-card]").eq(1).contains("Leta")
  })
})