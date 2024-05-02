# Project Description
Implement a Restful API (Any framework/language) that provides a few CRUD endpoints for the
 sample data listed above – focus on authentication/authorization, security (OWSAP top 10), documentation (Swagger), and testing. You can keep the data in memory or a file (CSV or JSON file) without setting up a database. 

# Project Overview

As part of the technical challenge presented by Auxin Security, I developed a robust RESTful API using Node.js and Express.js. The primary objectives were to provide CRUD functionality for a sample dataset while emphasizing authentication/authorization, adhering to security best practices, documenting the API using Swagger, and ensuring thorough testing.

# Technology Stack

Node.js: Utilized as the backend JavaScript runtime environment.
Express.js: Employed as a minimalist web framework for Node.js to construct the RESTful API.
Swagger: Implemented for comprehensive API documentation through Swagger UI, enhancing usability and understanding.
Jest and Supertest: Utilized for rigorous testing of the application.
Postman: Rigorously tested the RESTful API via Postman.

# Project Implementation Overview
Below I have explained how the application that I developed focuses on all the key aspects as instructed in the project description. 

## Authentication and Authorization
Implemented JWT (JSON Web Tokens) for secure user authentication, allowing controlled access to API endpoints. Authorization middleware was integrated to restrict CRUD operations solely to authenticated users. Unregistered users are prevented from executing CRUD operations as part of the comprehensive authorization mechanism.

## Security Measures
While not all OWASP top 10 security risks were pertinent to this project, attention was paid to adopting industry best practices and mitigating potential risks that real-world applications might face. Here are the security measures implemented in alignment with the OWASP top 10 guidelines:

- Secure Transmission: Configured the backend to operate over HTTPS to ensure secure data transmission.
- Broken Access Control: Managed Broken Access Control by permitting authorized users to conduct CRUD operations exclusively. Authentication was enforced using Json Web Tokens (JWTs).
- Injection Attacks: Guarded against injection attacks by validating user inputs through middleware and employing parameterized queries (bcrypt.hashSync) for password hashing, thus thwarting SQL injection threats.
- Cryptographic Failures: Addressed cryptographic vulnerabilities by employing bcrypt for password hashing, enhancing the security of stored user credentials and mitigating potential data breaches.
- Broken Authentication: Implemented JWT-based authentication (jsonwebtoken) with middleware (verifyToken) to validate token authenticity and restrict access to protected routes, thereby fortifying authentication mechanisms against unauthorized access.
- Security Misconfiguration: The application was configured to include appropriate security headers (e.g., X-Content-Type-Options, X-XSS-Protection) by default (via Express), mitigating common security misconfiguration pitfalls.

## API Documentation
Swagger UI: Integrated Swagger UI to automatically generate comprehensive API documentation, aiding in seamless exploration and usage of API endpoints.
API Endpoints: Documented all CRUD endpoints using Swagger annotations, including detailed request/response schemas and authentication prerequisites for enhanced usability.

## Testing
Implemented robust tests using Jest and Supertest to validate the functionality of some of the API endpoints thoroughly, ensuring reliability and stability.

# Conclusion
The completed RESTful API fulfills the technical challenge requirements by providing secure CRUD functionality, robust authentication/authorization mechanisms, comprehensive API documentation, and testing. It demonstrates proficiency in backend development, security practices, and API design principles, aligning with industry standards and best practices.



