import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friendsList: friends,
    clickedFriends: [],
    score: 0,
    gameOver: false
  };

  clickedItem = (id) => {

    if (this.state.clickedFriends.indexOf(id) > -1) {
      //game over
      this.setState({ gameOver: true });
    }
    else {
      const tempClickedFriends = this.state.clickedFriends.slice();

      tempClickedFriends.push(id);

      this.setState({
        score: this.state.score + 1,
        clickedFriends: tempClickedFriends
      });
    }

    // const newArray = this.state.friendsList.filter(friend => {
    //   if (friend.id === id) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // });

  }

  RestartGame = () => this.setState({
    friendsList: friends,
    clickedFriends: [],
    score: 0,
    gameOver: false
  })

  render() {
    return (
      <Wrapper>
    <h1 className="title">Click Game</h1>
    
    <p className= "score"> Score: {this.state.score} </p>
    {this.state.gameOver ? <p>Game Over! <button onClick={this.RestartGame} >Restart Game </button></p> : 
    
    this.state.friendsList.map(friend => 
    (
    <FriendCard
    id = {friend.id}
    key = {friend.id}
    name= {friend.name}
    image={friend.image}
    origin={friend.origin}
    clicked = {this.clickedItem}
    score = {this.state.score}
    />)
     )
    }
     
  </Wrapper>
    );
  }
}

export default App;
