import { createTestEmail } from "@/lib/commands/email/create_test_email.ts";
import { assertMatch } from "@std/assert";

Deno.test("createTestEmail() appends unique ID to provided email", () => {
  const result = createTestEmail("test@test.com");
  assertMatch(result, /^test\+[a-km-zA-HJ-NP-Z1-9]{12}@test\.com$/);
});
