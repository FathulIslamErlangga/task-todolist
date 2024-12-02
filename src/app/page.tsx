"use client";
import CardList from "@/component/CardList";
import NavFooter from "@/component/NavFooter";

import { useState } from "react";
import { IToDo, tasks } from "../../public/taskDb/task";

export default function Home() {
  const [inputTask, setInputTask] = useState(" ");
  const [status, setStatus] = useState("typing");
  const [items, setItems] = useState<IToDo[]>(tasks);
  const [error, setError] = useState<string | null>(null);

  const hendleDelete = (id: number) => {
    setItems((itemTask) => itemTask.filter((item) => item.id === id));
  };
  const hendleComplate = (id: number) => {
    setItems((tasks) =>
      tasks.map(
        (task) =>
          task.id === id
            ? {
                ...task,
                complate: !task.complate,
                totalTaskCom:
                  task.complate === true
                    ? task.totalTaskCom + 1
                    : task.totalTaskCom - 1,
              }
            : task
        // task.id === id ? {}
      )
    );
  };

  const HendleInputTask = (i: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(i.target.value);
  };

  const hendleSubmit = async () => {
    await addTask(inputTask);
    setStatus("submitting");
    try {
      setStatus("submited");
    } catch (error) {
      setStatus("error");
      setError(error as string);
    }
  };

  const addTask = (task: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (task.length <= 0) {
          reject("error");
        } else {
          const addNewTask = {
            id: items.length + 1,
            task: task,
            totalTaskCom: 0,
            complate: false,
          };
          setItems((item) => [...item, addNewTask]);
          resolve("ok");
        }
      });
    });
  };
  const completedTasks = items.filter((item) => item.complate).length;
  return (
    <section>
      <div className="container">
        <div className="card-ToDo">
          <h1 className="text-center text-white text-uppercase title">
            to do list
          </h1>
          {status === "error" && error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}
          <div className="list-data text-white">
            {items.map((item) => (
              <CardList
                key={item.id}
                task={item.task}
                complate={item.complate}
                totalTaskCom={item.totalTaskCom}
                hendleComplate={() => hendleComplate(item.id)}
                hendleDelete={() => hendleDelete(item.id)}
              />
            ))}
          </div>
          <NavFooter
            complateTask={completedTasks}
            hendleAddTask={hendleSubmit}
            inputTask={HendleInputTask}
          />
        </div>
      </div>
    </section>
  );
}
