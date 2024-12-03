describe('Find Pet by ID', () => {
    const validPetId = 405701; // Ped id added in previous script
   // const invalidPetId = 'invalid-id'; // Non-numeric invalid ID to trigger 400
    const nonExistentPetId = 104854583485; // A pet ID that does not exist in the store
  
    // Test - 1 : Find pet by pet id 
    it('should successfully find a pet by valid ID', () => {
      cy.request({
        method: 'GET',
        url: `/pet/${validPetId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Assertions for a successful request
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', validPetId);
        expect(response.body).to.have.property('name').and.to.be.a('string');
        expect(response.body).to.have.property('status').and.to.be.a('string');
      });
    });
  
  //Test-2: Return 404 not found when pet not found
    it('should return 404 when pet is not found', () => {
      cy.request({
        method: 'GET',
        url: `/pet/${nonExistentPetId}`, // Using a non-existent pet ID
        failOnStatusCode: false, // Prevent Cypress from failing the test
      }).then((response) => {
        // Assertions for a 404 error
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('code', 1);
        expect(response.body).to.have.property('type', 'error');
        expect(response.body).to.have.property('message', 'Pet not found'); // As per the API's spec
      });
    });
  });
  