import  React from 'react';
import ReactDOM from 'react-dom'
import searchBar from './components/search_bar';

const API_KEY = 'AIzaSyB0IELbwVklPrhdJPOyUJzfNT_Ei82Xbuk';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
  <div>
    <searchBar />
  </div>
);
}

//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
