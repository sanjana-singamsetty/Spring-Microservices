REST services using **three different standards** in **Spring Boot**, we’ll demonstrate the most common ones:

---

## ✅ 1. REST with `@RestController` and `@RequestMapping` (Standard Spring MVC)

## ✅ 2. REST using **OpenAPI/Swagger** for documentation

## ✅ 3. REST using **HATEOAS** (Hypermedia as the Engine of Application State)

---

We'll build a **simple `BookService`** with the following endpoints:

- `GET /books` – Get all books
- `GET /books/{id}` – Get book by ID

---

# 🚀 1. Basic REST API using `@RestController`

### 📄 `Book.java`

```java
package com.example.demo.model;

public class Book {
    private Long id;
    private String title;

    // constructor, getters, setters
    public Book(Long id, String title) {
        this.id = id;
        this.title = title;
    }
    // Getters & Setters omitted for brevity
}
```

---

### 📄 `BookController.java`

```java
package com.example.demo.controller;

import com.example.demo.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/books")
public class BookController {

    private List<Book> books = Arrays.asList(
        new Book(1L, "Clean Code"),
        new Book(2L, "Effective Java")
    );

    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    }
}
```

---

# 📘 2. REST with OpenAPI / Swagger Documentation

### ✅ Step 1: Add Swagger dependencies to `pom.xml`

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.2.0</version>
</dependency>
```

### ✅ Step 2: Annotate your controller (optional, Swagger picks up automatically)

```java
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/books")
@Tag(name = "Book Controller", description = "Manages books")
public class BookController {

    @Operation(summary = "Get all books")
    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }

    @Operation(summary = "Get a book by ID")
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    }
}
```

### ✅ Step 3: Run and access docs at:

```
http://localhost:8080/swagger-ui.html
```

---

# 🔗 3. REST using Spring HATEOAS

### ✅ Step 1: Add Spring HATEOAS to `pom.xml`

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-hateoas</artifactId>
</dependency>
```

### ✅ Step 2: Update `BookController.java` to add HATEOAS links

```java
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

@GetMapping("/{id}")
public EntityModel<Book> getBookByIdWithHateoas(@PathVariable Long id) {
    Book book = books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);

    return EntityModel.of(book,
        WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(BookController.class).getAllBooks()).withRel("all-books"));
}
```

### 📦 Output:

```json
{
  "id": 1,
  "title": "Clean Code",
  "_links": {
    "all-books": {
      "href": "http://localhost:8080/books"
    }
  }
}
```

---

## 🧠 Summary

| Standard       | Benefit                     | Tool Used             |
| -------------- | --------------------------- | --------------------- |
| **Spring MVC** | Basic REST service          | `@RestController`     |
| **OpenAPI**    | Auto-generated REST docs    | `springdoc-openapi`   |
| **HATEOAS**    | Navigable links in response | `spring-boot-hateoas` |

---
