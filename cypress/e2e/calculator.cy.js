describe('positive case calculator tests', () => {
  it('should check 16 displays on 7 + 9', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#seven').click();
    cy.get('#plus').click();
    cy.get('#nine').click();
    cy.get('#equals').click();

    cy.get('#display-result').should("contain", "16");
  })


  it('should check 88 displays on 8 * 11', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#eight').click();
    cy.get('#multiply').click();
    cy.get('#one').click();
    cy.get('#one').click();
    cy.get('#equals').click();

    cy.get('#display-result').should("contain", "88");
  })


  it('should check 24 displays on 72 / 3', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#seven').click();
    cy.get('#two').click();
    cy.get('#divide').click();
    cy.get('#three').click();
    cy.get('#equals').click();

    cy.get('#display-result').should("contain", "24");
  })

  it('should check 8.5 displays on 4.25 * 2', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#four').click();
    cy.get('#dot').click();
    cy.get('#two').click();
    cy.get('#five').click();
    cy.get('#multiply').click();
    cy.get('#two').click();
    cy.get('#equals').click();

    cy.get('#display-result').should("contain", "8.5");
  })

  it('should check 0.1 displays on 10 %', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#one').click();
    cy.get('#zero').click();
    cy.get('#percent').click();
    cy.get('#equals').click();
    cy.get('#display-result').should("contain", "0.1");
  })

  it('should check -6 displays on -2 * 3', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#negate').click();
    cy.get('#two').click();
    cy.get('#multiply').click();
    cy.get('#three').click();
    cy.get('#equals').click();

    cy.get('#display-result').should("contain", "-6");
  })

})

describe('negative case calculator tests', () => {
  it('should check you cant add multiple decimal points', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#one').click();
    cy.get('#dot').click();
    cy.get('#dot').click();
    cy.get('#five').click();
    cy.get('#plus').click();
    cy.get('#eight').click();
    cy.get('#dot').click();
    cy.get('#five').click();
    cy.get('#equals').click();

    cy.get('#display-result').should("not.contain", "10");
  })

})
