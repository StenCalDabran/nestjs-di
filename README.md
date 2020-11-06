Test Repository to allow triage of https://github.com/nestjs/nest/issues/5673.

The problematic nested custom-decorated dependency-injected classes are both available 
- in `src/app.service.ts` where you can see the problem via `nest start` and 
- in `src/standalone-test.spec.ts` where everything related to the problem is in one file which can be tested via `jest standalone`.
