import React, { useEffect } from "react";
import "./About.css";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img from "../../img/myPic.png";
export default function About() {
  const navigate = useNavigate();
  const CallAboutPages = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(res);
      const textResponse = await res.text(); // Read the response body as text
      console.log("Raw response:", textResponse); // Log the raw response
      const data = await res.json();
      console.log(data);
      // if (!res.ok) {
      // Check if the response status is not OK (e.g., 401 Unauthorized)
      // console.log("Error status:", res.status);
      // throw new Error(textResponse); // Throw an error with the response body
      // }

      // const data = await res.json(); // Parse the response as JSON
      // console.log("Parsed data:", data);

      // Continue with your logic to handle the successful response
    } catch (err) {
      console.log("Error:", err);
      // navigate("/login");
    }
  };
  useEffect(() => {
    CallAboutPages();
  }, []);
  const details = [
    {
      dataName: "User ID",
      data: "0943281",
    },
    {
      dataName: "Name",
      data: "Abhishekh",
    },
    {
      dataName: "Email ID",
      data: "Avskd@gmail.com",
    },
    {
      dataName: "Phone No",
      data: "9834705",
    },
    {
      dataName: "Profession",
      data: "Developer",
    },
  ];
  return (
    <>
      <Container className="about-container ">
        <Card className="px-4 about-col bg-dark text-white">
          <form method="GET" className="about-form">
            <div className="row">
              <div className="col-md-4">
                <div className="img-conteiner">
                  <img src={img} alt="no_image" className="img-con" />
                </div>
              </div>
              <div className="col-md-6 left_container">
                <h5>Abhishekh Dubey</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS : <span>1/10</span>
                </p>

                <p>About</p>

                <hr className="about-nav-hr" />
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn "
                  value="edit "
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="my-links">
                    <a
                      href="https://www.youtube.com/channel/UCusuoYR_KRO6OjaZ8304bEQ"
                      target="_abhi"
                    >
                      youtube
                    </a>
                    <br />
                    <a
                      href="https://www.youtube.com/channel/UCusuoYR_KRO6OjaZ8304bEQ"
                      target="_abhi"
                    >
                      Instagram
                    </a>
                    <br />
                    <a
                      href="https://www.youtube.com/channel/UCusuoYR_KRO6OjaZ8304bEQ"
                      target="_abhi"
                    >
                      FaceBook
                    </a>
                    <br />
                    <a
                      href="https://www.youtube.com/channel/UCusuoYR_KRO6OjaZ8304bEQ"
                      target="_abhi"
                    >
                      LinkedIn
                    </a>
                    <br />
                  </div>
                </div>
                <div className="col-md-8 pl-5">
                  <div className="tab-content ptofile-tab" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="about"
                      role="tabpanel"
                      aria-labelledby="about-tab"
                    >
                      {details.map((item, index) => {
                        return (
                          <div className="row about-details " key={index}>
                            <div className="col-md-4">
                              <label>{item.dataName}</label>
                            </div>
                            <div className="col-md-6">
                              <p>{item.data}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div></div>
        </Card>
      </Container>
    </>
  );
}
