import React from "react";
import IDCard from "./IDCard";
import EditForm from "./EditForm";
import validator from "validator";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "12px" }}>
      <IDCard />
      <EditForm />
    </div>
  );
}

export default App;
