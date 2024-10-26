## GraphQL Book Management API

This is a simple GraphQL API built as part of an educational project to learn about GraphQL, Apollo Server, and Express. 

The project demonstrates basic CRUD operations on a collection of books, along with fetching data from an external API.

## Project Structure

- **index.ts:** The entry point of the application. Configures the Express server, sets up Apollo Server with GraphQL, and starts the server.

- **resolvers.ts:** Contains the GraphQL resolvers for query and mutation operations, as well as custom scalar types.

- **schema.ts:** Defines the GraphQL schema with types and queries/mutations.

- **types.ts:** Contains TypeScript interfaces and input types for the project.

- **data.ts:** Mock data representing a collection of books.


## Features
- Book Management: Perform CRUD operations on books in the collection.

- Date Scalar: Custom scalar for handling date fields in the GraphQL schema.

- External API Integration: Fetch data from an external API (dummy JSON TODO API).

- TypeScript: Provides type safety for the code.

## Getting Started

### **Prerequisites**

Node.js (v14 or higher)

NPM 

### **Installation**

Clone the repository:
```bash
git clone https://github.com/your-username/graphql-apollo-api.git
cd book-management-api
```
Install the dependencies:

```bash
npm install
```

### **Compile TypeScript files:**

```bash
npm run build
```
### **Start the server:**

```bash
npm run dev
```
The server will start on http://localhost:4000/graphql.

## Project Dependencies
The project uses the following main dependencies:

- apollo-server-express: Apollo Server integrated with Express.
- express: Web server framework.
- body-parser: Middleware for parsing JSON requests.
- cors: Middleware for handling Cross-Origin Resource Sharing.
- node-fetch: Fetch API for Node.js to make HTTP requests to an external API.

## Usage

**1.Queries**

- books: Retrieves a list of all books.

- book(id: String!): Retrieves a single book by its ID.

- getTODOAPIData: Fetches data from the external TODO API.


**2.Mutations**

- addBook(input: BookInput!): Adds a new book to the collection.

- deleteBook(id: String!): Deletes a book by ID.

- updateBook(id: String!, title: String, author: String): Updates an existing book's title and/or author by ID.

## Examples
Here is an example querie you can run in the GraphQL Playground (at http://localhost:4000/graphql).

**Query: Retrieve All Books**

```graphql
query {
  books {
    id
    title
    author
    genre
    date
  }
}
  ```
**Expected Response**
If books collection is not empty, the results should be similiar to this json-format: 

```json
{
  "data": {
    "books": [
      {
        "id": "1",
        "title": "Making a software developer",
        "author": "StartSteps",
        "genre": "Biography",
        "date": "2025-02-15"
      },
    ]
  }
}
```

