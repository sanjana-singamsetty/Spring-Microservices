## ✅ Problem: Valid Palindrome

**Goal:**
Check if a string is a valid palindrome, **considering only alphanumeric characters** and **ignoring cases**.

---

## ✅ JavaScript Code:

```javascript
function isPalindrome(s) {
  // Step 1: Remove non-alphanumeric characters & convert to lowercase
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Step 2: Use two pointers to compare from both ends
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

---

## 🧪 Examples:

```javascript
console.log(isPalindrome("A man, a plan, a canal: Panama")); // ✅ true
console.log(isPalindrome("race a car")); // ❌ false
console.log(isPalindrome(" ")); // ✅ true (empty string is a palindrome)
```

---

## 🔍 How It Works:

1. `s.replace(/[^a-z0-9]/gi, '')` removes all non-alphanumeric characters.
2. `.toLowerCase()` makes the string lowercase.
3. Then we compare characters from both ends using two pointers.

---

Let me know if you want a version that ignores Unicode characters or explains with dry run!

Sure! Here's a complete explanation of the **"Move Zeroes"** problem in C++, with a clean markdown format and clear logic breakdown.

---

# ✅ Move Zeroes (C++ Explanation)

### 🔹 Problem Statement

Given an integer array `nums`, move all **0's** to the **end** of it while maintaining the **relative order** of the non-zero elements.

Do this **in-place** without making a copy of the array.

---

### 🔸 Example

```cpp
Input:  nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

---

## ✅ Optimal Approach: Two Pointer Technique

We use a pointer `po` (position of overwrite) to track where the next non-zero element should be placed.

---

### 🔹 C++ Code

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int po = 0;  // Pointer for placing non-zero elements
        int n = nums.size();

        // Step 1: Move all non-zero elements to the front
        for (int i = 0; i < n; i++) {
            if (nums[i] != 0) {
                nums[po] = nums[i];
                po++;
            }
        }

        // Step 2: Fill remaining positions with zero
        while (po < n) {
            nums[po++] = 0;
        }
    }
};
```

---

### 🔍 Explanation

#### ✅ Step 1: Move non-zero elements

- We loop through the array.
- Whenever we see a **non-zero**, we place it at index `po` and increment `po`.

For example:

```
Initial:  [0,1,0,3,12]
po:       0

Loop:
i = 0: nums[0] = 0 → skip
i = 1: nums[1] = 1 → nums[po] = 1 → po = 1
i = 2: nums[2] = 0 → skip
i = 3: nums[3] = 3 → nums[po] = 3 → po = 2
i = 4: nums[4] = 12 → nums[po] = 12 → po = 3

After Step 1: [1,3,12,3,12] (but rest not yet zeroed)
```

#### ✅ Step 2: Fill remaining with 0

We now set all elements from `po` to `n` to `0`.

```
po = 3
nums[3] = 0
nums[4] = 0

Final Output: [1,3,12,0,0]
```

---

### ⏱️ Time & Space Complexity

| Metric               | Value             |
| -------------------- | ----------------- |
| **Time Complexity**  | `O(n)`            |
| **Space Complexity** | `O(1)` (in-place) |

---
