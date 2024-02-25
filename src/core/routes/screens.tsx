import TodoList from "../../pages/TodoList";
import { Routes } from "./routes";

export const Screens = [
  {
    name: Routes.HOME,
    component: TodoList,
    options: { title: "Todo List" },
  },
];
