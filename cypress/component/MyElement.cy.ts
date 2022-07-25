import { MyElement } from '../../src/my-element';

describe('MyElement.cy.ts', () => {
  it('should validate its functionality', () => {
    cy.get('button').should('contain.text', 'Click Count: 0');
    cy.get('button').click();
    cy.get('button').should('contain.text', 'Click Count: 1');
  });

  it('should validate the styling for the H1 element', () => {
    cy.get('h1').should('contain.text', 'Hello, World');
    cy.get('h1').should('have.css', 'color', 'rgb(0, 128, 0)');
  });
  
  it('should validate the styling for the button element', () => {
    cy.get('button').should('contain.text', 'Click Count:');
    cy.get('button').should('have.css', 'background-color', 'rgb(255, 255, 0)');
  });

before(() => {
    cy.mount('<my-element>slot content</my-element>', MyElement);
  });

})
