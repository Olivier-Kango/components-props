// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

// function App(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// export default App;


// class App extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// export default App

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <App name='Olivie' />;
// root.render(element);


// const element = <div />;
// const element = <Welcome name="Sara" />;



// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }


// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

const App = ({name}) => <p>{`Hi ${name}!`}</p>;
export default App;

export class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sleeping: true};
  }
  render() {
    return (
      <div>
        <p>{`The cat is ${this.state.sleeping ? "sleeping" : "eating"}`}</p>
        <button onClick={() => this.setState({ sleeping: false })}>
          Wake up!
        </button>
      </div>
    );
  }
}

export const Cato = ({timeToEat}) => (
  <p>{`I'm ${timeToEat ? 'happy' : 'sad'}`}</p>
)

export class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeToEat: false};
  }
  render() {
    return (
      <div>
        <Cato timeToEat={this.state.timeToEat} />
        <button onClick={() => this.setState({ timeToEat: true })}>
          Time to eat!
        </button>
      </div>
    );
  }
}

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: { props.date }</p>
      { /* Change code above this line */ }
    </div>
  );
};

export class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};