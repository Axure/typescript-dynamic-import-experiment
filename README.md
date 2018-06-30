# A Demo of Type Inference for Dynamic Import in TypeScript

If you uncomment line 7 of `main.ts`, the compiler will complain about the missing property `b` on `something`. This demonstrates the existence of type inference for dynamic `import`s, as opposed to that for `require`, which will mark the required thing as `any`.