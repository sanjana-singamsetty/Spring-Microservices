✅ **Quick overview of Git (for your plan):**

Git is a **version control system** that helps you:

- track changes in your code,
- collaborate with others,
- roll back to previous versions if something breaks.

It does this by maintaining a **repository** (or "repo") that records snapshots of your project over time.

---

### 🚀 **Basic Git commands you’ll use daily**

| Command                      | What it does                      |
| ---------------------------- | --------------------------------- |
| `git init`                   | Initialize a new git repo         |
| `git clone <url>`            | Download (clone) an existing repo |
| `git status`                 | See what’s changed                |
| `git add <file>`             | Stage a file for commit           |
| `git commit -m "message"`    | Commit staged changes             |
| `git log`                    | See commit history                |
| `git push origin main`       | Push changes to remote (GitHub)   |
| `git pull`                   | Fetch & merge latest from remote  |
| `git branch`                 | List branches                     |
| `git checkout -b new-branch` | Create & switch to new branch     |

---

### 💡 **Typical workflow**

```bash
git clone <repo-url>
# or if starting fresh
git init
echo "# my-project" >> README.md
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Then daily:

```bash
git pull      # get latest
git add .     # stage changes
git commit -m "feature: add signup api"
git push      # upload to GitHub
```

---

Here’s a list of the **most commonly used basic Git commands** for everyday development:

---

### 🔹 **Setup (only once per machine)**

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

### 🔹 **Starting a new project**

```bash
git init                         # Initialize Git in current folder
git remote add origin <url>      # Connect local repo to remote (GitHub, etc.)
```

---

### 🔹 **Cloning an existing project**

```bash
git clone <repository-url>       # Copy an entire repo from GitHub
```

---

### 🔹 **Working with files**

```bash
git status                       # See changes made
git add <filename>               # Stage a specific file
git add .                        # Stage all files
git commit -m "message"          # Commit staged changes
```

---

### 🔹 **Pushing code to GitHub**

```bash
git push origin main             # Push commits to the remote repo (main branch)
```

---

### 🔹 **Pulling updates from GitHub**

```bash
git pull origin main             # Pull latest changes
```

---

### 🔹 **Branches**

```bash
git branch                       # List all branches
git branch <name>                # Create a new branch
git checkout <name>              # Switch to another branch
git checkout -b <name>           # Create and switch to new branch
```

---

### 🔹 **Viewing logs**

```bash
git log                          # See commit history
git log --oneline                # Shorter log view
```

---

### 🔹 **Undoing**

```bash
git reset <file>                 # Unstage a file
git checkout -- <file>           # Discard local changes to file
```

---

Absolutely! Here are some **advanced (but very useful) Git commands** that help you _save, backup, and carefully manage your data / changes_ — beyond the basic `add`, `commit`, and `push`.

---

### 🚀 Advanced Git commands to **save or safeguard data**

#### 1️⃣ `git stash`

Temporarily saves your uncommitted changes (keeps working directory clean).

```bash
git stash
```

Restore them later:

```bash
git stash pop
```

View stashes:

```bash
git stash list
```

---

#### 2️⃣ `git commit --amend`

Modify the last commit (like fixing a message or adding forgotten changes).

```bash
git commit --amend
```

⚠️ Be careful — rewrites commit history!

---

#### 3️⃣ `git reflog`

See a log of all your HEAD movements (saved refs), even those you thought were lost.
Helps recover lost commits after `reset` or `rebase`.

```bash
git reflog
```

You can restore to any point with:

```bash
git reset --hard <reflog-hash>
```

---

#### 4️⃣ `git cherry-pick`

Apply a specific commit from somewhere else onto your branch.

```bash
git cherry-pick <commit-hash>
```

---

#### 5️⃣ `git tag`

Tags are snapshots in time (often for releases).

```bash
git tag v1.0
git push origin v1.0
```

See all tags:

```bash
git tag
```

---

#### 6️⃣ `git archive`

Create a tar or zip snapshot of your project (good for backups / shipping releases).

```bash
git archive --format=zip HEAD > latest.zip
```

---

#### 7️⃣ `git bundle`

Make a single file that contains your repo history (for offline backups or transferring to another machine).

```bash
git bundle create repo.bundle --all
```

Clone from it later:

```bash
git clone repo.bundle new-folder
```

---

#### 8️⃣ `git bisect`

Find which commit introduced a bug (binary search).

```bash
git bisect start
git bisect bad
git bisect good <commit-hash>
```

Git checks out commits until you find the bad one.

---

### 🛡️ Bonus: Safe experiments

#### `git switch -c new-feature` or `git checkout -b new-feature`

Make new branches often — safest way to experiment without breaking main.

---

✅ **Summary of “data-saving” type advanced commands:**

| Command              | Purpose                        |
| -------------------- | ------------------------------ |
| `git stash`          | Save work without committing   |
| `git reflog`         | Recover lost commits / HEADs   |
| `git bundle`         | Make a portable backup of repo |
| `git archive`        | Export a snapshot (zip/tar)    |
| `git tag`            | Mark stable points/releases    |
| `git cherry-pick`    | Bring specific commits over    |
| `git bisect`         | Find bugs in history           |
| `git commit --amend` | Fix last commit cleanly        |

---

Great question!
Here’s a **simple but clear explanation** of what `.gitignore` is:

---

## 🚀 What is `.gitignore`?

`.gitignore` is a **special file in your Git repository** that tells Git:

> ❌ “Don’t track or save these files/folders in the repository.”

It’s used to **avoid committing files** that:
✅ should stay only on your local machine, or
✅ are automatically generated (builds, logs, temporary files).

---

## 📝 How does it work?

You create a file named:

```
.gitignore
```

at the root of your project (or any subfolder), and inside it you list **patterns** matching files or directories you want Git to ignore.

Example:

```
node_modules/
dist/
.env
*.log
```

- `node_modules/` ➔ ignore entire folder
- `dist/` ➔ ignore compiled build folder
- `.env` ➔ ignore your secret config file (API keys, passwords)
- `*.log` ➔ ignore all files ending with `.log`

---

## ⚡ Why is it important?

✅ Keeps your repository **clean and lightweight**.
✅ Protects sensitive data (like `.env` files).
✅ Prevents unnecessary files (like build artifacts or OS-specific files) from cluttering your repo.

---

## 🌳 Where to create it?

At the **root of your Git repo**, alongside your `package.json`, `pom.xml` or main source folder.

Example structure:

```
/my-app
  /src
  /node_modules
  .env
  package.json
  .gitignore
```

---

## ✨ Some typical entries in a `.gitignore`

### For Node.js projects:

```
node_modules/
.env
npm-debug.log
dist/
```

### For Java + Maven:

```
target/
*.class
*.jar
*.log
```

### For Mac & VS Code:

```
.DS_Store
.vscode/
```

---

✅ **In short:**
`.gitignore` is your way to tell Git:

> 👉 “Ignore these files.
> They don’t belong in version control.”

---

Absolutely! Here are some **lesser-known but super useful & unique Git commands** that go beyond the typical `add`, `commit`, and `push`.
I’ll also explain what each does so you can start using them confidently. 🚀

---

# 🚀 Unique & advanced Git commands

---

### 🔍 1. `git log --oneline --graph --decorate --all`

A beautiful way to **visualize your entire Git history** as a tree.

```bash
git log --oneline --graph --decorate --all
```

✅ Shows branches, merges & commits in a compact view.

---

### 🩹 2. `git stash`

Temporarily **save your uncommitted changes**, so you can switch branches without committing.

```bash
git stash
git checkout main
# do something else
git checkout my-feature
git stash pop # get changes back
```

✅ Great if you’re in the middle of work but need to quickly change tasks.

---

### 🕵️‍♂️ 3. `git blame`

Find out **who wrote each line in a file & when**.

```bash
git blame src/App.js
```

✅ Useful for debugging history or asking “Who changed this line?”

---

### 🧙‍♂️ 4. `git reflog`

View the **history of your HEAD**, even if commits were removed from branches.

```bash
git reflog
```

✅ Lifesaver if you accidentally `reset` or `commit --amend` and lose a commit — you can recover from here.

---

### 🚑 5. `git cherry-pick`

Apply a **specific commit from another branch** into your current branch.

```bash
git cherry-pick <commit-hash>
```

✅ Handy when you need a bug fix from another branch without merging everything.

---

### 🧼 6. `git clean`

Remove **untracked files & directories** (stuff not staged or ignored).

```bash
git clean -fd
```

⚠️ Careful: this will **delete files permanently** that are not tracked by Git.

---

### 📚 7. `git bisect`

A powerful way to **find which commit introduced a bug** by binary search.

```bash
git bisect start
git bisect bad   # current commit is bad
git bisect good <commit-hash>  # known good commit
# it will checkout midpoint
# test it, then run:
git bisect good  # or git bisect bad
# repeat until found
git bisect reset
```

---

### 🪄 8. `git shortlog -sn`

See a **summary of contributions** by each author.

```bash
git shortlog -sn
```

✅ Shows who has the most commits.

---

### 🥷 9. `git diff HEAD~1`

See **exactly what changed** in the last commit.

```bash
git diff HEAD~1
```

Or between two branches:

```bash
git diff main feature-branch
```

---

### 🧩 10. `git remote -v`

Shows the **URLs of your remotes** (like `origin`).

```bash
git remote -v
```

---

## 🚀 Bonus: combine them!

- See the last 5 commits as a tree:

```bash
git log --oneline --graph -5
```

- Clean + reset the repo hard (⚠️ use carefully):

```bash
git reset --hard
git clean -fd
```

---
