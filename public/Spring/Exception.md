Global Exception Handling**, an **essential best practice\*\* for building a clean Spring Boot API.

---

### 🎯 **Goal**:

Handle exceptions **globally** (in one place) rather than cluttering every controller or service with `try-catch`.

---

### 🧠 Concepts Covered:

| Annotation          | Purpose                                                                 |
| ------------------- | ----------------------------------------------------------------------- |
| `@ControllerAdvice` | Marks a class as global exception handler (applies to all controllers). |
| `@ExceptionHandler` | Handles specific exceptions (like `BookNotFoundException`).             |
| `@ResponseStatus`   | Sets the correct HTTP status code (e.g. 404, 400, 500).                 |

---

### 🗂️ **Where to Add It?**

- Create a **new package**:
  `com.library.management.exception`

- Inside it, create:

  1. **Custom exception class** (e.g., `BookNotFoundException`)
  2. **Global exception handler class** (e.g., `GlobalExceptionHandler`)

---

### 🛠️ **How to Do It?**

#### 1️⃣ Create a **Custom Exception**

📄 `BookNotFoundException.java`

```java
package com.library.management.exception;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(String message) {
        super(message);
    }
}
```

Use this instead of `NoSuchElementException` when a book is not found.

---

#### 2️⃣ Create a **Global Exception Handler**

📄 `GlobalExceptionHandler.java`

```java
package com.library.management.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice  // Applies to all controllers
public class GlobalExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public ResponseEntity<String> handleBookNotFound(BookNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    // You can add more handlers here for other exceptions
}
```

---

### 🔄 How it Works in Flow:

1. Your service throws an exception:

   ```java
   throw new BookNotFoundException("Book not found with id " + id);
   ```

2. Controller doesn’t handle it — it’s automatically caught by `GlobalExceptionHandler`.

3. A clean JSON response is returned:

   ```json
   Status: 404 NOT FOUND
   Body: "Book not found with id 5"
   ```

---

### 🧼 Summary of What You Need to Do:

| Step | Action                                                                                  |
| ---- | --------------------------------------------------------------------------------------- |
| ✅   | Create `BookNotFoundException` (custom class)                                           |
| ✅   | Create `GlobalExceptionHandler` with `@ControllerAdvice`                                |
| ✅   | Use `@ExceptionHandler` to map your custom exception                                    |
| ✅   | Update your service layer to `throw new BookNotFoundException(...)` instead of crashing |

---
