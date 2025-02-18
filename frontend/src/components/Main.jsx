import { useState, useEffect } from "react";
import Dataa from "./Dataa";

function Main() {
  const [form, setForm] = useState({
    url: "",
    username: "",
    pass: "",
  });
  const [data, setData] = useState([]);

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/passwords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const newData = await response.json();
    setData([...data, newData]);

    setForm({
      url: "",
      username: "",
      pass: "",
    });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/delete/${id}`, {
        method: "DELETE",
      });

      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3000/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const updatedItem = await response.json();
      setData(data.map((item) => (item._id === id ? updatedItem : item)));
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="flex justify-center text-4xl mt-8">
          <span className="font-bold text-purple-600">Pass</span>
          <span className="font-bold text-black">OP</span>
        </div>
        <p className="text-purple-600 text-3xl text-center font-bold">Your own Password Manager</p>

        <div className="ml-[330px] space-y-6 w-[55%]">
          <input
            value={form.url}
            onChange={handleChanges}
            className="w-full p-2 outline-none font-bold text-2xl"
            type="text"
            name="url"
            placeholder="Enter URL"
          />
          <input
            value={form.username}
            onChange={handleChanges}
            className="w-full p-2 outline-none font-bold text-2xl"
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            value={form.pass}
            onChange={handleChanges}
            className="w-full p-2 outline-none font-bold text-2xl"
            type="text"
            name="pass"
            placeholder="Enter Password"
          />
          <div className="flex justify-center mt-5">
            <button className="font-bold w-26 px-3 mb-7 rounded-2xl p-1 bg-purple-200 flex justify-center items-center h-8 text-sm">
              Add Password
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-5 gap-4 ml-[330px] font-bold text-purple-600 border-black border-x-2 border-t-2 h-[30px] w-[55%] rounded-lg text-2xl my-1">
        <div className="text-center">Url</div>
        <div className="text-center">Username</div>
        <div className="text-center">Password</div>
        <div className="text-center">Delete</div>
        <div className="text-center">Update</div>
      </div>

      {data.map((elem) => (
        <Dataa key={elem._id} elem={elem} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </>
  );
}

export default Main;
