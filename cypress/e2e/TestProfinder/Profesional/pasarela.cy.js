import "cypress-file-upload";

describe("Pago pasarela", () => {
  it("Volverse Premium", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get(".chakra-button.css-1d2vc6t").click();
    cy.get("[name='email']").type("test01@gmail.com");
    cy.get("[name='password']").type("Asd123456");
    cy.get(".chakra-menu__menu-button").eq(2).click();
    cy.contains(/^Profesional$/).click();
    cy.get("body").contains("Ingresar").click();
    cy.get("body").contains("Obtén Premium").click();
    cy.get("body").contains("Obtene premium").click();
    cy.wait(3000);
    cy.get("body").contains("Pay with Mercado Pago").click();
    cy.wait(5000);
  });
});
