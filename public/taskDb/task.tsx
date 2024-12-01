export interface IToDo {
  id: number;
  task: string;
  totalTaskCom: number;
  complate: boolean;
}
export const tasks: IToDo[] = [
  {
    id: 1,
    task: "Create Gueast Experience mobile check-in",
    totalTaskCom: 0,
    complate: false,
  },
  {
    id: 2,
    task: "Document current CI/CD process",
    totalTaskCom: 0,
    complate: false,
  },
  {
    id: 3,
    task: "Perform Code Review for final Pillow Talk release",
    totalTaskCom: 0,
    complate: false,
  },
  {
    id: 4,
    task: "Implement new Color palette from Design Team",
    totalTaskCom: 0,
    complate: false,
  },
  {
    id: 5,
    task: "Fix Image Uploading process for guest check-in",
    totalTaskCom: 0,
    complate: false,
  },
  {
    id: 6,
    task: "Provide on-boarding documentaion",
    totalTaskCom: 0,
    complate: false,
  },
];
