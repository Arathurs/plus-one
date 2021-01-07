## Plus One

Given a **non-empty** array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

### Solution 1
An iterative bottom-up approach, found in `plusOne.js`, implementing a reverse loop, which suits the style of the problem (plus one to the last integer).

#### Example 1:

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

#### Example 2:

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

#### Example 3:

```
Input: digits = [0]
Output: [1]
```

#### Contraints:

 - `1 <= digits.length <= 100`
 - `0 <= digits[i] <= 9`