describe("Login Profesional", () => {
  it("Login Profesiona ", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get(".chakra-button.css-1d2vc6t").click();
    cy.get("[name='email']").type("profinder943@gmail.com");
    cy.get("[name='password']").type("P1234567");
    cy.get("body").contains("Ingresar").click();

    //activar premium
    cy.wait(4000);
    cy.contains("Activar Premium", { timeout: 10000 }).click();
    cy.wait(4000);
    cy.contains("Quitar Premium", { timeout: 10000 }).click();
    cy.wait(4000);
    cy.contains("Banear Cuenta", { timeout: 10000 }).click();
    cy.wait(4000);
    cy.contains("Activar Cuenta", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Clientes").click();
    cy.wait(3000);
    cy.contains("Banear Cuenta", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Activar Cuenta", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Posteos", { timeout: 10000 }).click();
    cy.wait(3000);
    cy.contains("Posteos Borrados", { timeout: 10000 }).click();
    cy.wait(3000);
  });
});
