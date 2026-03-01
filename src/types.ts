export interface Habit {
  id: string;
  name: string;
  createdAt: string;
}

export interface AppData {
  habits: Habit[];
  checkIns: Record<string, string[]>; // Map of habitId -> array of YYYY-MM-DD strings
}
