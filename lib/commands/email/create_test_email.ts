import { createId } from "@/lib/utils/create_id.ts";

export function createTestEmail(email: string): string {
  const [username, tld] = email.split("@");
  const id = createId();

  return `${username}+${id}@${tld}`;
}
