"use server";
import axios from "axios";
import { API_URL } from "../config/config";

// Insert Record
export async function InsertData(name, age) {
  try {
    const res = await fetch(API_URL + "insertuserdata", {
      method: "POST",
      body: JSON.stringify({ name: name, age: age }),
    });
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}

// Get All Record
export async function GetUsersApi() {
  try {
    const res = await axios.get(API_URL + "getuserdata");
    return res.data;
  } catch (err) {
    return err;
  }
}

// Delete Record
export async function DeleteUserData(id) {
  console.log(id);
  try {
    const res = await fetch(API_URL + "deleteuserdata", {
      method: "POST",
      body: JSON.stringify({ id: id }),
    });
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}

// Update Record
export async function UpdateUserData(id, name, age) {
  try {
    const res = await fetch(API_URL + "updateuserdata", {
      method: "POST",
      body: JSON.stringify({ id: id, name: name, age: age }),
    });
    const response = await res.json();
    return response;
  } catch (err) {
    return err;
  }
}
