import React from "react";

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  return (
    <div className="col-lg-3 col-sm-4 col-12">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{expertize}</h5>
    </div>
  );
};

export default Expert;
