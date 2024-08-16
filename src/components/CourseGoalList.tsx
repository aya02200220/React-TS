import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoalType as CGoal } from "../App";

type CourseGoalProps = {
  goals: CGoal[];
};

const CourseGoalList = ({ goals }: CourseGoalProps) => {
  return (
    <ul className="grid grid-cols-2 gap-1">
      {goals.map((goal) => (
        <li className=" bg-[#333] p-3 m-1 " key={goal.id}>
          <CourseGoal title={goal.title}>
            <p className="leading-4">{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
