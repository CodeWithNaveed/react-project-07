import { useState } from "react";
import "./App.css";

const SplitBill = ({ friends, selectedFriend }) => {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [otherExpense, setOtherExpense] = useState(0);
  const [billPaidBy, setBillPaidBy] = useState("You");

  const splitHandler = () => {
    console.log(friends.filter((frnd) => frnd.name === selectedFriend.name));
    console.log(billValue);
    console.log(myExpense);
    console.log(otherExpense);
    console.log(billPaidBy);
  };

  return (
    <div className="splitBill">
      <Heading selectedFriend={selectedFriend} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ParaBill />
        <input
          onChange={(e) => setBillValue(e.target.value)}
          type="text"
          placeholder="Bill Value"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>🕴️ Your Expense</p>
        <input
          onChange={(e) => setMyExpense(e.target.value)}
          type="text"
          placeholder="Your Expense"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>🧑‍🤝‍🧑 {selectedFriend.name} Expense</p>
        <input
          onChange={(e) => setOtherExpense(e.target.value)}
          type="text"
          placeholder={selectedFriend.name + " expense"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>🤑 Who is paying the Bill??</p>
        <select onChange={(e) => setBillPaidBy(e.target.value)}>
          <option>You</option>
          <option>{selectedFriend.name}</option>
        </select>
      </div>
      <button onClick={splitHandler}>Split Bill</button>
    </div>
  );
};

export default SplitBill;

const Heading = ({selectedFriend}) => {
  return <h1>Split a bill with {selectedFriend.name}</h1>;
};

const ParaBill = () => {
  return <p>💰 Bill Value</p>
}