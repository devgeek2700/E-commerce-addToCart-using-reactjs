import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login';
import Card from './components/Card';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Login/>)
      },
  {
    path: "/card",
    element: (<Card/>)
      },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
