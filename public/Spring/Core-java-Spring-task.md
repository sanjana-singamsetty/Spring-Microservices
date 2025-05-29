## ✅ **Core Java Practice Tasks**

### 1. **Java Classes & Objects**

- Create a `Pizza` class with:

  - Fields: `id`, `name`, `price`
  - Getters and setters
  - `toString()` override

- Practice:

  - **Constructors**
  - **Method overloading**

### 2. **Collections**

- Create `ArrayList<Pizza>`
- Add/remove pizzas
- Iterate and print pizza details

### 3. **Enums**

- Create `OrderStatus` enum: `PREPARING`, `DELIVERING`, `DELIVERED`
- Use it in an `Order` class

### 4. **Exception Handling**

- Create a custom exception for negative pizza price
- Use `try-catch` blocks

---

## ✅ **Spring Boot Practice Tasks**

### 1. **Setup**

- Use [start.spring.io](https://start.spring.io)
- Add dependencies: `Spring Web`, `Spring Boot DevTools`, `Lombok` (optional)

### 2. **REST Controller**

- Create `PizzaController`:

  - `GET /pizzas`: return list of pizzas (hardcoded)
  - `POST /pizzas`: add pizza to an in-memory list
  - `GET /pizzas/{id}`: get pizza by ID
  - `GET /pizzas/search?name=xyz`: search by name

### 3. **Use Enums**

- Create `OrderController`
- POST an order with `OrderStatus` enum

### 4. **Exception Handling**

- Throw `PizzaNotFoundException`
- Handle with `@ControllerAdvice` or `@ExceptionHandler`

---

## ✅ **Beans, Dependency Injection & Configuration**

### 5. **Dependency Injection**

- Create a `PizzaService` class (handles pizza logic)
- Inject into `PizzaController` using `@Autowired`

### 6. **Spring Beans**

- Create a class with `@Component`, `@Service`, or `@Repository`
- Use `@Bean` in `@Configuration` class to manually register a bean

### 7. **Configuration**

- Create a class with `@Configuration`
- Use `@Value` or `@ConfigurationProperties` to inject values from `application.properties`

---

## 🚀 **Stretch Goals**

- Use Spring Data JPA + H2 DB for persistence
- Add validation with `@Valid` (JSR-380)
- Add Swagger/OpenAPI
- Learn `@Transactional`, `@Service`, `@Repository`
