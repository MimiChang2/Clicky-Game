import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friendsList: friends
  };

  deleteFriend = (id) => {
    const newArray = this.state.friendsList.filter(friend => {
      if (friend.id === id) {
        return false
      }
      else {
        return true
      }
    })

    this.setState({ friendsList: newArray });
  }

  render() {
    return (
      <Wrapper>
    <h1 className="title">Social Media Click Game</h1>
    
    {this.state.friendsList.map(friend => 
    (
    <FriendCard
    id = {friend.id}
    name= {friend.name}
    image={friend.image}
    origin={friend.origin}
    deleteFriend = {this.deleteFriend}
    />)
     )};
     
     
  </Wrapper>
    );
  }
}

export default App;
