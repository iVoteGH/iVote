import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HOC from "./HOC";

const Msg = () => (
  <div> Congrats! Your vote has been registered! 😀 🗳️ 🦅 🗽 🎉 🔔 🇺🇸 😎 </div>
);

const Waiting = props => {
  return (
    <div>
      <p>
        Thank you for selecting your candidate! Please checkout using MetaMask
      </p>
      <p>
        When you have finshed voting{" "}
        <button
          onClick={() => {
            toast.success(<Msg />);
          }}
        >
          {" "}
          <Link to="/results">Click to View Results</Link>
        </button>
      </p>
      <ToastContainer autoClose={2500} />
    </div>
  );
};

export default HOC(Waiting);
