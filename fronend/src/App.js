import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import Resource from "./pages/Resource";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useGlobalStore } from "./store";
import Mentorship from "./pages/Mentorship";
import Networking from "./pages/Networking";

function RequireAuth({ children }) {
  const isAuthenticated = useGlobalStore().user;

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" replace />;
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: (
      <RequireAuth>
        <Jobs />
      </RequireAuth>
    ),
  },
  {
    path: "/resources",
    element: (
      <RequireAuth>
        <Resource />
      </RequireAuth>
    ),
  },
  {
    path: "/mentorship",
    element: (
      <RequireAuth>
        <Mentorship />
      </RequireAuth>
    ),
  },
  {
    path: "/network",
    element: (
      <RequireAuth>
        <Networking />
      </RequireAuth>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
