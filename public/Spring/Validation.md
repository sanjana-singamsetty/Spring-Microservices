Add Validation Logic**, which is essential for **ensuring that incoming user input is correct\*\* before processing or saving it to the database.

---

### 🎯 **Goal**:

Use **validation annotations** in your entity class to make sure:

- Title is not empty
- ISBN is the right size
- Author is provided, etc.

---

### 🧠 Concepts & Annotations Explained

| Annotation                | Use                                                                       | Example                                                                      |
| ------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `@NotNull`                | Field must not be null (but can be empty, like `""`)                      | `@NotNull(message = "Title is required")`                                    |
| `@NotBlank`               | Field must not be null **or** blank (i.e., no empty string `" "` allowed) | `@NotBlank(message = "Author is required")`                                  |
| `@Size(min = X, max = Y)` | Controls min/max length of strings                                        | `@Size(min=10, max=13, message="ISBN must be between 10 and 13 characters")` |
| `@Valid`                  | Used in controller to **activate validation** on incoming request         | `public Book addBook(@Valid @RequestBody Book book)`                         |

---

### 🛠️ How to Do It

---

#### 1️⃣ ✅ Add Validation Annotations to Your Entity

📄 `Book.java`

```java
package com.library.management.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Title must not be blank")
    private String title;

    @NotBlank(message = "Author must not be blank")
    private String author;

    @Size(min = 10, max = 13, message = "ISBN must be between 10 and 13 characters")
    private String isbn;

    // Constructors, Getters, Setters...
}
```

---

#### 2️⃣ ✅ Enable Validation in Controller

In your controller, add `@Valid` to the `@RequestBody` parameter to **trigger validation**.

📄 `BookController.java`

```java
@PostMapping
public ResponseEntity<Book> addBook(@Valid @RequestBody Book book) {
    Book savedBook = bookService.addBook(book);
    return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
}
```

If validation fails, Spring will throw a `MethodArgumentNotValidException`.

---

#### 3️⃣ ✅ Handle Validation Errors Gracefully

Add another method to your **GlobalExceptionHandler** to catch validation errors:

📄 `GlobalExceptionHandler.java`

```java
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<String> handleValidationErrors(MethodArgumentNotValidException ex) {
    String errorMessage = ex.getBindingResult().getFieldErrors()
        .stream()
        .map(error -> error.getField() + ": " + error.getDefaultMessage())
        .collect(Collectors.joining(", "));

    return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
}
```

> This returns all field-level validation errors in one neat message.

---

### 🧪 What Happens Now

**POST /books** with invalid input like this:

```json
{
  "title": "",
  "author": "",
  "isbn": "123"
}
```

✅ You’ll get:

```json
Status: 400 Bad Request
Body: "title: Title must not be blank, author: Author must not be blank, isbn: ISBN must be between 10 and 13 characters"
```

---

### ✅ Summary

| Step | Task                                                                |
| ---- | ------------------------------------------------------------------- |
| ✅   | Add validation annotations in `Book.java`                           |
| ✅   | Add `@Valid` to `@RequestBody` in controller                        |
| ✅   | Catch `MethodArgumentNotValidException` in `GlobalExceptionHandler` |
| ✅   | Return readable error message to client                             |

---

### ✅ 1. **Validation**

```java
@PostMapping
public ResponseEntity<Book> addBook(@Valid @RequestBody Book book)
```

🔍 `@Valid` → **Triggers validation** using annotations like `@NotBlank`, `@Size` in your `Book` entity.

🔍 Without `@Valid`, validation **will not happen** automatically.

✅ This version will reject bad input (like missing title) and return a 400 Bad Request.

---

### ✅ 2. **Return Type & Response Control**

```java
return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
```

🔍 This gives you **full control** over:

- the returned object (`savedBook`)
- the **HTTP status** (`201 Created`, which is correct for successful creation)

Versus this:

```java
@PostMapping
public Book createBook(@RequestBody Book book) {
    return bookService.addBook(book);
}
```

📦 This just returns the object. Spring will:

- Assume `200 OK` (instead of `201 Created`)
- Not allow custom headers, status, etc.

---

### 🔁 Side-by-Side Comparison

| Feature                | First Method                    | Second Method                         |
| ---------------------- | ------------------------------- | ------------------------------------- |
| ✅ Validation          | Yes (`@Valid`)                  | ❌ No validation                      |
| 📦 Return type         | `ResponseEntity<Book>`          | `Book`                                |
| 📡 HTTP status control | ✅ Yes (`HttpStatus.CREATED`)   | ❌ No (defaults to 200 OK)            |
| 🛡️ Handles bad input   | ✅ Yes (400 with error message) | ❌ No (might crash or allow bad data) |
| 💡 Best practice       | ✅ Recommended for RESTful APIs | OK for internal APIs / simple demos   |

---

### ✅ Final Recommendation

Use this version in production:

```java
@PostMapping
public ResponseEntity<Book> addBook(@Valid @RequestBody Book book) {
    Book savedBook = bookService.addBook(book);
    return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
}
```

Would you like to see how to handle validation **errors in JSON format** too (with timestamp, path, etc.)?
