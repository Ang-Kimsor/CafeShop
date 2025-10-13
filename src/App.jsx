import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  MenuProduct,
  Detail,
  Category,
  About,
  Contact,
  Errorpage,
} from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";
import RootLayout from "./layout/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <MenuProduct /> },
      { path: "menu/detail/:nameurl", element: <Detail /> },
      { path: "menu/category/:category", element: <Category /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
function App() {
  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);
  return <RouterProvider router={router} />;
}
export default App;
