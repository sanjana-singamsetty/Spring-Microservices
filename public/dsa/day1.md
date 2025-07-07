---

# 🔁 Reverse an Array in Java

## ✅ Problem Statement

Given an array, reverse its elements **in-place** (without using extra space).

### 🧪 Example

**Input:**
```java
arr = {5, 4, 3, 2, 1}
```

**Output:**
```java
Reversed array is:
1 2 3 4 5
```

---

## 🧠 Approach

Use the **two-pointer technique**:

1. Initialize two pointers:

![Two pointers illustration](https://lh3.googleusercontent.com/iHCnj-AeDCeoc5f8vav2X489jxyB0QO9wzlKqs_r9iv9S2WWBiqQaduu7okTqZq87iVNEJ7OFybknUVyY3V0CQHeGZeQYuUfIVu5dwMn8mtWBsUJlmOZhw2rSMvwAhDt5PoRI3Z_)

- `p1` at the **start** (index 0)
- `p2` at the **end** (index n - 1)

2. Swap elements at `p1` and `p2`.
3. Move `p1` forward and `p2` backward.
4. Repeat until `p1 >= p2`.

---

## 🧾 Code

```java
public class Main {

   // Function to print array
   static void printArray(int arr[], int n) {
      System.out.print("Reversed array is:\n");
      for (int i = 0; i < n; i++) {
        System.out.print(arr[i] + " ");
      }
   }

   // Function to reverse array
   static void reverseArray(int arr[], int n) {
      int p1 = 0, p2 = n - 1;
      while (p1 < p2) {
        int tmp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = tmp;
        p1++;
        p2--;
      }
      printArray(arr, n);
   }

   public static void main(String[] args) {
      int n = 5;
      int arr[] = { 5, 4, 3, 2, 1 };
      reverseArray(arr, n);
   }
}
```

---

## ⏱️ Time Complexity

- **O(n)** — Each element is swapped at most once.

---

## 🧮 Space Complexity

- **O(1)** — Only a few variables are used; reversal is in-place.

---

## 📌 Key Concepts

- Two-pointer approach
- In-place swapping
- No extra array or list needed

---

Sure! You're solving a **very classic sliding window problem**:

> **Find the length of the longest substring without repeating characters.**

Let's walk through the logic in detail with code comments, step-by-step intuition, and complexities.

---

### ✅ **Problem Statement**

Given a string `s`, find the length of the **longest substring** that has **no repeating characters**.

### 🔍 Example:

```java
Input: "abcabcbb"
Output: 3 // "abc"
```

---

### 🧠 Code Explanation (Line-by-Line)

```java
static int solve(String s) {
    HashMap<Character, Integer> mpp = new HashMap<>();
```

- This map (`mpp`) stores the **most recent index** of each character.
- Helps in skipping past duplicates quickly.

```java
    int left = 0, right = 0;
    int n = s.length();
    int len = 0;
```

- `left` and `right` are the **two pointers** of the sliding window.
- `len` will store the **maximum length** found so far.

```java
    while (right < n) {
```

- Keep expanding the window from the right side.

```java
        if (mpp.containsKey(s.charAt(right)))
            left = Math.max(mpp.get(s.charAt(right)) + 1, left);
```

- If `s.charAt(right)` has already appeared:

  - Move the `left` pointer to **1 position ahead** of the last seen index of that character.
  - `Math.max(..., left)` ensures we never move `left` **backwards** (important to avoid bugs in overlapping substrings).

```java
        mpp.put(s.charAt(right), right);
```

- Update the **latest index** of the current character.

```java
        len = Math.max(len, right - left + 1);
        right++;
    }
```

- Update the `len` if the current window is larger than any previous.
- Expand the window by moving `right`.

```java
    return len;
}
```

---

### ⏱️ Time Complexity

- **O(n)** — each character is visited at most twice (once by `right`, and possibly once by `left`).
- Efficient sliding window approach.

### 🧮 Space Complexity

- **O(k)** — where `k` is the size of the character set (at most 26 for lowercase letters, or 128 for ASCII).

---

### 📌 Example Walkthrough: `"abcabcbb"`

| Step | Left | Right | Char | Map                 | Window | Len |
| ---- | ---- | ----- | ---- | ------------------- | ------ | --- |
| 1    | 0    | 0     | a    | a → 0               | "a"    | 1   |
| 2    | 0    | 1     | b    | a → 0, b → 1        | "ab"   | 2   |
| 3    | 0    | 2     | c    | a → 0, b → 1, c → 2 | "abc"  | 3   |
| 4    | 0→1  | 3     | a    | b → 1, c → 2, a → 3 | "bca"  | 3   |
| 5    | 1→2  | 4     | b    | c → 2, a → 3, b → 4 | "cab"  | 3   |

… and so on.

---

### 💡 Intuition

The sliding window keeps expanding to include new unique characters and shrinks from the left whenever a duplicate is found — ensuring that the window always has **distinct characters**.

---

Would you like the **JavaScript version** of this logic too?

Here's a clear and structured **Markdown (`.md`) explanation** of the **Two Sum** problem using **two optimized approaches**:

- **Approach 1**: Using `unordered_map` (Hash Map)
- **Approach 2**: Using the `Two Pointers` technique

---

````md
# 🧮 Two Sum Problem – Optimized Approaches

Given an array of integers `arr[]` and a target value `target`, determine if there exist **two elements** in the array whose sum is equal to the `target`.

---

## ✅ Approach 1: Using `unordered_map` (Hash Map)

### 💡 Intuition:

Instead of checking every possible pair (brute force), we store elements we’ve already seen in a hash map and check if the "complement" (target - current number) exists.

### ⚙️ Algorithm Steps:

1. Initialize an empty map `mpp`.
2. Traverse the array:
   - For every element `num = arr[i]`, calculate `moreNeeded = target - num`.
   - Check if `moreNeeded` exists in the map:
     - If **yes**, return `"YES"` or `{map[moreNeeded], i}`.
     - If **no**, store `arr[i]` in the map with its index.
3. If no such pair is found, return `"NO"` or `{-1, -1}`.

### 🧪 Dry Run:

**Input:** `arr = [2, 6, 5, 8, 11]`, `target = 14`

- i = 0 → num = 2, moreNeeded = 12 → not in map → store (2, 0)
- i = 1 → num = 6, moreNeeded = 8 → not in map → store (6, 1)
- i = 2 → num = 5, moreNeeded = 9 → not in map → store (5, 2)
- i = 3 → num = 8, moreNeeded = 6 → ✅ found in map → return `YES`

### 💻 C++ Code:

```cpp
string twoSum(int n, vector<int> &arr, int target) {
    unordered_map<int, int> mpp;
    for (int i = 0; i < n; i++) {
        int num = arr[i];
        int moreNeeded = target - num;
        if (mpp.find(moreNeeded) != mpp.end()) {
            return "YES"; // or return {mpp[moreNeeded], i};
        }
        mpp[num] = i;
    }
    return "NO"; // or return {-1, -1};
}
```
````

### ⏱️ Time Complexity:

- Average Case: **O(N)**
- Worst Case (rare due to hash collisions): **O(N²)**
- Space: **O(N)** for the hash map

---

## 🔁 Approach 2: Two-Pointer Technique

### 💡 Intuition:

If the array is **sorted**, we can use a greedy two-pointer approach:

- Start from both ends and adjust pointers based on sum.

### ⚙️ Algorithm Steps:

1. **Sort** the array.
2. Set two pointers:

   - `left = 0`, `right = n - 1`

3. While `left < right`:

   - Calculate `sum = arr[left] + arr[right]`
   - If `sum == target`: return `"YES"` (or indices)
   - If `sum < target`: increment `left`
   - If `sum > target`: decrement `right`

4. Return `"NO"` if no pair found.

> ⚠️ This does **not work for original indices** unless we store them before sorting.

### 🧪 Dry Run:

**Input:** `arr = [2, 6, 5, 8, 11]`, `target = 14`
**After sorting:** `[2, 5, 6, 8, 11]`

- left = 0, right = 4 → 2 + 11 = 13 → increase left
- left = 1, right = 4 → 5 + 11 = 16 → decrease right
- left = 1, right = 3 → 5 + 8 = 13 → increase left
- left = 2, right = 3 → 6 + 8 = 14 → ✅ found → return `"YES"`

### 💻 C++ Code:

```cpp
string twoSumSorted(int n, vector<int> &arr, int target) {
    sort(arr.begin(), arr.end());
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return "YES";
        else if (sum < target) left++;
        else right--;
    }
    return "NO";
}
```

### ⏱️ Time Complexity:

- Sorting: **O(N log N)**
- Two-pointer scan: **O(N)**
- Total: **O(N log N)**
- Space: **O(1)**

---

## 📊 Comparison Table:

| Approach     | Time Complexity | Space Complexity | Can Return Original Indices? | Sorting Required? |
| ------------ | --------------- | ---------------- | ---------------------------- | ----------------- |
| Hash Map     | O(N)            | O(N)             | ✅ Yes                       | ❌ No             |
| Two Pointers | O(N log N)      | O(1)             | ❌ No (unless handled)       | ✅ Yes            |

---

## ✅ Conclusion:

- Use **Hash Map** for unsorted arrays where you need **original indices**.
- Use **Two Pointers** when the array is **sorted** and you want **less space usage**.

```

Let me know if you want this exported as a `.md` file or converted to a blog-style layout!
```

Great question!

---

## 🧠 Why Do We Use `unordered_map` in the Two Sum Problem?

### 🔍 **Goal of the Problem:**

We want to find **two numbers** in an array such that their **sum equals a given target** — and we want to do this **efficiently**.

---

## ✅ `unordered_map` Solves the Problem in O(N)

Here's **why we use `unordered_map`**:

### 1. 🔄 **Instant Lookup with O(1) Time**

- `unordered_map` is based on **hash tables**.
- We can check if a number exists in the map using:

  ```cpp
  if (mpp.find(x) != mpp.end())
  ```

  This check takes **average O(1)** time.

- This helps us **avoid nested loops** (which take O(N²)).

---

### 2. 📌 **Store Values We've Already Seen**

- We traverse the array once.
- For each element `num`, we calculate `moreNeeded = target - num`.
- We check if `moreNeeded` is already in the map (i.e., we’ve seen a value earlier that complements `num`).
- If yes, we found the pair!
- If not, we store `num` in the map for future reference:

  ```cpp
  mpp[num] = i; // i = index of num
  ```

---

### 🔁 Example:

```cpp
arr = [2, 6, 5, 8, 11], target = 14

Iteration 1: num = 2 → moreNeeded = 12 → not in map → store 2
Iteration 2: num = 6 → moreNeeded = 8  → not in map → store 6
Iteration 3: num = 5 → moreNeeded = 9  → not in map → store 5
Iteration 4: num = 8 → moreNeeded = 6  → ✅ found in map → pair = (8, 6)
```

---

### 🆚 `map` vs `unordered_map`

| Feature         | `map`             | `unordered_map`       |
| --------------- | ----------------- | --------------------- |
| Underlying DS   | Red-Black Tree    | Hash Table            |
| Lookup Time     | O(log N)          | **O(1)** average      |
| Ordered?        | Yes (sorted keys) | **No**                |
| Use in Two Sum? | ❌ Slower         | ✅ Faster for lookups |

---

## 🎯 Final Answer:

> We use `unordered_map` in the Two Sum problem because it lets us **store and look up elements in constant time**, reducing the time complexity from **O(N²)** to **O(N)**.

Let me know if you’d like a visual diagram or code simulation of how the map builds up!
