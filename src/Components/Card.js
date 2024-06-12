import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useUserContext } from "../ContextProvider";

const Card = () => {
  const { products, cardAmount, setCardAmount, cardQuantity, setCardQuantity } =
    useUserContext();
  let a = 0;

  return (
    <>
      {products.map((product, i) => {
        const priceAfterDiscount = (
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2);

        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubTotal] = useState(
          (priceAfterDiscount * quantity).toFixed(2)
        );

        useEffect(() => {
          setSubTotal((priceAfterDiscount * quantity).toFixed(2));
        }, [quantity]);

        useEffect(() => {
          a = a + +subTotal;
          setCardAmount(a);
        }, []);

        const handleQuantitySub = (priceAfterDiscount, quantity) => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            setCardQuantity(cardQuantity - 1);
            a = cardAmount - +priceAfterDiscount;
            setCardAmount(a);
          }
        };

        const handleQuantityAdd = (i, priceAfterDiscount, quantity) => {
          if (products[i].stock > quantity) {
            setQuantity(quantity + 1);
            setCardQuantity(cardQuantity + 1);
            setCardAmount(cardAmount + +subTotal);
            console.log(a);
            a = cardAmount + +priceAfterDiscount;
            console.log(a);
            setCardAmount(a);
          }
        };
        const price = product.price;
        const Dprice = price * (product.discountPercentage / 100);

        return (
          <div className="col-md-12">
            <div
              className="card"
              style={{ width: "80%", borderRadius: "20px" }}
            >
              <div className="row g-0 ">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img
                    src={product.images}
                    className="img-fluid product-img"
                    alt="..."
                    style={{ borderRadius: "30px" }}
                  />
                </div>

                <div className="col-md-7 ">
                  <div className="row g-0">
                    <div className="col-md">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title">{product.title}</h5>
                          </div>
                          <div className="col">
                            <h5 className="card-title d-flex justify-content-end ">
                              ${product.price}
                            </h5>
                            <div className="row">
                              <div className="col d-flex align-items-center justify-content-end">
                                <div>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      handleQuantitySub(
                                        priceAfterDiscount,
                                        quantity
                                      )
                                    }
                                  >
                                    <strong>-</strong>
                                  </button>
                                  <span> {quantity} </span>
                                  <button
                                    className="btn btn-success"
                                    onClick={() =>
                                      handleQuantityAdd(
                                        i,
                                        priceAfterDiscount,
                                        quantity
                                      )
                                    }
                                  >
                                    <strong>+</strong>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">
                              <b>Brand : </b>
                              {product.brand}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">{product.description}</p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>
                        <div className="row">
                          <div className="col d-flex justify-content-end"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 p-4 subtotal">
                    {/* <div className="col "> */}
                    <div className="row">
                      <div className="card-title col">Price:</div>
                      <div className="card-title col text-end">${price}</div>
                    </div>
                    <div className="row">
                      <div className="card-title col text-success">
                        Discount Amount :
                      </div>
                      <div className="card-title col text-end text-success">
                        ${Math.round(price - (price - Dprice))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="card-title col d-flex align-items-center">
                        SUB TOTAL :
                      </div>
                      <div className="card-title col text-end fs-4 fw-normal">
                        ${subTotal}
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
