import "cypress-file-upload";

describe("Registro Profesional", () => {
  it("Registro Profesional", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get("#menu-button-\\:ra\\:").click();
    cy.get("body").contains("Soy profesional").click();
    cy.get("[name='name']").type("Cristian Cuesta");
    cy.get("[name='email']").type("test50@gmail.com");
    cy.get('[name="password"]').type("Asd123456");
    cy.get("body").contains("Siguiente").click();
    cy.get("[name='phone']").type("3154255555");
    cy.get('select[name="country"]').select("Argentina");
    cy.get('select[name="location"]').select("Mendoza");

    const filePath = "fondo.png";

    cy.get("input[type=file]").attachFile(filePath, {
      filePath: filePath,
      mimeType: "image/jpeg",
    });
    cy.get("[name='years_exp']").type("3");
    cy.get("body").contains("Categorias").click();
    cy.get("body").contains("Tecnología").click();
    cy.get("body").contains("Ocupacion").click();
    cy.get("body").contains("Analista de datos").click();
    cy.get("body").contains("Registrarme").click();
  });
});
