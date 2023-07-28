describe("Recorrido invitado", () => {
  it("Presentar la app", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get("body").contains("Contáctanos").click();
    cy.get("[name='name']").type("Cristian Cuesta");
    cy.get("[name='email']").type("miemail@emails.com");
    cy.get("[name='message']").type("Prueba automatizada con cypress");
    cy.get("body").contains("Enviar").click();
    cy.wait(3000);
    cy.get("body").contains("Sobre nosotros").click();
    cy.scrollTo("top");
    cy.wait(1000);
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.get("body").contains("Cómo funciona").click();
    cy.get("body").contains("Ver Más").click();
    cy.wait(1000);
    cy.get("body").contains("Ver Más").click();
    cy.wait(1000);
    cy.get("body").contains("¿Cómo obtengo premium?").click();
    cy.wait(1000);
    cy.get("body").contains("¿Que beneficios tendré?").click();
    cy.wait(1000);
    cy.get("body").contains("Home").click();
    cy.wait(1000);
    cy.scrollTo("top");
  });
});
