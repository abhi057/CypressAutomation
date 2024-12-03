describe('Add a New Pet to the Store', () => {
    const pet = {
      id: 405701,
      category: {
        id: 1,
        name: "German Shepherd",
      },
      name: "Jade",
      photoUrls: ["string"],
      tags: [
        {
          id: 123,
          name: "Jtag",
        },
      ],
      status: "available",
    };
  

    //Test 1 - Add a new pet to the store successfully
    it('should successfully add a new pet', () => {
      cy.request({
        method: 'POST',
        url: '/pet',
        body: pet,
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'api_key',
        },
      }).then((response) => {
        // Assertions for a successful request
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', pet.id);
        expect(response.body).to.have.property('name', pet.name);
        expect(response.body).to.have.property('status', pet.status);
        expect(response.body.category).to.have.property('id', pet.category.id);
        expect(response.body.category).to.have.property('name', pet.category.name);
        expect(response.body.photoUrls).to.be.an('array').and.have.members(pet.photoUrls);
        expect(response.body.tags).to.be.an('array').and.have.length(1);
        expect(response.body.tags[0]).to.have.property('id', pet.tags[0].id);
        expect(response.body.tags[0]).to.have.property('name', pet.tags[0].name);
      });
    });
  

    //Test -2 : 405 invalid request
    it('should return 405 for an invalid request', () => {
      cy.request({
        method: 'PATCH', // Using an unsupported method for the `/pet` endpoint
        url: '/pet',
        failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx/3xx status codes
      }).then((response) => {
        // Assertions for a 405 error
        expect(response.status).to.eq(405);
      });
    });
  });
  