---

## 🧩 What is a **Servlet**?

A **Servlet** is a **Java class** that handles **web requests** and **generates responses**.

### Think of it like:

> A **waiter** in a restaurant:
>
> * Takes your order (request)
> * Gives it to the kitchen (Java code)
> * Brings back your food (response)

---

### 🛠 A simple Servlet does:

1. Accepts a request from the **browser**
2. Processes it (like accessing a database)
3. Sends back a response (like HTML or JSON)

---

### Example (Very basic Servlet):

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.getWriter().write("Hello from a Servlet!");
    }
}
```

➡ When you visit `http://localhost:8080/hello`, this Servlet runs.

---

### Where is it used?

Servlets are the **foundation of Java web applications** — and Spring internally uses them too!

---

## 📦 What is a **JAR** file?

A **JAR (Java ARchive)** is a **package** that contains:

- Compiled `.class` files (Java code)
- Configuration files
- Any libraries your app needs

---

### Think of a JAR like:

> A **zip file** full of all the parts needed to run a Java app.

---

### In Spring Boot:

Spring Boot creates a **single `.jar` file** which:

- Contains your app code
- Contains all required libraries (Spring, Tomcat, etc.)
- Can be run directly with:

```bash
java -jar myapp.jar
```

And it starts the server immediately! 🚀

---

## 🧠 Key Difference:

| Term        | Meaning                                                                |
| ----------- | ---------------------------------------------------------------------- |
| **Servlet** | Java class that handles web requests/responses                         |
| **JAR**     | A packaged file containing your compiled Java app and its dependencies |

---

## 🔁 Bonus:

In a typical Spring Boot app:

- **Servlets** are hidden — Spring Boot uses them **behind the scenes**.
- You work with **Controllers**, and Spring internally maps them to **Servlets**.
- You run everything as a single `.jar` file.

---
