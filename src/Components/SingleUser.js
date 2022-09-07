import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

const SingleUser = () => {
  const { loading, products } = useFetch("https://dummyjson.com/users");
  const users = products.users;
  const { userId } = useParams();
  let singleUser;
  if (!loading) {
    singleUser = users.find((data) => data.id === parseInt(userId));
    console.log(singleUser);
  }

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div>
          <img src={singleUser.image} alt={singleUser.firstName} />
          <p>{singleUser.firstName}</p>
          <p>{singleUser.lastName}</p>
          <p>{singleUser.age}</p>
          <p>{singleUser.email}</p>
          <p>{singleUser.phone}</p>
          <p>{singleUser.ssn}</p>
          <p>{singleUser.ip}</p>
          <p>{singleUser.address.address}</p>
          <p>{singleUser.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
