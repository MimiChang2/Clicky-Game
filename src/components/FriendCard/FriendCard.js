import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Origin:</strong> {props.origin}
        </li>
      </ul>
    </div>
    <span className="remove" onClick={() => props.deleteFriend(props.id)}>𝘅</span>
    
  </div>
);

export default FriendCard;