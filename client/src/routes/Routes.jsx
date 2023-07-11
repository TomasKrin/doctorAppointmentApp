import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";

import { routes } from "../routes/consts";

const Routes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
    </RoutesWrapper>
  );
};

export default Routes;
