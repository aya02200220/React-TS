import React, { type FC, type ReactNode, type PropsWithChildren } from "react";

// TypeでもInterfaceでもOKだけどInterfaceのほうがExtendable
// type CourseGoalProps = { title: string; description: string };
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2
          className="text-2xl
        "
        >
          {title}
        </h2>
        {children}
      </div>
      <button>Delete</button>
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
