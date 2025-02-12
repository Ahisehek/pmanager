import React from "react";

function Dataa(props) {
  const {url,username,pass}=props.elem;
  return (
    <>

   
    <div className="grid grid-cols-3 gap-4 ml-[330px] border-x-2 border-purple-700 font-bold bg-purple-200 h-[30px] w-[55%] rounded-lg text-2xl my-1">
        <div className="text-center">{url}</div>
        <div className="text-center">{username}</div>
        <div className="text-center">{pass}</div>
      </div>
      
    </>
  );
}

export default Dataa;
