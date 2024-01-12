import React, { useState } from "react";
import "./CustomRadioButton.css";

const options = [
  { value: "productDetails", label: "Product Details" },
  { value: "additionalInformation", label: "Additional Information" },
  { value: "reviewsOfThisProduct", label: "Reviews of this product" },
  { value: "productLabels", label: "Product labels" },
  { value: "cmsTags", label: "CMS TAGS" },
];

const CustomRadioButton = ({ setSelectedValue, selectedValue }) => {
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="custom-radio-group">
      {options.map((option) => (
        <button
          key={option.value}
          className={`custom-radio-button ${
            selectedValue === option.value ? "selected" : ""
          }`}
          onClick={() => handleRadioChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CustomRadioButton;
