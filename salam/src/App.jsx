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
import FriendPage from "./pages/friendsPage";
import "swiper/css";
import CreatePostModal from "./components/homeComponents/PostHome/createPostModal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedIn />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<FriendPage />} />
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
      <CreatePostModal />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
