import React, { type FC, type ReactNode, type PropsWithChildren } from "react";

import ButtonComponent from "./ButtonComponent";

// TypeでもInterfaceでもOKだけどInterfaceのほうがExtendable
type CourseGoalProps = {
  title: string;
  children: ReactNode;
  handleDelete: (id: number) => void;
  id: number;
};
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children, handleDelete, id }: CourseGoalProps) => {
  return (
    <article className="flex flex-col items-center justify-center text-center">
      <div>
        <h2
          className="text-xl
        "
        >
          {title}
        </h2>
        {children}
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="border rounded-md px-2 py-1 mt-4"
      >
        Delete
      </button>
      <ButtonComponent as={"button"} onClick={() => handleDelete(id)}>
        {/* <ButtonComponent as={"button"} onClick={() => console.log("Clicked")}> */}
        Delete
      </ButtonComponent>
    </article>
  );
};

// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

export default CourseGoal;
