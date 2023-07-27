describe("Registro Cliente", () => {
  it("Registro Cliente", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get("#menu-button-\\:ra\\:").click();
    cy.get("body").contains("Soy cliente").click();
    cy.get("[name='name']").type("Cristian");
    cy.get("[name='email']").type("test02@gmail.com");
    cy.get('[name="password"]').type("Asd123456");
    cy.get("[name='phone']").type("3154255555");
    cy.get("body").contains("Registrarme").click();
  });
});
