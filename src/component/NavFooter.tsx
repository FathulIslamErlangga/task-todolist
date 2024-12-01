"use client";

import React from "react";

type IToDo = {
  complateTask: number;
  inputTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hendleAddTask: () => void;
};
const NavFooter: React.FC<IToDo> = ({
  complateTask,
  inputTask,
  hendleAddTask,
}: IToDo) => {
  return (
    <div className="footer-card">
      <div className="content-footer">
        <span className="text-center text-white">
          <h1>task complated</h1>
          <h5>{complateTask}</h5>
        </span>
        <div className="form-input text-center ">
          <input
            type="text"
            className="input-task "
            placeholder="Input Task"
            onChange={inputTask}
          />
          <div className="button items-center text-white">
            <button className="btn" onClick={hendleAddTask}>
              add task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
