
import Navbar from "./navigation/Navigation";
import Home from "./pages/Home";
import { createBrowserRouter , RouterProvider, Route } from "react-router-dom";
import Hero from "./assets/herosection/Hero";
import Faetures from "./assets/Faetures/Faetures";                      
import Recipe from "./recipesection/Recipe";
import Gallery from "./gellery/Gallery";
import Subscriber from "./subscriberpart/Subscriber";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Hero />,
    },
    {
      path: "/Features",
      element: <Faetures />,
    },
    {
      path: "/recipes",
      element: <Recipe />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/subscriber",
      element: <Subscriber />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
