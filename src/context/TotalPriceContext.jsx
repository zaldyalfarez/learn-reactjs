import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const TotalPriceContext = createContext();
const TotalPriceDispatchContext = createContext();

const TotalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOTAL_PRICE":
      return { grandTotal: action.payload.total };
    default:
      throw new Error("Unknown action: " + action.type);
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(TotalPriceReducer, {
    grandTotal: 0,
  });

  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

TotalPriceProvider.propTypes = {
  children: PropTypes.node,
};

export { TotalPriceContext, TotalPriceDispatchContext };
