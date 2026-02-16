What is an Array? (Interview Answer)

An array is a data structure that stores multiple values of the same type in contiguous memory locations and allows access using an index.

(JS me internally thoda different hota hai, but interview ke liye ye answer solid hai.)

🧠 Why Arrays Are Important?

Fast access using index → O(1)

Base of many problems (strings, stack, queue, DP)

JS interviews me 70% problems arrays pe hi aate hain

⏱ Time Complexity of Array Operations
Operation Time
Access arr[i] O(1)
Update O(1)
Insert at end (push) O(1)
Remove from end (pop) O(1)
Insert at start (unshift) O(n)
Delete at start (shift) O(n)
Search (unsorted) O(n)
⚠️ JS Array Interview Traps

JS array = dynamic

Can store mixed types (but avoid in interviews)

length auto-updates

Sparse arrays exist (avoid using them)

..........

Interview Thinking Process (Say This While Explaining)

“I’ll traverse the array once, keep track of required variables, and optimize time to O(n) while keeping space constant.”

Interviewers LOVE this sentence ❤️

🚫 Common Mistakes

❌ Extra arrays when not needed
❌ Nested loops without thinking
❌ Forgetting edge cases (empty array, single element)
=======================

📌 Difference: Arrays in JavaScript vs Other Languages
   
Size:
JavaScript Array: Dynamic(auto grow/shrink)
OtherLan(C++ / Java): Fixed (mostly)

Data Type:
JavaScript Array: Can store mixed types OtherLan(C++ / Java): Usually same data type

Memory:
JavaScript Array: Not strictly contiguous OtherLan(C++ / Java): Contiguous memory

Declaration:
JavaScript Array: No size needed
OtherLan(C++ / Java): Size often required

Methods:
JavaScript Array: Built-in (push, pop, map) OtherLan(C++ / Java): Limited / manual

Implementation
JavaScript Array: More like an object
OtherLan(C++ / Java): Pure array structure

Indexing:
JavaScript Array: Zero-based
OtherLan(C++ / Java): Zero-based



=====================================
TOP 20 ARRAY PROBLEMS (Concept-Clearing Order)
🔹 Basic Level (Foundation Clear)

Find largest element in array

Find smallest element

Find second largest element

Reverse an array

Check if array is sorted

Sum of all elements

Count even & odd elements

🔹 Intermediate Level (Interview Starters)

Move all zeros to the end

Find duplicate elements

Count frequency of each element

Remove duplicates from sorted array

Rotate array by 1

Rotate array by k positions

Find missing number in array

Find intersection of two arrays

🔹 Advanced Level (Logic Builders)

Two Sum problem

Find majority element

Maximum subarray sum (Kadane’s Algorithm)

Stock buy & sell (max profit)

Rearrange array in alternating positive & negative