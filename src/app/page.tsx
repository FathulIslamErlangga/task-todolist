"use client";
import CardList from "@/component/CardList";
import NavFooter from "@/component/NavFooter";
import Image from "next/image";
import Link from "next/link";
import { resolve } from "path";
import { useState, useEffect } from "react";
import { IToDo, tasks } from "../../public/taskDb/task";
Link;
Image;
export default function Home() {
  const [inputTask, setInputTask] = useState(" ");
  const [status, setStatus] = useState("typing");
  const [countCom, setCountCom] = useState(0);
  const [items, setItems] = useState<IToDo[]>(tasks);
  // const [countTask, setCountTask] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const taskComplated = items.reduce(
      (acc, item) => acc + item.totalTaskCom,
      0
    );
    setCountCom(taskComplated);
  }, [items]);

  const hendleDelete = (id: number) => {
    setItems((itemTask) => itemTask.filter((item, index) => index === item.id));
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
    } catch (error: boolean | any) {
      setStatus("error");
      setError(error);
    }
  };

  const addTask = (task: string, totalTaskCom?: number) => {
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
  // const addTask = (inputTask: string) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (inputTask.length <= 0) {
  //         reject("error");
  //       } else {
  //         setCountTask(1 + countTask);
  //         const newTask = (
  //           <CardList
  //             task={inputTask}
  //             hendleDelete={() => hendleDelete(countTask)}
  //             hendleComplate={() => hendleComplate}
  //           />
  //         );
  //         setItems((items) => [...items, newTask]);
  //         resolve("ok");
  //       }
  //     }, 1000);
  //   });
  // };

  // const HendleDeleteTask = (id: number) => {
  //   setItems((delItem) => delItem.filter((items, i) => i !== id));
  //   setCountCom(countCom - 1);
  // };
  return (
    <section>
      <div className="container">
        <div className="card-ToDo">
          <h1 className="text-center text-white text-uppercase title">
            to do list
          </h1>
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
            complateTask={[...items].filter((item) => item.totalTaskCom).length}
            hendleAddTask={hendleSubmit}
            inputTask={HendleInputTask}
          />
        </div>
      </div>
    </section>
  );
}
