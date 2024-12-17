import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Addanime from './Addanime';
import Headr from './Headr';
import Detail from './Detail';
import Login from './Login';
import Signup from './Signup';
import Review from './Review';


const Appstate = createContext();
function App() {
  const [login, setLogin] =useState(false);
  const [userName, setUserName] =useState("");
  const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName,user, setUser, isLoggedIn, setIsLoggedIn}}>
      <BrowserRouter>
        <Headr />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/Addanime' element={<Addanime />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Review' element={<Review  id="anime-id" prevRating={0} userRated={0}/>} />
        </Routes>
      </BrowserRouter>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
// import './App.css';
// import { useState, createContext } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './Layout';
// import Addanime from './Addanime';
// import Headr from './Headr';
// import Detail from './Detail';
// import Login from './Login';
// import Signup from './Signup';
// import Review from './Review';


// const Appstate = createContext();
// function App() {
//   const [login, setLogin] =useState(false);
//   const [userName, setUserName] =useState("");
//   const [user, setUser] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Appstate.Provider value={{login, userName, setLogin, setUserName,user, setUser, isLoggedIn, setIsLoggedIn}}>
//       <BrowserRouter>
//         <Headr />
//         <Routes>
//           <Route path='/' element={<Layout />} />
//           <Route path='/Addanime' element={<Addanime />} />
//           <Route path='/detail/:id' element={<Detail />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/Review' element={<Review  id="anime-id" prevRating={0} userRated={0}/>} />
//         </Routes>
//       </BrowserRouter>
//     </Appstate.Provider>
//   );
// }

// export default App;
// export {Appstate};


// src/App.js
