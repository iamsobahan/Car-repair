import React from "react";
import { useParams } from "react-router";

const Book = () => {      
  const { serviceId } = useParams();
  return (
    <div>
      <h1>This is booking page {serviceId}</h1>
    </div>
  );
};

export default Book;
