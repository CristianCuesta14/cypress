/*******************/
describe("Login Cliente", () => {
    it("Login Cliente ", () => {
      cy.viewport(1200, 1000);
      cy.visit("https://profinder-client.vercel.app/");
      cy.get(".chakra-button.css-1d2vc6t").click();
      cy.get("[name='email']").type("test02@gmail.com");
      cy.get("[name='password']").type("Asd123456");
      cy.get(".chakra-menu__menu-button").eq(2).click();
      cy.contains(/^Cliente$/).click();
      cy.get("body").contains("Ingresar").click();
  
      //Feedback
      cy.contains("Formulario de feedback").should("be.visible").click();
      cy.get("body")
        .contains("Busca y selecciona un profesional...")
        .click({ force: true });
      cy.contains("Tom Casanova").click();
      cy.get("select").select("Malo");
      cy.get("textarea").type("esta es una prueba automatizada");
      cy.get("body").contains("Enviar Feedback").click();
  
      // cy.contains("Excelente").click();
    });
  });