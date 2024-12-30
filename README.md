# Runtime Error in TypeScript: Division by Zero

This code demonstrates a common error in TypeScript: a runtime error that isn't caught by the type system. The `divide` function correctly handles the case where the divisor is zero by throwing an error. However, the call to `divide(10, 0)` will still throw an error at runtime, highlighting the difference between compile-time type checking and runtime error handling.

The solution involves adding more robust error handling to prevent the program from crashing, such as using a try-catch block.