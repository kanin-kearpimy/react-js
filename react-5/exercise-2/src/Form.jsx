import { useState } from "react";

const Form = ({ submitHandler }) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [status, setStatus] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="unique identifier"
        value={id}
        onChange={(ev) => setId(ev.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(ev) => setAge(ev.target.value)}
      />
      <input
        type="text"
        placeholder="weight"
        value={weight}
        onChange={(ev) => setWeight(ev.target.value)}
      />
      <input
        type="text"
        placeholder="status"
        value={status}
        onChange={(ev) => setStatus(ev.target.value)}
      />
      <button onClick={() => submitHandler(id, name, age, weight, status)}>
        Submit
      </button>
    </div>
  );
};

export default Form;
