---

## 🐱 What is **Apache Tomcat**?

**Apache Tomcat** is a **web server** and **servlet container**.

👉 Think of it as a **program that runs your Java web apps** — especially the ones using **Java Servlets** and **JavaServer Pages (JSP)**.

---

## 💡 Why is Tomcat used?

Because it helps you:

| Task                   | What Tomcat Does                                                  |
| ---------------------- | ----------------------------------------------------------------- |
| 🌐 Handle web requests | Accepts and responds to HTTP requests from browsers               |
| ⚙️ Run Java web apps   | Runs your backend code (like Spring Controllers or Servlets)      |
| 🛠 Serve dynamic pages  | Dynamically generates HTML using Java logic (via Servlets or JSP) |
| 📦 Deploy web apps     | Runs `.war` (Web Application Archive) files                       |

---

## 📦 In **Spring Boot**, do we need to install Tomcat separately?

**Nope!**
Spring Boot includes an **embedded Tomcat** out of the box.

> ✅ This means your app becomes a **standalone executable JAR** — just run it and it acts like its own web server.

---

## 🧠 How it works in Spring Boot:

When you run a Spring Boot app with the `spring-boot-starter-web` dependency:

- It starts **Tomcat** automatically.
- It listens on a port (by default: **8080**).
- It maps HTTP requests to your **controllers**.

---

## 🧪 Example:

Let’s say you build a Spring Boot REST API:

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHi() {
        return "Hello from Tomcat!";
    }
}
```

Now, when you visit `http://localhost:8080/hello`, **Tomcat**:

- Accepts the request
- Passes it to Spring
- Sends the response back to the browser

---

## 🔁 Summary

| Term               | Meaning                                                 |
| ------------------ | ------------------------------------------------------- |
| **Tomcat**         | Java web server + servlet container                     |
| **Purpose**        | Runs Java-based web applications                        |
| **In Spring Boot** | Included by default via `spring-boot-starter-web`       |
| **Bonus**          | No need to install it separately; runs with `java -jar` |

---

Let me know if you'd like a diagram or a flowchart to visualize this!
