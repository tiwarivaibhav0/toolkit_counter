import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const changeHandler = (e) => {
    if (Number(e.target.value)) dispatch(incrementByAmount(amount));
    else dispatch(decrementByAmount(amount));
  };
  return (
    <div>
      <div className="top">
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>

        <span>{count}</span>

        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
      <div className="bottom">
        <input
          placeholder="Enter Value"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {amount && (
          <select onClick={(e) => changeHandler(e)}>
            <option selected disabled>
              Choose Action
            </option>
            <option value="1">Increase by {amount}</option>
            <option value="0">Decrease by {amount}</option>
          </select>
        )}
      </div>
    </div>
  );
}
