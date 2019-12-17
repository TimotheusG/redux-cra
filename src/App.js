import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import AllPost from './components/AllPost'
import PostForm from './components/PostForm'

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
 render() {
  return (
   <div className="App">
    <AllPost/>
    <PostForm />
    <button onClick={this.simpleAction}>Test redux action</button>
   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);