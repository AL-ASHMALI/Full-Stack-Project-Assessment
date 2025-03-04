import React, { useState } from "react";
import AddNewVideo from "../Components/AddNewVideo";
import VideoCard from "../Components/VideoCard";

const AddVideoBtn = ({ addNewVideoFunction }) => {
  const [showForm, setShowForm] = useState(true);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="add-video-form-wrapper">
      <button onClick={handleClick} className="btn btn-outline-primary">
        Add a Video
      </button>

      {showForm ? <AddNewVideo addNewVideo={addNewVideoFunction} /> : <> </>}
    </div>
  );
};

export default AddVideoBtn;
