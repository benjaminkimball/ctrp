import { createTestEmail } from "@/lib/commands/email/create_test_email.ts";
import { program } from "@/lib/program.ts";
import chalk from "chalk";

program
  .command("email")
  .description("append a unique key to email for use in manual testing")
  .argument("<email>", "base email address")
  .action(async (email) => {
    console.info("> Generating test email...");

    const testEmail = createTestEmail(email);
    const command = new Deno.Command("pbcopy", { args: [testEmail] });
    const { code } = await command.output();

    if (code !== 0) throw "Failed to copy email to clipboard!";

    console.info("> Copied to clipboard:", chalk.green(testEmail));
  });
