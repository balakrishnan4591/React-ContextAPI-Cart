import { useUserContext } from "../ContextProvider";

function Total() {
  const { cardAmount } = useUserContext();

  return (
    <>
      <header>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="card">
            <h1>TOTAL : {cardAmount.toFixed(2)}</h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Total;
