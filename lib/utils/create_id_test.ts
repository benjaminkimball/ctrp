import { createId } from "@/lib/utils/create_id.ts";
import { assertMatch } from "@std/assert";

Deno.test("createId() returns ID with 12 characters by default", () => {
  const result = createId();
  assertMatch(result, /^[a-km-zA-HJ-NP-Z1-9]{12}$/);
});

Deno.test("createId() returns ID with specified number of characters", () => {
  const result = createId(8);
  assertMatch(result, /^[a-km-zA-HJ-NP-Z1-9]{8}$/);
});
