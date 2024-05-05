import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [open, setOpen] = useState(false);
  const [openpd, setOpenpd] = useState(false);
  const [openpg, setOpenpg] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    offerPrice: "",
    videoLink: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async () => {
    try {
      const config = {
        url: "/course/addcourse",
        baseURL: "http://localhost:8000/api",
        method: "post",
        header: { "Content-type": "application/json" },
        data: {
          title: formData.title,
          price: formData.price,
          offerPrice: formData.offerPrice,
          videoLink: formData.videoLink,
        },
      };

      let response = await axios(config);
      console.log(response, "response");
      if (response.status === 200) {
        alert("Course added Succesfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="form-container">
      <div className="form-input">
        <label htmlFor="title">Course Title</label>
        <input
          id="title"
          name="title"
          type="text"
          autoComplete="off"
          required
          value={formData.title}
          onChange={handleInputChange}
        />
        {formErrors.title && (
          <p className="error-message">{formErrors.title}</p>
        )}
      </div>

      <div className="form-input">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          autoComplete="off"
          required
          value={formData.price}
          onChange={handleInputChange}
        />
        {formErrors.price && (
          <p className="error-message">{formErrors.price}</p>
        )}
      </div>

      <div className="form-input">
        <label htmlFor="offerPrice">Offer Price</label>
        <input
          id="offerPrice"
          name="offerPrice"
          type="number"
          autoComplete="off"
          required
          value={formData.offerPrice}
          onChange={handleInputChange}
        />
        {formErrors.offerPrice && (
          <p className="error-message">{formErrors.offerPrice}</p>
        )}
      </div>

      <div className="form-input">
        <label htmlFor="videoLink">Video Link</label>
        <input
          id="videoLink"
          name="videoLink"
          type="url"
          autoComplete="off"
          required
          value={formData.videoLink}
          onChange={handleInputChange}
        />
        {formErrors.videoLink && (
          <p className="error-message">{formErrors.videoLink}</p>
        )}
      </div>

      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );
}

export default App;
