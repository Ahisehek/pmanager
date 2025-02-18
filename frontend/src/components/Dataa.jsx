import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

function Dataa({ elem, onDelete, onUpdate }) {
  const { _id, url, username, pass } = elem;
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    url: url,
    username: username,
    pass: pass,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(_id, formData); // Send the update request
    setEditMode(false); // Exit edit mode
  };

  const handleCancel = () => {
    setFormData({ url, username, pass }); // Reset to initial values
    setEditMode(false); // Exit edit mode
  };

  return (
    <div className="grid grid-cols-5 gap-4 ml-[330px] border-x-2 border-purple-700 font-bold bg-purple-200 h-[30px] w-[55%] rounded-lg text-2xl my-1">
      {editMode ? (
        <>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            className="text-center border rounded-lg"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="text-center border rounded-lg"
          />
          <input
            type="text"
            name="pass"
            value={formData.pass}
            onChange={handleInputChange}
            className="text-center border rounded-lg"
          />
          <div className="pl-24 text-purple-600 flex gap-4">
            <button onClick={handleUpdate} className="text-green-500">
              Save
            </button>
            <button onClick={handleCancel} className="text-red-500">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">{url}</div>
          <div className="text-center border-purple-400 border-x-2">{username}</div>
          <div className="text-center">{pass}</div>
          <div className="pl-24 border-purple-400 border-x-2 text-purple-600">
            <button onClick={() => onDelete(_id)}>
              <MdDeleteOutline />
            </button>
          </div>
          <div className="pl-24 text-purple-600">
            <button onClick={() => setEditMode(true)}>
              <GrUpdate />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Dataa;
