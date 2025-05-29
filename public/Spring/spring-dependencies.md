---

### ✅ **1. Spring Web**

* **What it is**: Adds support for **building web applications**, especially **RESTful APIs** using **Spring MVC**.
* **Why we use it**:

  * To create endpoints like `GET /books`, `POST /users`, etc.
  * To return data in JSON format
  * To handle requests and responses in your application
* **Key features**:

  * Controllers (`@RestController`)
  * Request mapping (`@GetMapping`, `@PostMapping`, etc.)
  * Embedded Tomcat server (runs on `localhost:8080`)

---

### ✅ **2. Spring Data JPA**

- **What it is**: Simplifies working with relational databases (like SQL) using **Java Persistence API (JPA)** and **Hibernate** under the hood.
- **Why we use it**:

  - To save, fetch, delete, and update data in the database without writing SQL
  - Automatically generates queries from method names

- **Key features**:

  - Repository interfaces (`BookRepository extends JpaRepository`)
  - Annotations like `@Entity`, `@Id`, `@OneToMany`, etc.

---

### ✅ **3. H2 Database**

- **What it is**: A **lightweight in-memory SQL database** — meaning it runs in your system memory and does not require installation.
- **Why we use it**:

  - For **fast development and testing** (no external DB setup needed)
  - Automatically resets every time you restart the app (perfect for learning and testing)

- **Key features**:

  - Supports SQL syntax
  - Has a built-in web console (at `/h2-console`) to view your data in browser

---

### ✅ **4. Spring Boot DevTools**

- **What it is**: A development-time helper tool for **faster development experience**.
- **Why we use it**:

  - **Automatic restart** when code changes
  - **LiveReload** integration (refresh browser on file save)
  - Disables caching and enables logging to make debugging easier

- **Key features**:

  - Improves developer productivity and feedback loop

---

### ✅ **5. Validation**

- **What it is**: Uses **Bean Validation API** (JSR-380) with **Hibernate Validator** to validate user inputs.
- **Why we use it**:

  - To make sure data is correct before saving it to the database
  - For example, check if `email` is valid, or `name` is not empty

- **Key features**:

  - Use annotations like `@NotNull`, `@Email`, `@Size(min=2)`, etc.
  - Combine with `@Valid` in controllers to enforce validations

---

### ✅ **6. Spring Boot Actuator**

- **What it is**: Provides **ready-made endpoints** to monitor and manage your application.
- **Why we use it**:

  - To check if your app is healthy (`/actuator/health`)
  - To expose useful metrics (memory, threads, DB connections, etc.)
  - To create custom endpoints if needed

- **Key features**:

  - Endpoints like `/actuator/info`, `/actuator/metrics`, `/actuator/env`

---

### 📌 Summary Table

| Dependency           | Why We Use It                                         |
| -------------------- | ----------------------------------------------------- |
| Spring Web           | Build REST APIs, handle HTTP requests/responses       |
| Spring Data JPA      | Easy database access with Java + Hibernate            |
| H2 Database          | Lightweight SQL DB for testing and development        |
| Spring Boot DevTools | Fast reloads and easier development                   |
| Validation           | Automatically validate input fields                   |
| Spring Boot Actuator | Monitor, manage, and expose app health/status/metrics |

---

If you'd like, I can show you how to use each of these in a real code example for your Library project!
