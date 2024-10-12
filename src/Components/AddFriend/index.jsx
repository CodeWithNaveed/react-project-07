import { useState } from "react";
import "./App.css";

const AddFriend = ({ friends, setFriends }) => {
  const [name, setName] = useState("");
  const [img, setImage] = useState("");

  const addHandler = () => {
    console.log(name, img);
    const friendsCopy = [...friends];
    friendsCopy.push({
      name: name,
      img: img,
      payment: 0,
    });
    setFriends(friendsCopy);
    setName("");
    setImage("");
  };

  return (
    < div className="addFriend">
      <div className="input">
        <h4>👬 Friend name</h4>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter name"
          type="text"
        />
      </div>

      <div className="input">
        <h4>🖼️ Image URL</h4>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={img}
          placeholder="Enter image URL"
          type="text"
        />
      </div>

      <div className="input-btn">
        <button onClick={addHandler} className="btn">Add</button>
      </div>
    </div>
  );
};

export default AddFriend;