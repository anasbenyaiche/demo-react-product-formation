import { Route, Routes } from "react-router";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Navbar from "./components/layout/Navbar";

// JSX
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />}></Route>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default App;
