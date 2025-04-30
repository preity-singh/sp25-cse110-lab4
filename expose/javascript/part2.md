1. The terminal prints "3" at line 12. This is because i is declared with var (function-scoped). i is accessible anywhere in the function. After the for loop ends, i's value is 3.
   
2. The terminal prints "150" at line 13. This is the final value of discountedPrice after the last iteration of the loop. Since discountedPrice was declared as var (function-scoped), it remains accessible anywhere within the function.

3. The terminal prints "150" at line 14. finalPrice is declared at the beginning of the function with var. It is accessible in the for loop, where it is reassigned on every iteration. After the last iteration finalPrice = Math.round(150*100)/ 100 = 150.

4. The function returns the array [50, 100, 150]. It iterates through the input prices, applies a 50% discount to each one, rounds the result to two decimal places, and stores the final values in the discounted array. The function returns this array. However, since there's no console.log() statement, there is no output on the terminal. 
   
5. Line 12 throws the error "ReferenceError: i is not defined." This is because i is declared with let, which is block-scoped. This means that it's only accessible within the for loop and not outside of it. 

6. Line 13 throws a "ReferenceError: discountedPrice is not defined." This happens because discountedPrice was declared using let (block-scoped). Like above, this means that this variable is unable to be referenced outside of the for loop. 
   
7. Line 14 prints "150". finalPrice is declared with let outside of the for loop so it is accessible both inside the loop and after it. Final iteration: prices[2] = 300 ; discount = 0.5 . So, 300 * 0.5 = 150 and finalPrice = Math.found(150*100) / 100 = 150. Since, finalPrice is 150, the terminal prints 150.

8. The function returns the array [50, 100, 150]. It iterates through the input prices, applies a 50% discount to each, rounds the result to two decimal places, and stores each final price in the discounted array, which is defined using let at the top of the function. The function then returns this array. No errors occur because all variables are properly scoped using let. Using let ensures each variable is limited to the block where it is needed. This makes the code more predictable and less prone to bugs.

9. Line 11 causes a "ReferenceError: i is not defined". This is because i is declared with let inside the for loop, making it block-scoped within that loop. Since i only exists within the loop block, it cannot be accessed after the loop ends at line 11.

10. Line 12 prints "3" to the terminal. This is because length is declared using const outside of any loop and holds the value prices.length. const is function-scoped, so no error occurs.

11. This function returns the array [50, 100, 150]. It loops through each price in the input array, applies 50% discount, and stores and returns the discounted values in discounted array. All variables are declared with const or let in the correct scope. 

12. -
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

13. Arithmetic
    A. 32 - string and integar concatenated 
    B. 1 - 
    C. 3 - 
    D. 3null - concatenate string 
    E. 4 - true signifies to 1 plus 3 is 4
    F. 0 - false translates to 0 plus null is just zero
    G. 3undefined - two strings concatenated 
    H. NaN - 

14. Comparison
    A. true
    B. false - because it is comparing strings, so it starts by comparing the first index and since '2' is greater than '1' (in '12'), '2' < '1' is false
    C. true - comparing 2 and 2
    D. false 
    E. false - true equals 1 not 2
    F. true 

15. They are both comparison operators. However they are different in how they handle type conversions. '==' performs loose equality. This means that this operation compares values after converting them to the same type, which can lead to unexpected and buggy behavior. On the other hand, '===' performs strict equality. This means that this operation does not do any type conversion and compares both value and type. It is more predictable and safer in most situations. 
    
16. Output:
    21
    45
    5
    2

17. The result is [2, 4, 6]. The modifyArray function loops through the array [1, 2, 3] that we pass in, and applies the callback function which is passed in as doSomething to each element in the array. The doSomething function takes a number and returns that number multiplied by 2. doSomething(1) returns 2, doSomething(2) returns 4, doSomething(3) returns 6. These values are added to a new array, which is returned as [2, 4, 6].

18. see "part2-question18.js"

19. Output: 
    1
    4
    3
    2