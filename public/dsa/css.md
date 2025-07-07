# 🌟 What is CSS?

**CSS** stands for **Cascading Style Sheets**.
It is a **style sheet language** used to describe the presentation (look & formatting) of a document written in HTML or XML.

👉 CSS separates content (HTML) from presentation (CSS), making websites easier to maintain.

---

# 🔗 How does CSS work?

- You write **CSS rules** that select HTML elements and apply styles to them.
- CSS can be included in three ways:

  1. **Inline CSS:** `style` attribute on HTML elements.
  2. **Internal CSS:** `<style>` tag inside `<head>`.
  3. **External CSS:** separate `.css` file linked via `<link>`.

---

# ✍️ CSS Syntax

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

---

# ⚡ Core Concepts & Facts

## ✅ Selectors

- **Element selector:** `p { }`
- **Class selector:** `.box { }`
- **ID selector:** `#header { }`
- **Universal selector:** `* { }`
- **Group selector:** `h1, h2, p { }`
- **Attribute selector:** `input[type="text"] { }`
- **Descendant:** `div p { }`
- **Child:** `ul > li { }`
- **Adjacent sibling:** `h2 + p { }`
- **General sibling:** `h2 ~ p { }`

---

## ✅ Properties & Values

CSS has **hundreds of properties**, such as:

- **Colors:** `color`, `background-color`
- **Fonts:** `font-family`, `font-size`, `font-weight`
- **Text:** `text-align`, `text-decoration`, `text-transform`
- **Spacing:** `margin`, `padding`
- **Size:** `width`, `height`
- **Borders:** `border`, `border-radius`
- **Positioning:** `position`, `top`, `left`
- **Flexbox:** `display: flex`, `justify-content`, `align-items`
- **Grid:** `display: grid`, `grid-template-columns`
- **Animation:** `transition`, `animation`
- **Shadow:** `box-shadow`, `text-shadow`

---

## ✅ The Cascade

- CSS stands for **Cascading** — rules flow from top to bottom.
- If there’s a conflict, **specificity** and **order** determine which style is applied.

---

## ✅ Specificity

- Determines which CSS rule is applied when multiple rules match.
- Hierarchy:

  ```
  Inline > ID selectors > Class / Attribute / Pseudo-class > Element > Universal
  ```

---

## ✅ Inheritance

- Some properties are inherited by default, like `color` and `font-family`.
- Others (like `margin` or `padding`) are **not inherited**.

---

# 🎨 CSS Units

- **Absolute units:** `px`, `cm`, `mm`, `in`
- **Relative units:** `em`, `rem`, `%`, `vh`, `vw`

  - `1em` = font-size of the element
  - `1rem` = font-size of root (`html`)

---

# 🖼 Box Model

Every element is a **box**:

```
| Margin |
| Border |
| Padding |
| Content |
```

- **Width / Height** apply to the content area.
- Total width = `width + padding + border + margin`

---

# 🌈 Colors

- Named colors: `red`
- HEX: `#ff0000`
- RGB: `rgb(255,0,0)`
- RGBA (opacity): `rgba(255,0,0,0.5)`
- HSL: `hsl(0,100%,50%)`

---

# 🪄 Positioning

- `static` (default)
- `relative` (offset from normal)
- `absolute` (relative to nearest positioned ancestor)
- `fixed` (relative to viewport)
- `sticky` (sticks based on scroll)

---

# 🧰 Display

- `block`: takes full width
- `inline`: takes only needed width
- `inline-block`: inline but allows width/height
- `none`: hides element
- `flex`: flex container
- `grid`: grid container

---

# 🚀 Advanced Features

## ✏️ Pseudo-classes

Add styles to elements in a certain state.

- `:hover`, `:active`, `:focus`, `:first-child`, `:last-child`, `:nth-child(n)`

## ✏️ Pseudo-elements

Target parts of an element.

- `::before`, `::after`, `::first-letter`, `::first-line`

---

## ⚡ Transitions

Smooth changes.

```css
button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: blue;
}
```

---

## ✨ Animations

Keyframe animations.

```css
@keyframes slide {
  from {
    left: 0;
  }
  to {
    left: 100px;
  }
}
div {
  animation: slide 2s infinite;
}
```

---

## 📐 Media Queries

Responsive design.

```css
@media (max-width: 600px) {
  body {
    background: lightblue;
  }
}
```

---

## 🌌 Variables (Custom Properties)

```css
:root {
  --main-color: #3498db;
}
div {
  color: var(--main-color);
}
```

---

## 🏗 Preprocessors

- **SASS/SCSS, LESS, Stylus**
  Add variables, nesting, functions.

---

# 📝 Debugging & Tools

- Use **Browser DevTools (F12)** to inspect elements and live-edit CSS.
- Tools like **Autoprefixer**, **PostCSS** make your CSS more robust.

---

# ✅ Quick Facts

✅ CSS is **not a programming language**, but a **style sheet language**.
✅ The **Cascading** means last defined & most specific rules win.
✅ You can use **reset CSS / normalize.css** to handle browser differences.
✅ Modern CSS can create complex layouts **without JS** using Flexbox & Grid.

---

# 🚀 Want even more?

✅ Learn about:

- `clamp()` for responsive sizing.
- `calc()` for dynamic calculations.
- `container queries` (new!)
- `aspect-ratio` for images.
- `@supports` for feature detection.
- CSS logical properties like `margin-inline`.

---

# ✅ Cheatsheet summary

| Concept       | Example                     |
| ------------- | --------------------------- |
| Selector      | `h1`, `.class`, `#id`       |
| Color         | `color: #333;`              |
| Font          | `font-size: 16px;`          |
| Spacing       | `margin: 10px;`             |
| Display       | `display: flex;`            |
| Position      | `position: absolute;`       |
| Responsive    | `@media (max-width: 600px)` |
| Hover / Focus | `:hover`, `:focus`          |
| Animation     | `animation: fade 2s`        |

---
