import { main } from "./index";

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

main();
assert(typeof main === "function", "main should be a function");
console.log("Smoke test passed.");
