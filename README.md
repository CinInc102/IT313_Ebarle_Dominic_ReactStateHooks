# Laboratory 5: React State and Hooks

## Project Description

The Lab Timer and Practice Tracker is a React Native application built for IT-313 Mobile Programming. It demonstrates state management, event handling, conditional rendering, useEffect cleanup, custom hooks, and lifting state up.

## Features

* **Practice Tracker:** Displays the number of problems solved.
* **Solve +1 Button:** Increases the solved counter by one.
* **Reset Button:** Resets the solved counter to zero.
* **Success Message:** Displays "Great job!" when five or more problems have been solved.
* **Stopwatch:** Displays elapsed time in minutes and seconds.
* **Start and Stop Buttons:** Starts, pauses, and resumes the stopwatch.
* **Effect Cleanup:** Clears the timer interval when the stopwatch stops or the effect is cleaned up.

## Components and Custom Hook

### 1. LabScreen

The `LabScreen` component manages the solved counter and stopwatch running state using `useState`. It passes the appropriate values and event-handler functions to the `PracticeTracker` and `Stopwatch` components.

### 2. PracticeTracker

The `PracticeTracker` component receives the solved counter and callback functions through props. It provides the Solve +1 and Reset buttons and conditionally displays "Great job!" when the solved counter reaches five.

### 3. Stopwatch

The `Stopwatch` component receives the elapsed seconds and running status through props. It formats the elapsed time as `MM:SS` and displays either "Running…" or "Paused".

### 4. useStopwatch

The `useStopwatch` custom hook uses `useState` to store elapsed seconds and `useEffect` to manage a one-second interval. Its cleanup function calls `clearInterval` to prevent the interval from continuing after cleanup.

## React Concepts Demonstrated

* `useState` for managing component state.
* `useEffect` for managing a timer interval.
* Effect cleanup with `clearInterval`.
* Conditional rendering based on state.
* Event handling with button press callbacks.
* Lifting state up to a shared parent component.
* Functional state updates to increment the solved counter safely.
* Reusable components connected through props.

## How to Run the Application

1. Install Node.js and pnpm.

2. Open the project folder in a terminal.

3. Install the project dependencies:

   ```bash
   pnpm install
   ```

4. Start the Expo development server:

   ```bash
   pnpm exec expo start
   ```

5. Press `w` in the Expo terminal to run the application in a web browser, or open it on a compatible Android emulator or device using Expo's available development options.

## Testing

The following behaviors were tested in the web version of the application:

* The solved counter starts at zero.
* Solve +1 increases the counter.
* "Great job!" appears at five solved problems and disappears after resetting.
* The stopwatch starts, pauses, and resumes without resetting its elapsed time.
* Resetting the solved counter does not reset the stopwatch.
* The stopwatch uses an effect cleanup function to clear its interval.

## Conclusion

This project illustrates the use of React State and Hooks for developing an interactive application where components, state, events, conditional rendering, and timers have all been used.
