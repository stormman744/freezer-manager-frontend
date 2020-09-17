import React, { useEffect } from "react";
import "./Product.css";
import { formatDate } from "../../utils/formatDate";
import { fetchUnitById } from "../../store/actions/unitActions";
import { useDispatch, useSelector } from "react-redux";

export const Product = ({
  productName = "",
  productAmount = "",
  productUnitId = -1,
  productExpiration = "",
}) => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state?.unit?.data);

  useEffect(() => {
    dispatch(fetchUnitById(productUnitId));
  }, [dispatch, productUnitId]);

  return (
    <div className="Product">
      <div className="Product__name">{productName}</div>
      <div className="Product__amount">{productAmount + unit}</div>
      <div className="Product__expiration">
        {formatDate(productExpiration, navigator.language)}
      </div>
    </div>
  );
};
