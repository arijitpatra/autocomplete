describe("e2e tests for autocomplete:", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows correct text in the input box when typed", () => {
    const searchText = "Ma";
    cy.get('input[type="search"]')
      .type(searchText)
      .should("have.value", searchText);
  });

  it("shows correct options as per search text", () => {
    const searchText = "Mal";
    cy.get('input[type="search"]').type(searchText);
    const suggestions = ["Mali", "Maldives", "Malaysia", "Malawi", "Malta"];
    suggestions.forEach((item) =>
      cy.get("ul").contains(item, { matchCase: true })
    );
  });

  it("shows selected item in the autocomplete box correctly", () => {
    const searchText = "Mala";
    cy.get('input[type="search"]').type(searchText);
    const target = "Malaysia";
    cy.get("ul").contains(target).click();
    cy.get('input[type="search"]').should("have.value", target);
  });
});
