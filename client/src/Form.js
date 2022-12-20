import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ handleChange, formData }) => {
  const navigate = useNavigate();

  const [isAccessibleClicked, setIsAccessibleClicked] = useState(false);
  const [isGenderClicked, setIsGenderClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isGenderClicked &&
      isAccessibleClicked &&
      formData.name &&
      formData.lng &&
      formData.lat
    ) {
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
          window.location.reload(true);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  const handleSubmitClick = () => {
    if (
      !formData.name ||
      !formData.lng ||
      !formData.lat ||
      !isGenderClicked ||
      !isAccessibleClicked
    ) {
      window.alert(
        "Oops! Make sure you selected a point on the map and filled out every entry of the form."
      );
    }
  };

  return (
    <>
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <h2>Add bathroom</h2>
          <p>
            Click on the map, and fill out the form. Please put the name of the
            business or something easy to identify
          </p>
          <div>
            <span>name</span>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <Bathroom>
            <div>
              <label>is this bathroom accessible?</label>
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
          <Submit onClick={handleSubmitClick}>Submit</Submit>
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
    padding: 1% 0;
  }
  p {
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
`;

const Submit = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const Inputs = styled.div`
  display: flex;
  width: 41%;
`;

const Bathroom = styled.div``;

const Gender = styled.div``;

export default Form;
