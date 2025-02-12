import { useState, useEffect } from "react";
import Dataa from "./Dataa";

function Main() {
  const [form, setform] = useState({
    url: "",
    username: "",
    pass: "",
  });
  const [data, setdata] = useState([]);

  const handlechanges = (e) => {
    const { value, name } = e.target

    setform({
      ...form,
      [name]:value
    })
  
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
    setdata([...data, newData]);
    console.log([...data, newData])

    //   setdata([...data, { 
    // ...form

    //  }]);

    setform({
      url:"",
      username:"",
      pass:"",
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <div className=" flex justify-center text-4xl mt-8">
          <span className="font-bold text-purple-600">
            <span></span>Pass
          </span>
          <span className="font-bold text-black">OP</span>
        </div>
        <p className="text-purple-600 text-3xl text-center font-bold">
          Your own Password Manager
        </p>

        <div className=" ml-[330px] space-y-6">
          <div className="border n border-purple-400 rounded-2xl overflow-hidden w-[70%] flex justify-center">
            <input
              value={form.url}
              onChange={handlechanges}
              className=" w-full p-2   outline-none font-bold text-2xl"
              type="text"
              name="url"
              id=""
              placeholder="Enter URL"
            />
          </div>
          <div>
            <div className="flex gap-1">
              <div className="border rounded-2xl overflow-hidden border-purple-400 w-[55%] flex justify-center">
                <input
                  value={form.username}
                  onChange={handlechanges}
                  className=" w-full p-2  outline-none font-bold text-2xl"
                  type="text"
                  name="username"
                  id=""
                  placeholder="Enter username"
                />
              </div>
              <div className="border border-purple-400 w-[180px] rounded-2xl overflow-hidden flex justify-center">
                <input
                  value={form.pass}
                  onChange={handlechanges}
                  className=" w-full  outline-none p-2 font-bold text-2xl"
                  type="text"
                  name="pass"
                  id=""
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className=" font-bold w-26 px-3 mb-7 rounded-2xl p-1 bg-purple-200 flex justify-center items-center h-8 text-sm">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>{" "}
            Add Password
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4 ml-[330px] font-bold text-purple-600 border-black border-x-2 border-t-2  h-[30px] w-[55%] rounded-lg text-2xl my-1">
        <div className="text-center">Url</div>
        <div className="text-center">Username</div>
        <div className="text-center">Password</div>
      </div>
      {data.map(function (elem, idx) {
        return <Dataa key={idx} elem={elem} />;
      })}
    </>
  );
}

export default Main;
