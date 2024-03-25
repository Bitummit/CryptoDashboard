import "./addUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import image from "../../assets/noimg.jpeg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function AddUser() {
  return (
    <div className="addUser">
      <Sidebar />
      <div className="addContainer">
        <Navbar />
        <div className="top">
          <h1>Add User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                Image:{" "}
                <label htmlFor="file">
                  <AddAPhotoIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="john_doe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+7 911 1111112" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Russia" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
