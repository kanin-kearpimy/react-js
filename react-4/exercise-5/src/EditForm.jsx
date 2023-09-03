// EditForm.js
import React from "react";

function EditForm() {
  return (
    <div className="edit-form">
      <h2>Edit ID Card Data</h2>
      <label htmlFor="nameInput">Name:</label>
      <input type="text" id="nameInput" name="name" />

      <label htmlFor="dobInput">Date of Birth:</label>
      <input type="date" id="dobInput" name="dob" />

      <label htmlFor="expirationInput">Expiration Date:</label>
      <input type="date" id="expirationInput" name="expiration" />

      <label htmlFor="licenseInput">License No:</label>
      <input type="text" id="licenseInput" name="license" />

      <label htmlFor="stateInput">State:</label>
      <input type="text" id="stateInput" name="state" />

      <button type="button" id="updateButton">
        Update
      </button>
    </div>
  );
}

export default EditForm;
