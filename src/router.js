import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import ErrorPage from "./components/Pages/Error/ErrorPage";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Account from "./components/Pages/Account/Account";
import Projects from "./components/Pages/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
console.log("Router Config Loaded:", router);

export default router;
