import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AddAssessmentResult from './AddAssessmentResult';

import AddStudent from './AddStudent';

import AddAssessment from './AddAssessment';

function App() {

 return (

    <div className="App">

   <BrowserRouter>

   <Routes>
   <Route path="/" element={<Layout />}/>
   <Route path="/assess" element={<AddAssessment />} />
   <Route path="/student" element={<AddStudent/>} />
   <Route path="/assessresult" element={<AddAssessmentResult/>} />

   </Routes>

   </BrowserRouter>

  </div>

 );

}

export default App;