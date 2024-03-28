import { BottomIcon } from "../../components/BottomBar";
import { HeaderLogged, HeaderPage } from "../../components/header/HeaderLogged";
import Login from "../../pages/Auth/Login";
import Logout from "../../pages/Auth/Logout";
import Profile from "../../pages/Auth/Profile";
import SingIn from "../../pages/Auth/SingIn";
import Cart from "../../pages/DashBoard/Cart";
import Favorites from "../../pages/DashBoard/Favorites";
import Home from "../../pages/DashBoard/Home";
import Order from "../../pages/DashBoard/Order";
import ProductDescription from "../../pages/DashBoard/ProductDescription";
import SplashScreen from "../../pages/SplashScreen";
import TodoList from "../../pages/TodoList";
import { Colors } from "../themes";
import { StackType, TabType } from "./configs";
import { PATHS } from "./paths";

const headerLogged = HeaderLogged();

export const ScreensStack: StackType[] = [
  {
    name: PATHS.TODO_LIST,
    component: TodoList,
    options: { title: "Todo List" },
  },
  {
    name: PATHS.SPLASH_SCREEN,
    component: SplashScreen,
    options: { headerShown: false },
  },
  {
    name: PATHS.LOGIN,
    component: Login,
    options: {
      title: "Login",
      headerShown: false,
      statusBarStyle: "dark",
    },
  },
  {
    name: PATHS.LOGOUT,
    component: Logout,
    options: {
      title: "Logout",
      headerShown: false,
      statusBarStyle: "dark",
    },
  },
  {
    name: PATHS.SINGIN,
    component: SingIn,
    options: {
      title: "SingIn",
      headerShown: false,
      statusBarStyle: "dark",
    },
  },
  {
    name: PATHS.PROFILE,
    component: Profile,
    options: {
      title: "Profile",
      headerShown: false,
      statusBarStyle: "dark",
    },
  },
  {
    name: PATHS.PRODUCT_DESCRIPTION,
    component: ProductDescription,
    initialParams: { productId: "" },
    options: {
      ...HeaderPage,
    },
  },
  {
    name: PATHS.FAVORITES,
    component: Favorites,
    options: {
      title: "Favoritos",
      ...HeaderPage,
    },
  },
];

export const ScreenTab: TabType[] = [
  {
    name: PATHS.HOME,
    component: Home,
    options: {
      ...headerLogged.options,
      tabBarIcon: (props) => <BottomIcon icon={"home"} {...props} />,

      tabBarActiveTintColor: Colors.secundary,
      tabBarInactiveTintColor: Colors.neutral.medium,
      title: "Home",
    },
  },
  {
    name: PATHS.CART,
    component: Cart,
    options: {
      ...headerLogged.options,
      tabBarIcon: (props) => <BottomIcon icon={"shopping-bag"} {...props} />,
      tabBarActiveTintColor: Colors.secundary,
      tabBarInactiveTintColor: Colors.neutral.medium,

      title: "Car",
    },
  },
  {
    name: PATHS.ORDER,
    component: Order,
    options: {
      ...headerLogged.options,
      tabBarIcon: (props) => <BottomIcon icon={"list"} {...props} />,

      tabBarActiveTintColor: Colors.secundary,
      tabBarInactiveTintColor: Colors.neutral.medium,
      title: "Order",
    },
  },
];
