import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users2/Users2.jsx'
import UsersDetails from './Components/UsersDetails/UsersDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        //method : 1
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        // method : 2
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:usersId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component: UsersDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      
    ]

  },
  {
    path: '/',
    element: <div>Welcome to the react router</div>
  },
  {
    path: 'about',
    element: <div>About is here</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },



  
  {
    path: 'app',
    Component: App
  },
  {
    path: '/app2',
    element: <App></App>
  },
  // when the data won't be found--------------------->
      {
        path: '*',
        element:  <h1>Not found: 404 found</h1>
      }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
