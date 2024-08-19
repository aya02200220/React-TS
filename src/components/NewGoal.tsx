import React, { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (title: string, description: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goalTitle = useRef<HTMLInputElement>(null);
  const goalDescription = useRef<HTMLInputElement>(null);

  const handleAddGoal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTitle = goalTitle.current!.value;
    const enteredDescription = goalDescription.current!.value;

    onAddGoal(enteredTitle, enteredDescription);
  };
  return (
    <form onSubmit={handleAddGoal}>
      <p>
        <label htmlFor="title">
          <input type="text" id="title" placeholder=" Title" ref={goalTitle} />
        </label>
      </p>
      <p>
        <label htmlFor="description">
          <input
            ref={goalDescription}
            className="mt-1"
            type="text"
            id="description"
            placeholder=" Description
"
          />
        </label>
      </p>

      <button className="rounded-md border w-full border-white p-2 bg-[#b38a8a]  mt-2 mb-4 hover:bg-[#9b6868]">
        ADD
      </button>
    </form>
  );
};

export default NewGoal;
