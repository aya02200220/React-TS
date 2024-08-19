import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import goalImg from "./goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((prev) => {
      const newGoal: CourseGoalType = {
        title: title,
        description: description,
        id: Math.random(),
      };
      return [...prev, newGoal];
    });
  }

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <main className="flex flex-col items-center justify-center mt-10 bg-[#4e4d4d] p-5 w-[80vw] rounded-md">
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1 className="text-2xl font-extrabold text-[#dccf72]">
          Your course Goals
        </h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} handleDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
