# Laboratory 4: React Components & JSX in Action

## Project Description

This project demonstrates React Native components, JSX, props, conditional rendering, list rendering, and the use of unique keys in a student roster application.

## Components

### 1. StudentCard

The `StudentCard` component displays an individual student's information. It receives the following props:

* `name`: The student's name.
* `course`: The student's course.
* `units`: The number of enrolled units.
* `isFullLoad`: A Boolean value indicating whether the student has a full load.

The component uses conditional rendering to display the **Full Load** label only when `isFullLoad` is `true`.

### 2. StudentRoster

The `StudentRoster` component contains an array of student records and displays them using JavaScript's `.map()` method.

It also demonstrates:

* Displaying the total number of students using `students.length`.
* Rendering each student through the `StudentCard` component.
* Using `key={student.id}` to provide each student with a stable, unique key.
* Reversing the displayed student order using a button.

## React Key Experiment

For the experiment, the student key was temporarily changed from `key={student.id}` to an array-index-based key.

The list was then reversed to observe the behavior. The cards continued to display the student information, although index-based keys can cause problems when list items are reordered, inserted, or removed, particularly when components have their own state.

The original implementation was restored to `key={student.id}` because stable, unique keys are the recommended approach.

## How to Run the Application

1. Open the project folder in a terminal.

2. Install the dependencies if they are not already installed:

   ```bash
   pnpm install
   ```

3. Start the Expo development server:

   ```bash
   pnpm exec expo start
   ```

4. Press `w` in the terminal to open the application in a web browser, or use the appropriate Expo development option for a mobile device or emulator.

## Conclusion

This project demonstrates how React Native components can be reused through props, how conditional rendering controls what appears on
