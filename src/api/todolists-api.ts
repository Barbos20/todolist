import axios from 'axios';

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': '3e51854b-77a6-47e2-a04b-6ed88b6914b4',
  },
};

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  ...settings,
});

export type TodolistType = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};
type ResponseType<D ={}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

export type TaskType = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: string;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};
type GetTasksResponse = {
  error: string | null;
  totalCount: number;
  items: TaskType[];
};

export const todolistsAPI = {
  getTodolists() {
    return instance.get<Array<TodolistType>>('todo-lists');
  },

  createTodolists(title: string) {
    return instance.post<
      ResponseType<{
        item: TodolistType;
      }>
    >('todo-lists', { title });
  },

  deleteTodolist(id: string) {
    return instance.delete<ResponseType>('todo-lists/' + id);
  },

  updateTodolist(id: string, title: string) {
    return instance.put<ResponseType>('todo-lists/' + id, {
      title,
    });
  },

  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(
      'todo-lists/' + todolistId + '/tasks'
    );
  },

  deleteTask(todolistId: string, taskId: string) {
      return instance.delete<ResponseType>('todo-lists/' + todolistId + '/tasks' + taskId)
  },
};
