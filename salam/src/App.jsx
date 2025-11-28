import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Login from "./pages/login";
import NotLoggedIn from "./privateRoutes/NotLoggedIn";
import LoggedIn from "./privateRoutes/LoggedIn";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedIn />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
      <Route element={<NotLoggedIn />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
