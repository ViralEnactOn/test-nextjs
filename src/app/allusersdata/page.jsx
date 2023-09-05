/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import Link from "next/link";
import Todo from "./Todo";
import { GetUsersApi } from "../callapi/api";

async function page() {
  const responseData = await GetUsersApi();
  return (
    <>
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
          {responseData.length !== 0 && <Todo data={responseData} />}
        </table>
      </div>
    </>
  );
}

export default page;
