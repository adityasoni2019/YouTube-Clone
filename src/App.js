import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (

    <Provider store = {store}>

      <div className="">
        <Head />
        <Body />
        {/**
     * 
     * App Layout -
     * 
     * Head 
     * Body 
     *  Sidebar
     *    Menuitems
     *  Main container  
     *    Button List
     *    Video Container 
     *      Video Card
    */}

      </div>
    </Provider>
  );
}

export default App;
