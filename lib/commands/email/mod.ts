import { createTestEmail } from "@/lib/commands/email/create_test_email.ts";
import { program } from "@/lib/program.ts";
import chalk from "chalk";

const command = new Deno.Command("pbcopy", { stdin: "piped" });

program
  .command("email")
  .description("append a unique key to email for use in testing")
  .argument("<email>", "base email address")
  .action(async (email) => {
    console.info("> Generating test email...");

    // Add suffix to provided email
    const testEmail = createTestEmail(email);

    // Copy test email to clipboard
    const process = command.spawn();
    const writer = process.stdin.getWriter();

    await writer.write(new TextEncoder().encode(testEmail));
    writer.releaseLock();

    await process.stdin.close();

    console.info("> Copied to clipboard:", chalk.green(testEmail));
  });
