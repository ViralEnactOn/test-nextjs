/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import axios from "axios";
import { API_URL } from "../config/config";
import Link from "next/link";
import Todo from "./Todo";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { DeleteUserData, GetUsersApi, UpdateUserData } from "../callapi/api";
import { redirect } from "next/navigation";

async function page() {
  // const [dataResponse, setDataResponse] = useState([]);
  // const [selectedRow, setSelectedRow] = useState(null);
  // const [nameError, setNameError] = useState("");
  // const [ageError, setAgeError] = useState("");
  // const numberRegex = /^\d+$/;
  // const notify = () => toast.success("User updated!");

  // Fetch all data

  // useEffect(() => {
  //   handleFetchData();
  //   return () => {};
  // }, []);

  // // Delete record
  // const handleDeleteRecord = async (id) => {
  //   const responseData = await DeleteUserData(id);
  //   if (responseData.status === 200) {
  //     await handleFetchData();
  //     toast.success("User deleted!");
  //   }
  // };

  // // Reset
  // const handleReset = () => {
  //   setSelectedRow(null);
  //   setAgeError("");
  //   setNameError("");
  // };

  // // Update record
  // const handleUpdateRecord = async (id) => {
  //   dataResponse.map(async (item) => {
  //     if (item.id === id) {
  //       if (item.name.length === 0) {
  //         setNameError("Name cannot empty.");
  //         return;
  //       } else {
  //         setNameError("");
  //       }
  //       if (numberRegex.test(item.age) === true) {
  //         setAgeError("");
  //         const responseData = await UpdateUserData(id, item.name, item.age);
  //         if (responseData.status === 200) {
  //           setSelectedRow(null);
  //           await handleFetchData();
  //           notify();
  //         }
  //       } else {
  //         setAgeError("Enter numbers only.");
  //       }
  //     }
  //   });
  // };
  const responseData = await GetUsersApi();
  if (true) redirect("/");
  return (
    <>
      {/* <ToastContainer
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
      /> */}
      <div className="flex  justify-center mt-10">
        <Link className="bg-cyan-300 p-2 rounded-lg" href="/">
          Add new record
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <table className="self-center border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <td className="p-2 w-60  text-center">Name</td>
              <td className="p-2  w-60 text-center">Age</td>
              <td className="p-2  w-60 text-center">Edit</td>
              <td className="p-2  w-60 text-center">Delete</td>
            </tr>
          </thead>
          {/* <tbody>
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
                              handleFetchData();
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
          </tbody> */}
        </table>
        <Todo data={responseData} />
      </div>
    </>
  );
}

export default page;
