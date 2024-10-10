/// <reference types="cypress" />

describe('recruit create page', () => {
	it('should render the recruitment posting page', () => {
		cy.visit('http://localhost:5173/recruitment/postings');
	});
});
