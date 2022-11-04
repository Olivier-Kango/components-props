// import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import B from './B';
import Output from './Output';

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

const App = ({name}) => <p className='para'>{`Hi ${name}!`}</p>;
export default App;

export class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sleeping: true};
  }
  render() {
    return (
      <div className='todo'>
        <p>{`The cat is ${this.state.sleeping ? "sleeping" : "eating"}`}</p>
        <button onClick={() => this.setState({ sleeping: false })}>
          Wake up!
        </button>
      </div>
    );
  }
}

export const Cato = ({timeToEat}) => (
  <p className='para'>{`I'm ${timeToEat ? 'happy' : 'sad'}`}</p>
)

export class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeToEat: false};
  }
  render() {
    return (
      <div className='todo'>
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
      <div className='todo'>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};

const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

export class ToDo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='todo'>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["Olivier", "Theo"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "Movies"]} />
        { /* Change code above this line */ }
      </div>
    );
  }
};


const Items = (props) => {
  return <h1 className='todo'>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = { quantity: PropTypes.number.isRequired }

Items.defaultProps = {
  quantity: 0
};

export class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items />
  }
};



export class Apps extends React.Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
        <div className='todo'>
            { /* Change code below this line */ }
            <Welcome name = 'Olivier'/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};


export class CampSite extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='todo'>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) => {
    return (
      <p>{ props.name }</p>
    )
}

Camper.defaultProps = { name: 'CamperBot' }
Camper.propTypes = { name: PropTypes.string.isRequired }


export class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: 'Kiezekie'
    }
  }
  render() {
    return (
      <div className='todo'>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div className='todo'>
        <h1>{name}</h1>
      </div>
    );
  }
};




export class MyComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'React Rocks!',
    })
  }
  render() {
    
    return (
      <div className='todo'>
        <button onClick={this.handleClick}>Click Me</button>
        
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


// HANDLING EVENTS
// React event names are camelCased. Example: onClick, instead of onclick.
// In JSX, you pass a function as event handler, instead of a string.
// In JS, you add an event to an element using addEventListener(). In React that is not necessary, you can just pass it as props.
// React events are called SyntheticEvents. The SyntheticEvent is just a cross-browser wrapper of the browser's event system that makes sure that events behave the same in all browsers. The interface (the methods you can use) is the same as the browser implementation, you just need to follow the syntax rules described above.

// function App() {
//   const onChangeHandler = (event) => {
//     console.log(event.target.value);
//   };
//   return (
//     <div>
//       <div>
//         Name :<input onChange={onChangeHandler} />
//       </div>
//       <div>
//         Lastname :<input onChange={onChangeHandler} />
//       </div>
//     </div>
//   );
// }


// LIFECYCLE
// --------------------------------------------------------------------------------------------
// React components's lifecyc le of 3 phases :
// 1. Mounting (putting elements in the DOM):
    // constructor().
    // getDerivedStateFromProps().
    // render() (mandatory).
    // componentDidMount(). ***********************************
// 2. Updating
    // getDerivedStateFromProps().
    // shouldComponentUpdate().
    // render()(mandatory).
    // getSnapshotBeforeUpdate().
    // componentDidUpdate(). ******************************************
// 3. Unmounting
    // componentWillUnmount()


// export class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todo: null,
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(todo => this.setState({ todo }))
//   }
// }


// STATE AND LIFECYCLE
// -----------------------------------------------------------------------------------------


// Lifting state up
// ---------------------------------------------------------------------------------------------

export class A extends Component {

  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: ''};
  }

  handleTextChange(newText) {
    this.setState({text: newText});
  }

  render() {
    return (
      <React.Fragment>
      <B text={this.state.text}
        handleTextChange={this.handleTextChange} />
      <Output text={this.state.text} />
      </React.Fragment>
    );
  }
}
