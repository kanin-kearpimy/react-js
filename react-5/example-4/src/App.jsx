import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

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

  const updateData = async (id, name, age, weight, status) => {
    const response = await axios.put(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        id: id,
        name: name,
        age: age,
        weight: weight,
        status: status,
      }
    );

    console.log(response);
  };

  return (
    <div className="container">
      <Form submitHandler={updateData} />
      <div className="card-container">
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
    </div>
  );
};

export default App;
