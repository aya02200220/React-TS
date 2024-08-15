import logo from "./logo.svg";
import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";

function App() {
  return (
    <main className="flex items-center w-full justify-center mt-10">
      <CourseGoal title="Learn React + TS">
        <p>Learning from the ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
