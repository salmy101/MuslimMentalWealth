import './App.css';
import Layout from './components/Layout'
import Main from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'




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
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} /> 
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
