Build REST Controllers\*\* — clearly and step-by-step.

---

## ✅ Step 5: Build REST Controllers

### 🎯 **Goal**:

Create a class that handles HTTP requests like GET, POST, PUT, DELETE using REST API principles.

---

### 🔧 What is a Controller?

A **controller** is the class where we define **API endpoints** to handle requests from clients (like frontend or Postman).
It talks to the **Service Layer** (not directly to the database/repository) to keep a clean architecture.

---

### 🧠 Concepts Covered:

| Concept                             | What it does                                                   |
| ----------------------------------- | -------------------------------------------------------------- |
| `@RestController`                   | Tells Spring this class handles REST requests and returns JSON |
| `@RequestMapping("/path")`          | Maps all requests to a specific path (e.g., `/books`)          |
| `@GetMapping`, `@PostMapping`, etc. | Map specific HTTP methods to Java methods                      |
| `@RequestBody`                      | Converts incoming JSON to Java object (for POST/PUT)           |
| `@PathVariable`                     | Extracts variable from URL path (e.g., `/books/5`)             |
| `@RequestParam`                     | Extracts query param from URL (e.g., `?title=abc`)             |

---

### 🪜 Step-by-Step Breakdown:

1. **Create a new class** `BookController` in the `controller` package.
2. Annotate it with `@RestController` to make it a REST controller.
3. Use `@RequestMapping("/books")` to prefix all endpoints with `/books`.
4. Define endpoints using:

   - `@GetMapping` – for fetching data.
   - `@PostMapping` – for creating data.
   - `@PutMapping` – for updating data.
   - `@DeleteMapping` – for deleting data.

5. Call methods from the **Service Layer**, not directly from the repository.

---

### 🧾 Example Endpoints You’ll Build:

| HTTP Method | URL           | What it does   |
| ----------- | ------------- | -------------- |
| `GET`       | `/books`      | Get all books  |
| `GET`       | `/books/{id}` | Get book by ID |
| `POST`      | `/books`      | Add new book   |
| `PUT`       | `/books/{id}` | Update a book  |
| `DELETE`    | `/books/{id}` | Delete a book  |

---

### 🧑‍💻 You’ll learn:

- How requests are mapped to methods
- How data flows from HTTP → Controller → Service → Repository
- How JSON is automatically converted to Java and vice versa
  Absolutely! Let’s go **deep** into:

1. 🔁 **Why and how we match Controller ↔ Service**
2. 🧩 **Explanation of annotations (`@RestController`, `@RequestMapping`, etc.)**
3. ⚙️ **How the flow works in a Spring Boot app**

---

## ✅ `BookController.java`

Create this file at:
`src/main/java/com/library/management/controller/BookController.java`

```java
package com.library.management.controller;

import com.library.management.Book;
import com.library.management.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    @Autowired  // Inject BookService via constructor
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // GET /books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    // GET /books/{id}
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id) {
        return bookService.findById(id);
    }

    // POST /books
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }
}
```

---

### 🧠 Matching Between Service & Controller

- `getAllBooks()` in Controller → `getAllBooks()` in Service
- `getBookById(id)` in Controller → `findById(id)` in Service
- `createBook(book)` in Controller → `addBook(book)` in Service

---

Would you like to:

- Add `update` and `delete` endpoints?
- Add validation (like making title required)?
- Add global exception handling (e.g., for book not found)?

Let me know and I’ll help!

### ✅ 1. Why and How We Match Controller ↔ Service

#### 🔹 Why?

We use **Service Layer** to keep the **business logic** separate from the **Controller**, which handles only web/API logic. This is called **Separation of Concerns**.

- **Controller** = Talks to the client (browser, Postman, etc.)
- **Service** = Contains the logic for actions like "get all books", "add a book", etc.
- **Repository** = Talks to the database

#### 🔹 How?

When you create functions in your `BookService`, you must **call them properly** from the `BookController`.

Example:

```java
// In Service
public Book addBook(Book book) {
    return bookRepository.save(book);
}
```

Then, in Controller, you do:

```java
@PostMapping
public Book createBook(@RequestBody Book book) {
    return bookService.addBook(book);
}
```

🧠 Notice:

- The **function name** (`addBook`, `createBook`) doesn't need to match.
- But the **parameters** (Book) and **return type** must make sense together.
- The Controller **calls** the function from Service using `bookService.addBook()`.

---

### ✅ 2. Explanation of Annotations in Controller

| Annotation                  | What It Does                                                                  |
| --------------------------- | ----------------------------------------------------------------------------- |
| `@RestController`           | Tells Spring: “This class handles HTTP requests and returns JSON (not HTML).” |
| `@RequestMapping("/books")` | Sets base URL. All APIs inside this class will start with `/books`.           |
| `@GetMapping`               | Handles HTTP `GET` request (used to fetch data).                              |
| `@PostMapping`              | Handles HTTP `POST` request (used to send data to server).                    |
| `@PathVariable`             | Gets values from URL path (`/books/5` → `id = 5`).                            |
| `@RequestBody`              | Reads the request JSON body and converts it to a Java object.                 |
| `@Autowired`                | Tells Spring to **inject** the dependency (like `BookService`) automatically. |

---

### ✅ 3. How the Spring Boot Flow Works

Let’s say you send a POST request:

```json
POST /books
{
  "title": "Java Mastery",
  "author": "John Doe",
  "isbn": "1234567890"
}
```

Here’s what happens:

1. 🌐 **Controller** catches the HTTP request using `@PostMapping`.
2. 💬 It reads the JSON and maps it to a Java `Book` object using `@RequestBody`.
3. 📞 It calls `bookService.addBook(book)` to process it.
4. 🧠 **Service Layer** has logic to call `bookRepository.save(book)` and return the saved book.
5. 🛢️ **Repository** talks to the database, stores the book, and returns it back up the chain.
6. ✅ The book gets returned as JSON to the client.

---

### 🔁 Summary

| Layer      | Responsibility      | What You Write                              |
| ---------- | ------------------- | ------------------------------------------- |
| Controller | Handles HTTP        | `@RestController`, `@GetMapping`, etc.      |
| Service    | Business logic      | `@Service`, your logic functions            |
| Repository | Database operations | `extends JpaRepository` or `CrudRepository` |

The **Controller talks to Service**, and **Service talks to Repository**.

---

Would you like me to visually map the flow or draw a diagram? Or would you like to add validation and error handling next?
