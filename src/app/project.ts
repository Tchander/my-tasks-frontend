export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  project_id: bigint;
}

export interface Project {
  id: number;
  title: string;
  todos: Todo[];
}
