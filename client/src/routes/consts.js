import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

export const HOME_PATH = `/`;
export const REGISTER_PATH = `${HOME_PATH}register`;

export const routes = [
  { path: HOME_PATH, Component: Home },
  { path: REGISTER_PATH, Component: Register },
];
