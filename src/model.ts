import { AppData, Habit } from "./types";

export function createEmptyAppData(): AppData {
  return {
    habits: [],
    checkIns: {},
  };
}

export function createHabit(id: string, name: string): Habit {
  return {
    id,
    name,
    createdAt: new Date().toISOString(),
  };
}
