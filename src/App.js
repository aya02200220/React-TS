import "./App.css";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalImg from "./goals.jpg";

function App() {
  return (
    <main className="flex flex-col items-center w-full justify-center mt-10">
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">
        <p>Learning from the ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
