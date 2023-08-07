"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InsertData } from "../callapi/api";
function UserForm() {
  const numberRegex = /^\d+$/;
  const [disableButton, setDisableButton] = useState(false);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [details, setDetails] = useState({
    name: {
      id: "name",
      value: "",
    },
    age: {
      id: "age",
      value: "",
    },
  });

  const handleOnChange = (event) => {
    const { id, value } = event.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: { ...prevDetails[id], value },
    }));
  };

  const handleSubmit = async () => {
    if (details.name.value.length === 0) {
      setNameError("Name cannot empty.");
      return;
    } else {
      setNameError("");
    }

    if (details.age.value.length === 0) {
      setAgeError("Age cannot empty.");
      return;
    } else if (numberRegex.test(details.age.value) !== true) {
      setAgeError("Enter numbers empty.");
      return;
    } else {
      setAgeError("");
    }
    setDisableButton(true);
    const responseData = await InsertData(
      details.name.value,
      details.age.value
    );
    if (responseData.status === 200) {
      toast.success("User inserted!");
      setDisableButton(false);
      setDetails({
        name: {
          id: "name",
          value: "",
        },
        age: {
          id: "age",
          value: "",
        },
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mt-10">Name</div>
      <div className="mt-1">
        <input
          id="name"
          type="text"
          className="rounded-lg p-3"
          placeholder="Enter your name"
          value={details.name.value}
          onChange={handleOnChange}
          disabled={disableButton === true}
        />
        {nameError && <div className="text-red-700">{nameError}</div>}
      </div>
      <div className="mt-5">Age</div>
      <div className="mt-1">
        <input
          id="age"
          type="text"
          className="rounded-lg p-3"
          placeholder="Enter your age"
          value={details.age.value}
          onChange={handleOnChange}
          disabled={disableButton === true}
        />
        {ageError && <div className="text-red-700">{ageError}</div>}
      </div>
      <div className="mt-5 flex justify-center" onClick={() => handleSubmit()}>
        <button
          className="bg-cyan-300 p-2 rounded-lg"
          type="submit"
          disabled={disableButton === true}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default UserForm;
