import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "demo",
      element:
        <>
          <Demo />
          <Demo2/>
        </>
    },
  ]

}])

function App() {
  return (

    <Provider store={store}>

      <div className="">
        <Head />
        <RouterProvider router={appRouter} />
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
