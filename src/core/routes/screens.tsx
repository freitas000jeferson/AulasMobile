import { ComponentProps } from "react";
import Login from "../../pages/Auth/Login";
import TodoList from "../../pages/TodoList";
import { Paths } from "./paths";
import Stack from "./stack";

type ScreenType = ComponentProps<typeof Stack.Screen>;
export const Screens: ScreenType[] = [
  {
    name: Paths.TODO_LIST,
    component: TodoList,
    options: { title: "Todo List" },
  },
  {
    name: Paths.LOGIN,
    component: Login,
    options: {
      title: "Login",
      headerShown: false,
      statusBarStyle: "dark",
    },
  },
  {
    name: Paths.HOME,
    component: TodoList,
    options: { title: "Home" },
  },
];
