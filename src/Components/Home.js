import { Link } from "react-router-dom";
// import users from "../Users";
import { useFetch } from "./useFetch";

const url = "https://dummyjson.com/users";

const Home = () => {
  const { loading, products } = useFetch(url);
  const users = products.users;
  return (
    <div className="main-container">
      {loading ? (
        <h2>"Loading...."</h2>
      ) : (
        users.map((user) => {
          return (
            <p key={user.id}>
              {user.firstName}
              <Link to={`/${user.id}`}>more info</Link>
            </p>
          );
        })
      )}
    </div>
  );
};

export default Home;
