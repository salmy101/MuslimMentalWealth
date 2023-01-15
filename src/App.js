import './App.css';
import Layout from './components/Layout'
import Main from './components/Home'

import { Routes, Route, BrowserRouter } from 'react-router-dom'



function App() {
  return (
    // <div className="App">
    //   <h1>hello</h1>
      
    // </div>


<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            {/* <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} /> */} 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
