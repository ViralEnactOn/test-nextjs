"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteUserData, UpdateUserData, GetUsersApi } from "../callapi/api";

const Todo = ({ data }) => {
  const [dataResponse, setDataResponse] = useState(data.data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const numberRegex = /^\d+$/;
  const notify = () => toast.success("User updated!");

  // Fetch all data
  const handleFetchData = async () => {
    const responseData = await GetUsersApi();
    if (responseData.status === 200) {
      setDataResponse(responseData.data);
    }
  };

  // Delete record
  const handleDeleteRecord = async (id) => {
    const responseData = await DeleteUserData(id);
    if (responseData.status === 200) {
      await handleFetchData();
      toast.success("User deleted!");
    }
  };

  // Reset
  const handleReset = () => {
    setSelectedRow(null);
    setAgeError("");
    setNameError("");
  };

  // Update record
  const handleUpdateRecord = async (id) => {
    dataResponse.map(async (item) => {
      if (item.id === id) {
        if (item.name.length === 0) {
          setNameError("Name cannot empty.");
          return;
        } else {
          setNameError("");
        }
        if (numberRegex.test(item.age) === true) {
          setAgeError("");
          const responseData = await UpdateUserData(id, item.name, item.age);
          if (responseData.status === 200) {
            setSelectedRow(null);
            await handleFetchData();
            notify();
          }
        } else {
          setAgeError("Enter numbers only.");
        }
      }
    });
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
      <tbody>
        {dataResponse.length !== 0 &&
          dataResponse.map((data, index) => {
            return (
              <tr
                key={index}
                className="bg-white border border-gray-400 text-center"
              >
                <td className="p-2 h-20 self-center">
                  {selectedRow === index ? (
                    <input
                      type="text"
                      className="rounded-lg p-3 bg-gray-300"
                      value={data.name}
                      onChange={(e) =>
                        setDataResponse((prevData) => {
                          const newData = [...prevData];
                          newData[index].name = e.target.value;
                          return newData;
                        })
                      }
                    />
                  ) : (
                    data.name
                  )}
                  {nameError && selectedRow === index && (
                    <div className="text-red-700">{nameError}</div>
                  )}
                </td>
                <td className="p-2 h-20 self-center">
                  {selectedRow === index ? (
                    <input
                      type="text"
                      pattern="^[0-9]*$"
                      className="rounded-lg p-3 bg-gray-300"
                      value={data.age}
                      onChange={(e) =>
                        setDataResponse((prevData) => {
                          const newData = [...prevData];
                          newData[index].age = e.target.value;
                          return newData;
                        })
                      }
                    />
                  ) : (
                    data.age
                  )}
                  {ageError && selectedRow === index && (
                    <div className="text-red-700">{ageError}</div>
                  )}
                </td>
                <td className="p-2 ">
                  {selectedRow === index ? (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleUpdateRecord(data.id)}
                      >
                        Confirm
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-8"
                        onClick={() => {
                          setSelectedRow(null);
                          // handleFetchData();
                          handleReset();
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setSelectedRow(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td className="p-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteRecord(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default Todo;
