import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };

    getData();
  }, []);

  return (
    <div className="container">
      {members.map((member) => (
        <Card
          age={member.age}
          name={member.name}
          id={member.id}
          status={member.status}
          weight={member.weight}
        />
      ))}
    </div>
  );
};

export default App;
