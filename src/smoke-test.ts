import { main } from "./index";
import { createEmptyAppData, createHabit } from "./model";

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

main();
assert(typeof main === "function", "main should be a function");

const appData = createEmptyAppData();
assert(Array.isArray(appData.habits), "appData.habits should be an array");
assert(typeof appData.checkIns === "object", "appData.checkIns should be an object");

const habit = createHabit("1", "Read a book");
assert(habit.id === "1", "habit should have the correct id");
assert(habit.name === "Read a book", "habit should have the correct name");
assert(typeof habit.createdAt === "string", "habit should have a createdAt string");

console.log("Smoke test passed.");
