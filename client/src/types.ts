export interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
}
export type TodoContextType = {
  tasks: ITask[];
  setTasks: (t: ITask[]) => void;
  //TaskList
  markDone: (task: ITask) => void;
  deleteTask: (id: number) => void;
  setUpdateData: (t: ITask) => void;

  // UpdateForm
  updateData: ITask | null;
  changeTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateTask: (task: ITask) => void;
  cancelUpdate: (s: string) => void;
};
