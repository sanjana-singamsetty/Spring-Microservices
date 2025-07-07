Here’s the **updated full MVP idea** for your app with the added **Posts feature** and **Currency Conversion** — all built with **Spring Boot (Backend)** and **React + shadcn/ui (Frontend)**.

---

# 💸 App Name: **BillBoard**

> _Simplify shared expenses. Stay connected._

---

## 🔥 Updated MVP Overview

### 🎯 What is SplitSocial?

**SplitSocial** is a modern group expense manager for roommates, travel buddies, and event organizers — with an added **global posts board** for updates, tips, and communication.
It supports **multi-currency expense logging** and real-time currency conversion.

---

## ✨ Core Features

### 1. 🔗 Group Expense Management

- Create & manage groups (e.g., "Europe Trip", "Roommates")
- Add members to groups
- Add expenses with:

  - Description
  - Amount
  - Paid by
  - Participants involved
  - **Currency selection** (e.g., USD, INR, EUR)

- Automatically **convert to base currency (e.g., USD)**
- View balance sheet for each group
- View **simplified settle-up suggestions**

---

### 2. 📣 Public Posts (Billboard)

- Anyone can create a post visible to all users
- Use it for: trip updates, expense tips, reminders, fun polls, etc.
- View global post feed in a separate tab

---

### 3. 💱 Currency Conversion

- Select currency while logging an expense
- Real-time conversion using a currency API (e.g., [Frankfurter](https://www.frankfurter.app))
- Store both original and converted amounts
- Display both in group summaries

---

### 4. 🧑‍💼 User Accounts

- Sign up / Log in
- See your groups and your posts
- Optionally: profile page showing your balances & history

---

## 📱 Pages (Frontend)

1. **Login / Signup**
2. **Groups Page**

   - List of all your groups
   - Create new group
   - Click into group → view members, expenses, balances, settle-up tab

3. **Group Detail Page**

   - Tabs: Members | Expenses | Settle Up

4. **Add Expense Modal**

   - Add description, amount, paid by, currency, and participants

5. **Posts Page**

   - Global feed
   - Create new post

6. **Profile Page (optional)**

---

## 🧰 Tech Stack

### 🔙 Backend (Spring Boot)

- Spring Web (REST API)
- Spring Security (JWT auth)
- JPA + MySQL/PostgreSQL
- Currency Conversion API integration
- Models: `User`, `Group`, `Expense`, `Post`, `MemberBalance`

### 🔜 Frontend (React + shadcn/ui + Tailwind)

- Routing (React Router)
- Pages: Groups, Group Details, Posts, Auth
- shadcn/ui modals, inputs, tabs, tables
- Axios for API calls

---

## 📦 Future Ideas (After MVP)

- Notifications (who added an expense / posted)
- Export to PDF or Excel
- Comments on posts
- Private group chats

---

Here’s a **User Experience (UX) flow** for your updated **SplitSocial** app. It walks through how a typical user would interact with the app — from logging in to managing group expenses and reading public posts.

---

# 🌟 SplitSocial – User Experience Flow

---

## 👋 1. First-Time User – Getting Started

### ✅ Step 1: Signup/Login

- **User opens SplitSocial**
- Lands on a clean **login/signup screen**
- Signs up with email + password
- Redirected to **Groups Dashboard**

---

## 👥 2. Create or Join a Group

### 🧑‍🤝‍🧑 Groups Page

- Sees a **"No Groups Yet"** message if new
- Clicks **➕ "Create New Group"**
- Enters group name: "Europe Trip"
- Adds friends via email or username (invites them)
- Group is now live!

💡 _Group tile appears in sidebar: “Europe Trip (3 members)”_

---

## 💸 3. Add First Expense

### In Group > Expenses Tab

- Clicks **➕ "Add Expense"**
- Enters:

  - Title: “Dinner in Paris”
  - Amount: 80
  - Currency: **EUR**
  - Paid by: Alice
  - Split between: Alice, Bob, Raj

- App converts €80 → \~\$86 USD
- Saves the expense

💬 _Flash message: “Expense added successfully!”_

---

## 🔄 4. See Balances & Settle Up

### Group > Settle Up Tab

- Sees auto-generated summary:

  - “Raj owes Alice \$28”
  - “Bob owes Alice \$28”

- Clicks “Mark as Settled” when paid in real life

---

## 📣 5. Post on Global Billboard

### Posts Page

- Navigates to **"Billboard" tab**
- Sees posts from other users:

  - “Hey, anyone used EUR in Amsterdam lately?”
  - “Pro tip: Always save receipts 📜”

- Clicks **➕ "New Post"**

  - Writes: “SplitSocial is awesome!” and posts

---

## 💼 6. Profile Page (optional)

### View Personal Summary

- Sees:

  - All joined groups
  - Posts written
  - Current debts and credits
  - Settle-up history

---

## 🌐 7. Bonus: Multi-Currency Awareness

- Every expense shows both:

  - Original Currency (e.g., €80)
  - Converted USD (\~\$86)

- Group summaries are standardized in **USD**
- Helps with mixed currency groups

---

# 💡 UX Highlights

| Feature                | UX Goal                                      |
| ---------------------- | -------------------------------------------- |
| Intuitive Group System | Easy to manage and view multiple groups      |
| Expense Simplicity     | Quick add with auto-currency conversion      |
| Posts Page             | Social layer to feel connected and informed  |
| Clean Balances         | See who owes who in 1 click                  |
| Feedback Everywhere    | Snackbars, toasts, and tooltips for guidance |

---

Want a **UX wireframe** or **component breakdown** next? I can mock the full flow using React + shadcn/ui.
