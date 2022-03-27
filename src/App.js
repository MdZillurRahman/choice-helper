import './App.css';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Shop></Shop>
      <div className='questions'>
      <h1>1. How React Works?</h1>
      <p>One of the popular JavaScript library is React. React maintains a tree for us which it is able to do efficient diff computations on the nodes. It creates user interfaces in a predictable and efficient way using declarative code.components are reusable UIs which allow you to split the app into separate blocks that act independently of each other. Compnents accept an arbitrary input with deta and return a React element to declare what should appear on screen. They can interact with other components via props to create a complex UI.</p>
      <h1>2. Props vs State.</h1>
      <p><b>Props: </b>Props stands for properties.They are immutable. A Component cannot change its props, but it is responsible for putting together the props of its child Components.props are passed into the component.</p>
      <p><b>State: </b>State holds information about the component. When a component needs to keep track of information between renderings the component itself can create, update, and use state.</p>
      
      <h1>3. How useState Works?</h1>
      <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
      </div>
      
    </div>
  );
}

export default App;
