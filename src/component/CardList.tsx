"use client";
import Image from "next/image";
import React from "react";
type IToDo = {
  task: string;
  complate: boolean;
  totalTaskCom: number;
  hendleComplate: () => void;
  hendleDelete: () => void;
};
const CardList: React.FC<IToDo> = ({
  task,
  complate,
  totalTaskCom,
  hendleComplate,
  hendleDelete,
}: IToDo) => {
  return (
    <ul>
      <li>
        <button
          className="mr-6  check-box"
          style={{ backgroundColor: complate ? "#00ff0d" : "#000000" }}
          onClick={hendleComplate}
        />

        <span
          style={{
            textDecoration: complate ? "line-through" : "none",
          }}
        >
          {task}
        </span>
        <button className="ml-12 trash" onClick={hendleDelete}>
          <Image
            src="/images/delete.png"
            alt="deleta"
            width={12}
            height={12}
            priority
          />
        </button>
      </li>
    </ul>
  );
};
export default CardList;
