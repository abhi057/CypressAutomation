Here's a `README.md` file for your API Test automation framework:

# API Test Automation with Cypress

## Tech Stack
This project utilizes **Cypress** with **JavaScript** for API testing. The reporting is done using **mochawesome** for generating HTML reports.

---

## How to Run
1. Navigate to the project directory:
   cd path/to/your/api-test-repo

2. Install the required dependencies:
   npm install

3. To run the API tests, execute the following command:
   npm run test

---

## Test Scripts
The API tests are located in the `cypress/e2e` directory and include the following test files:

- **addPet.cy.js** - Test cases for adding a new pet to the store.
- **findPet.cy.js** - Test cases for finding a pet by ID with various test scenarios.

---

## API Test Scenarios

- **Endpoint**: `POST /pet`
-  1. Add a new pet to the pet store with valid data.
- **Validation**: 
  - Assert that the response status code is 200.
  - Assert that the returned pet data includes the correct `id`, `name`, and `status`.
-  2. Add a new pet to the pet store with invalid request.
- **Validation**: 
  - Assert that the response status code is 405.
  
- **Endpoint**: `GET /pet/{petId}`
  1. **Valid Pet ID**: Retrieve a pet by a valid ID and verify the response.
  2. **Pet Not Found**: Try to find a pet that doesn't exist (`404 - Pet not found`).
- **Validation**:
  - Assert correct status codes (`200` for valid, `400` for invalid ID, `404` for not found).
  - Validate the response body against expected values.

---

## Test Reporting
Test results are generated automatically after each test run using **mochawesome**. These reports provide a clear view of the test execution, including the passed and failed tests, error messages, and detailed logs.

Reports are stored in the `cypress/reports` directory.

---

## Example of Running Tests

To run all API tests, execute the following:

npm run test

This will run combinedTests.cy.js which in turn runs all the test cases defined in the `addPet.cy.js` and `findPet.cy.js` files and generate a mochawesome report.

---

## Directory Structure

```
api-test-repo
├── cypress
│   ├── e2e
│   │   ├── addPet.cy.js
|   |    |---combinedTests.cy.js
│   │   ├── findPet.cy.js
│   ├── reports (generated after test execution)
├── package.json
├── README.md
```

---

## Notes
- Ensure all required dependencies are installed before running the tests.
- The test cases follow REST API principles and include valid/invalid responses based on the Petstore API's documented behavior.
