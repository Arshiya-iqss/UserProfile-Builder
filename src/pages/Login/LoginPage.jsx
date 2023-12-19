import React, { useState } from "react";
import "./LoginPageStyles.scss";
import Logo from "../../components/Logo/Logo";
import Profile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [img, setImg] = useState(null);
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [facebook, setFacebook] = useState();
  const [dribble, setDribble] = useState();
  const [linkedIn, setLinkedIn] = useState();
  const [github, setGithub] = useState();
  const [biography, SetBiography] = useState();

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImg(base64String);
        // console.log(file)
      };


      reader.readAsDataURL(file);
    }
  };

  const handleUserDataChange = (e) => {
    e.preventDefault();
    if (img !== null) {
      const userData = {
        img,
        name,
        username,
        facebook,
        dribble,
        linkedIn,
        github,
        biography,
      };
      onUserDataChange(userData);
      console.log(userData);
    }
    else {
      alert("Please choose an image before proceeding further");
      return;
    }
  }

  const onUserDataChange = (userData) => {
    navigate("/dashboard", { state: userData });
  };

  return (
    <>
      <Logo />
      <form onSubmit={(e) => handleUserDataChange(e)}>
        <div className="mainSection">
          <div className="left-section">
            <div className="content">
              <label className="fileUpload" htmlFor="myFileInput">
                {img ? (
                  <img
                    className="uploadImage"
                    src={img && img}
                    alt="Upload Image"
                  />
                ) : (
                  <img
                    className="uploadImagePlaceholder"
                    src={Profile}
                    alt="Upload Image"
                  />
                )}
              </label>
              <input
                onChange={handleFileChange}
                id="myFileInput"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                hidden
              />

            </div>
          </div>
          <div className="right-section">
            <div className="title">
              <h1>MAKE YOUR PROFILE</h1>
              <p>Fill in all the details to generate your profile</p>
            </div>
            <div className="login-details">

              <div className="name">
                <div className="name-id">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="name-id">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    id="username"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="social">
                <div className="social-links">
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    type="url"
                    placeholder="https://www.facebook.com/profile"
                    id="facebook"
                    required
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </div>
                <div className="social-links">
                  <label htmlFor="dribble">Dribble</label>
                  <input
                    type="url"
                    placeholder="https://dribbble.com/profile"
                    id="dribble"
                    required
                    onChange={(e) => setDribble(e.target.value)}
                  />
                </div>
                <div className="social-links">
                  <label htmlFor="linkedIn">LinkedIn</label>
                  <input
                    type="url"
                    placeholder="https://www.linkedIn.com/profile"
                    id="linkedIn"
                    required
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                </div>
                <div className="social-links">
                  <label htmlFor="github">Github</label>
                  <input
                    type="url"
                    placeholder="https://www.github.com/profile"
                    id="github"
                    required
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>
              </div>
              <div className="bio">
                <label htmlFor="biography">Bio</label>
                <input
                  type="text"
                  placeholder="Enter your biography"
                  id="biography"
                  required
                  onChange={(e) => SetBiography(e.target.value)}
                />
              </div>
              <div className="button">
                <input type="submit" />
              </div>

            </div>
          </div>

        </div >
      </form>
    </>
  );
}

export default LoginPage;
