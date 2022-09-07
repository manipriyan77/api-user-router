import "./App.css";
import Home from "./Components/Home";
import SingleUser from "./Components/SingleUser";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "./Components/useFetch";

const url = "https://dummyjson.com/users";

function App() {
  const { loading, products } = useFetch(url);
  const users = products.users;
  return (
    <Routes>
      <Route path="/" element={<Home users={users} loading={loading} />} />
      <Route path="/:userId" element={<SingleUser />} />
    </Routes>
  );
}

export default App;
