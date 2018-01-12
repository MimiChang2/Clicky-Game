import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friendsList: friends,
    clickedFriends: [],
    score: 0
  };

  clickedItem = (id) => {
    const newClick = this.state.friendsList.filter(friend => {
      return this.setState({ newClick: this.state.friendsList + 1 });
    });
  }

  render() {
    return (
      <Wrapper>
    <h1 className="title">Click Game</h1>
    
    <p className= "score"> Score </p>
    {this.state.friendsList.map(friend => 
    (
    <FriendCard
    id = {friend.id}
    key = {friend.id}
    name= {friend.name}
    image={friend.image}
    origin={friend.origin}
    clicked = {this.clickedItem}
    score = {this.score}
    />)
     )};
     
     
  </Wrapper>
    );
  }
}

export default App;
