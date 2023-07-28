import "cypress-file-upload";

describe("Posteo Profesional", () => {
  it("Posteo Profesional", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://profinder-client.vercel.app/");
    cy.get(".chakra-button.css-1d2vc6t").click();
    cy.get("[name='email']").type("test50@gmail.com");
    cy.get("[name='password']").type("Asd123456");
    cy.get(".chakra-menu__menu-button").eq(2).click();
    cy.contains(/^Profesional$/).click();
    cy.get("body").contains("Ingresar").click();

    // Crear Post
    cy.get("body")
      .contains(/^Publicar$/)
      .wait(1000)
      .click();
    cy.get("[name='title']").type(
      "esta es una prueba automatizada con cypress"
    );

    const filePath = "fondo.png";

    cy.get("input[type=file]").attachFile(filePath, {
      filePath: filePath,
      mimeType: "image/jpeg",
    });

    cy.get("body").contains("Categorias").click();
    cy.get("body").contains("Tecnología").click();
    cy.get("body").contains("Ocupacion").click();
    cy.get("body").contains("Analista de datos").click();
    cy.get("[name='content']").type(
      "esta es una prueba automatizada con cypress"
    );
    cy.get("body").contains("Enviar").click();
    cy.get("body")
      .contains(/^Ver mis Publicaciones$/)
      .wait(4000)
      .click();

    //segundo post

    cy.get("body")
      .contains(/^Publicar$/)
      .wait(3000)
      .click();
    cy.get("[name='title']").type(
      "esta es una prueba automatizada con cypress"
    );

    cy.get("input[type=file]").attachFile(filePath, {
      filePath: filePath,
      mimeType: "image/jpeg",
    });

    cy.get("body").contains("Categorias").click();
    cy.get("body").contains("Tecnología").click();
    cy.get("body").contains("Ocupacion").click();
    cy.get("body").contains("Analista de datos").click();
    cy.get("[name='content']").type(
      "esta es una prueba automatizada con cypress"
    );
    cy.get("body").contains("Enviar").click();
    cy.get("body")
      .contains(/^Ver mis Publicaciones$/)
      .wait(4000)
      .click();
  });
});
