import React from "react";
import IDCard from "./IDCard";
import EditForm from "./EditForm";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "12px" }}>
      <IDCard />
      <EditForm />
    </div>
  );
}

export default App;
