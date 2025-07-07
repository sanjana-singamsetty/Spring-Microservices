# 🌐 HTML (HyperText Markup Language) — Complete Overview

---

## 📘 1. What is HTML?

**HTML** is the standard markup language used to create **webpages**.
It defines the **structure and content** of a webpage using **elements** (built from tags and attributes).

🔹 "Markup" means you're marking up content with tags like `<p>`, `<img>`, `<a>`, etc.

---

## 📦 2. Basic Structure of an HTML Document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

| Section           | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `<!DOCTYPE html>` | Declares the document type (HTML5)         |
| `<html>`          | Root element of the page                   |
| `<head>`          | Metadata (title, links, encoding, scripts) |
| `<body>`          | Visible content goes here                  |

---

## 🏷️ 3. HTML Tags, Elements, and Attributes

### ✅ Tags

- Tags define elements: `<h1>`, `<p>`, `<img>`, `<a>`, etc.
- Most tags have an **opening** and **closing** form:

  ```html
  <h1>Hello</h1>
  ```

### ✅ Elements

- Complete structure: tag + content + closing tag

  ```html
  <p>This is a paragraph.</p>
  ```

### ✅ Attributes

- Extra information added to tags

  ```html
  <img src="cat.jpg" alt="A cat" width="200" />
  ```

---

## 🧠 4. Common HTML Tags

### 🔹 Headings

```html
<h1>Title</h1>
to
<h6>Smallest Heading</h6>
```

### 🔹 Paragraphs & Text

```html
<p>Paragraph text</p>
<strong>Bold</strong>
<em>Italic</em>
<br />
<!-- Line break -->
```

### 🔹 Links

```html
<a href="https://google.com">Visit Google</a>
```

### 🔹 Images

```html
<img src="dog.jpg" alt="A dog" width="300" />
```

### 🔹 Lists

```html
<ul>
  <li>Item 1</li>
</ul>
<ol>
  <li>First</li>
</ol>
```

### 🔹 Tables

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>24</td>
  </tr>
</table>
```

### 🔹 Forms

```html
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <input type="submit" />
</form>
```

---

## 🧾 5. Metadata and Head Section

Metadata is **information about the page**, not shown to users, but used by the browser or search engines.

```html
<head>
  <title>My Page</title>
  <meta charset="UTF-8" />
  <meta name="description" content="A simple HTML page" />
  <link rel="stylesheet" href="style.css" />
  <script src="script.js"></script>
</head>
```

---

## 📐 6. Layout and Structure Tags

### 🔹 Semantic Elements (HTML5)

Better structure and accessibility:

```html
<header>Top section</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Blog post</article>
<section>Section of content</section>
<aside>Sidebar</aside>
<footer>Bottom section</footer>
```

---

## 🎨 7. HTML + CSS + JS

- HTML = Structure (skeleton)
- CSS = Styling (appearance)
- JavaScript = Interactivity (behavior)

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 onclick="alert('Hi!')">Click me</h1>
    <script src="script.js"></script>
  </body>
</html>
```

---

## 🛠 8. Developer Tools & Best Practices

- Use **indentation** for readability
- Use **semantic tags** for accessibility
- Validate your HTML using [W3C Validator](https://validator.w3.org/)
- Inspect and debug using browser **DevTools (F12)**

---

## 🧑‍💻 9. HTML Project Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Portfolio</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <header>
      <h1>John Doe</h1>
      <p>Web Developer</p>
    </header>

    <main>
      <section>
        <h2>About Me</h2>
        <p>I love building websites.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Portfolio Site</li>
          <li>To-Do App</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>Contact: john@example.com</p>
    </footer>
  </body>
</html>
```

---

### Block-level Elements

- **Definition:** Block-level elements take up the full width available, starting on a new line, and creating a "block" of content.

- **Behavior:** They create a line break before and after themselves.

- **Use case:** Typically used for larger structural elements like paragraphs, divisions, headings, sections, etc.

- **Examples:**

  - `<div>`
  - `<p>`
  - `<h1>` to `<h6>`
  - `<ul>`, `<ol>`, `<li>`
  - `<section>`, `<article>`, `<header>`, `<footer>`
  - `<form>`

- **Characteristics:**

  - They can contain other block-level elements and inline elements.
  - Width defaults to 100% of the parent container unless specified otherwise.
  - You can set width, height, margin, padding, etc.

---

### Inline Elements

- **Definition:** Inline elements only take up as much width as necessary, and do **not** start on a new line.
- **Behavior:** They flow within the content, allowing multiple inline elements to sit next to each other horizontally.
- **Use case:** Typically used for smaller pieces of content like text formatting, links, images inside paragraphs.
- **Examples:**

  - `<span>`
  - `<a>`
  - `<strong>`, `<b>`, `<em>`, `<i>`
  - `<img>`
  - `<input>`
  - `<label>`

- **Characteristics:**

  - Cannot contain block-level elements.
  - Width and height properties usually don't apply in the same way block-level elements do.
  - Margins and paddings apply horizontally but vertical margins don’t create space like block elements.

---

### Quick Summary Table

| Feature                | Block-level Element    | Inline Element               |
| ---------------------- | ---------------------- | ---------------------------- |
| Starts on new line?    | Yes                    | No                           |
| Takes full width?      | Yes                    | Only as wide as content      |
| Can contain block?     | Yes                    | No                           |
| Common tags            | `<div>`, `<p>`, `<h1>` | `<span>`, `<a>`, `<img>`     |
| Width and height work? | Yes                    | Limited                      |
| Typical use            | Layout, structure      | Text formatting, small items |

---

### Example

```html
<div>
  <p>This is a paragraph (block-level).</p>
  <p>
    This paragraph contains <a href="#">a link</a> (inline) and
    <strong>bold text</strong> (inline).
  </p>
  <span>This is inline text inside a div.</span>
</div>
```

---

If you want, I can also explain how **CSS display properties** (`display: block`, `inline`, `inline-block`) relate to these elements! Would you like that?
