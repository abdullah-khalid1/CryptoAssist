import millify from "millify";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CryptoDesignItem.css";

const CryptoDesignItem = ({
  title,
  change,
  price,
  marketCap,
  imgUrl,
  currencyID,
}) => {
  const navigate = useNavigate();
  return (
    <div
      class="card"
      onClick={() => navigate("/crypto", { state: { id: currencyID } })}
    >
      <div class="card-header">
        <img src={imgUrl} alt="rover" />
      </div>
      <div class="card-body">
        <span class="tag tag-teal">PRICE: {millify(price)}</span>
        <h4>{title}</h4>
        <p>Market Cap: {millify(marketCap)}</p>
      </div>
    </div>
  );
};

export default CryptoDesignItem;
