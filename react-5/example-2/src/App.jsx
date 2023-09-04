import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [member, setMember] = useState({
    id: "",
    name: "",
    age: "",
    weight: "",
    status: "",
  });

  const getDataById = async (id) => {
    const response = await axios.get(
      `https://jsd5-mock-backend.onrender.com/members/${id}`
    );
    if (response.status === 200 && response.data) {
      const data = response.data;
      setMember({ ...data });
    }
  };

  return (
    <div className="container">
      <select onChange={(ev) => getDataById(ev.target.value)}>
        <option value="cc9754c4-f619-4921-bf7e-8a4fc9714e7f">Mock Name</option>
        <option value="66a3f853-5c09-4412-a380-3cc1ebf08c9c">John Doe</option>
        <option value="64715e05-b45b-4aba-b6d2-d7a4f61ccf0a">
          Alice Smith
        </option>
        <option value="61ec7ef2-f2e5-460c-bfd0-c060a99d0f50">
          Jane Johnson
        </option>
        <option value="6b72fbe1-5c72-42bb-a25f-8d00cef7e88a">Bob Brown</option>
      </select>
      <Card
        id={member.id}
        name={member.name}
        age={member.age}
        weight={member.weight}
        status={member.status}
      />
    </div>
  );
};

export default App;
