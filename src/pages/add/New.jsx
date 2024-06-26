/* eslint-disable react/prop-types */
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import image from "../../assets/noimg.jpeg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";

export default function New(props) {
  const [file, setFile] = useState("");
  // const [formData, updateFormData] = React.useState(initialFormData)

  function handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();
  }

  return (
    <div className="new">
      <div className="addContainer">
        <Navbar />
        <div className="top">
          <h1>{props.title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : image} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                Image:{" "}
                <label htmlFor="file">
                  <AddAPhotoIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {props.inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
