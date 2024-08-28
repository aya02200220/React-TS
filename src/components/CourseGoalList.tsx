import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoalType as CGoal } from "../App";

type CourseGoalProps = {
  goals: CGoal[];
  handleDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, handleDelete }: CourseGoalProps) => {
  return (
    <ul className="grid grid-cols-2 gap-1">
      {goals.map((goal) => (
        <li className=" bg-[#333] p-3 m-1 " key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            handleDelete={handleDelete}
          >
            <p className="leading-4 grid grid-cols-3">{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
