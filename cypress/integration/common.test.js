describe('Common. User', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should see proper title in header', () => {
    const titleText = 'FIND YOUR MOVIE';

    cy.get('header p').contains(titleText);
  });
});
