import { Command } from "@commander-js/extra-typings";

export const program = new Command();

program
  .name("ctrp")
  .description("Commonly cast spells used in my development workflow.")
  .version("0.1.0", "-v --version");
