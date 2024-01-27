import logo from './logo.svg';
//  import './App.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import '../src/assets/js/all'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './context/context';
import Root from './pages/Root';
import Home from './pages/Home';
import Error from './components/Error';
import About from './pages/About';
import Help from './pages/Help';
import Blog from './pages/Blog';
import Create from './pages/Create'
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import EditBlogs from './pages/EditBlogs';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      errorElement:<Error />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/about',
          element:<About />
        },
        {
          path:'/help',
          element:<Help />
        },
        {
          path:'/blog/:blogId',
          element:<Blog />
        },
        {
          path:'/create',
          element:<Create />
        },
        {
          path:'/account',
          element:<Account />
        },
        {
          path:'/dashboard',
          element:<Dashboard />  
        },
        {
          path:'/blogs/edit/:blogId',
          element:<EditBlogs />
        }
      ]


    },
  ])
  return (
    <MyContextProvider>
      <RouterProvider router={router}/>
    </MyContextProvider>
  );
}

export default App;
