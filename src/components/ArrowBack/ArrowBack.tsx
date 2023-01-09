import React from "react";
import { ArrowLeft } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Arrow } from "./style";

export const ArrowBack = () => {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate(-1);
  };

  return (
    <Arrow>
      <ArrowLeft onClick={handleArrow} />
    </Arrow>
  );
};
