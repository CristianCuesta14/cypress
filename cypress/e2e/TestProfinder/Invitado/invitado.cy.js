describe("Pago pasarela", () => {
  it("Volverse Premium", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get("body").contains("Contáctanos").click();
    cy.get("[name='name']").type("Cristian Cuesta");
    cy.get("[name='email']").type("miemail@emails.com");
    cy.get("[name='message']").type("Prueba automatizada con cypress");
    cy.get("body").contains("Enviar").click();
    cy.wait(3000);
    cy.get("body").contains("Sobre nosotros");
  });
});
