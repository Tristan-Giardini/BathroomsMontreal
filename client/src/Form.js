import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isAccessibleClicked, setIsAccessibleClicked] = useState(false);
  const [isGenderClicked, setIsGenderClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-bathroom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.alert("Bathroom added!");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitClick = () => {
    if (
      !formData.name ||
      !formData.longitude ||
      !formData.latitude ||
      !isGenderClicked ||
      !isAccessibleClicked
    ) {
      window.alert(
        "please fill out every entry of the form before submitting!"
      );
    }
  };

  return (
    <>
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <div>
            <span>name</span>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div>
            <label>longitude</label>
            <input type="text" name="longitude" onChange={handleChange} />
          </div>
          <div>
            <label>latitude</label>
            <input type="text" name="latitude" onChange={handleChange} />
          </div>
          <Bathroom>
            <div>
              <label>is bathroom accessible?</label>
            </div>
            <Inputs>
              <input
                type="radio"
                name="accessible"
                value="true"
                onChange={handleChange}
                onClick={() => setIsAccessibleClicked(true)}
              />
              <label>yes</label>
              <input
                type="radio"
                name="accessible"
                value="false"
                onChange={handleChange}
                onClick={() => setIsAccessibleClicked(true)}
              />
              <label>no</label>
            </Inputs>
          </Bathroom>
          <Gender>
            <div>
              <label>are they gendered?</label>
            </div>
            <Inputs>
              <input
                type="radio"
                name="gendered"
                value="true"
                onChange={handleChange}
                onClick={() => setIsGenderClicked(true)}
              />
              <label>yes</label>
              <input
                type="radio"
                name="gendered"
                value="false"
                onChange={handleChange}
                onClick={() => setIsGenderClicked(true)}
              />
              <label>no</label>
            </Inputs>
          </Gender>
          <button onClick={handleSubmitClick}>Submit</button>
        </form>
      </FormDiv>
    </>
  );
};

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 65%;
    margin: 3%;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 1%;
  }
`;

const Inputs = styled.div`
  display: flex;
  width: 41%;
`;

const Bathroom = styled.div``;

const Gender = styled.div``;

export default Form;
