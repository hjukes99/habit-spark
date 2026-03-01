# Habit Spark — SPEC

## App Overview
Habit Spark is a tiny daily habit tracker that helps users create momentum by checking off up to 5 habits per day and seeing a simple completion streak.

## Target User
- Solo builders and busy professionals who want a no-friction habit tracker.
- Users who prefer a minimal command-line/web service over heavyweight productivity apps.

## MVP Scope
1. Create and store up to 5 habits.
2. Mark habits complete for a given day.
3. Show today’s completion status.
4. Compute per-habit current streak.
5. Persist data locally in JSON for simplicity.

## Non-Goals (for now)
- Multi-user auth
- Cloud sync
- Mobile app
- Complex analytics

## Success Criteria (first 48h)
- App runs locally with documented setup.
- Basic smoke test passes.
- Top-priority implementation tasks are delegated to Jules.
