describe("Turing Cafe", () => {
  beforeEach(() => {
    cy.intercept("DELETE", "http://localhost:3001/api/v1/reservations/2", {
      statusCode: 202,
      body: [{"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12}]
    })
    cy.intercept("POST", "http://localhost:3001/api/v1/reservations",
    {
      statusCode: 201,
      body: {
        id: 3, 
        name: "Elizabeth", 
        date: "08/23", 
        time: "6:00", 
        number: 2,
      }
     })
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
    cy.get("[data-test=reservation-input-date]").type("08/23")
    cy.get("[data-test=reservation-input-time]").type("6:00")
    cy.get("[data-test=reservation-input-number]").type("2")
    cy.get("[data-test=form-btn]").contains("Make Reservation").click()


    cy.get("[data-test=reservation-card]").eq(2).children().should("contain", "Elizabeth")
    .and("contain", "08/23")
    .and("contain", "6:00pm")
    .and("contain", "number of Guests: 2")

  })

  it("should cancel a reservation from the list", () => {
    cy.get("[data-test=cancel-btn]").eq(1).click()
    cy.get("[data-test=reservation-card]").should("have.length", 1)
    cy.get("[data-test=reservation-card]").contains("Christie")
  })
})