import React from 'react';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import CodeforInterview from './Components/CodeforInterview';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
      <Route path="/" element={<CodeforInterview />} />
      <Route path="/all" element={<AllUsers />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>        
  );
}

export default App;
