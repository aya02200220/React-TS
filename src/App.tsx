import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import goalImg from "./goals.jpg";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  function handleAddGoal() {
    setGoals((prev) => {
      const newGoal: CourseGoalType = {
        title: "Learn React + TS",
        description: "Learning from the ground up",
        id: Math.random(),
      };
      return [...prev, newGoal];
    });
  }

  const handleDeleteGoal = () => {};

  return (
    <main className="flex flex-col items-center justify-center mt-10 bg-[#4e4d4d] p-5 w-[80vw] rounded-md">
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1 className="text-2xl font-extrabold text-[#dccf72]">
          Your course Goals
        </h1>
      </Header>
      <button
        className="rounded-md border border-white p-2 bg-[#b38a8a] m-2 hover:bg-[#9b6868]"
        onClick={handleAddGoal}
      >
        Add Goal
      </button>

      <CourseGoalList goals={goals} />
    </main>
  );
}

export default App;
