describe("Turing Cafe", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/reservations", {fixture: "reservations.json"})
    cy.visit("http://localhost:3000/")
  })
  it("Should display a reservation form and list of reservations", () => {
    cy.contains("Turing Cafe Reservations")
    cy.get("[data-test=reservation-form]").children().should("have.length", 5)
    cy.get("[data-test=form-btn]").contains("Make Reservation")
    cy.get("[data-test=reservation-card]").should("have.length", 2)
    cy.get("[data-test=reservation-card]").first().contains("Christie")
    cy.get("[data-test=reservation-card]").eq(1).contains("Leta")
  })

  it("Should allow a user to type into the reservation form", () => {
    cy.get("[data-test=reservation-input-name]").type("Elizabeth")
    cy.get("[data-test=reservation-input-name]").should("have.value", "Elizabeth")
    cy.get("[data-test=reservation-input-date]").type("09/21")
    cy.get("[data-test=reservation-input-date]").should("have.value", "09/21")
    cy.get("[data-test=reservation-input-time]").type("5:00")
    cy.get("[data-test=reservation-input-time]").should("have.value", "5:00")
    cy.get("[data-test=reservation-input-number]").type("3")
    cy.get("[data-test=reservation-input-number]").should("have.value", "3")
  })

  it("Should add a new reservation to the list", () => {
    cy.get("[data-test=reservation-input-name]").type("Elizabeth")
    cy.get("[data-test=reservation-input-date]").type("09/21")
    cy.get("[data-test=reservation-input-time]").type("5:00")
    cy.get("[data-test=reservation-input-number]").type("3")
    cy.get("[data-test=form-btn]").contains("Make Reservation").click()
    cy.get("[data-test=reservation-card]").eq(2).children().should("contain", "Elizabeth")
    .and("contain", "09/21")
    .and("contain", "5:00pm")
    .and("contain", "number of Guests: 3")

  })
})