import { useState } from "react";
import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImg from "./goals.jpg";

type CourseGoalType = {
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
      <ul className="grid grid-cols-3 gap-1">
        {goals.map((goal) => (
          <li className=" bg-[#333] p-3 m-1 " key={goal.id}>
            <CourseGoal title={goal.title}>
              <p className="leading-4">{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
