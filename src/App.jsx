import './App.css';
import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { AppContext } from './components/context/Context';

const App = ()=> {
  const {progress} = useContext(AppContext);
  

    return (
      <Router>
          <LoadingBar
          color='#fb0009'
          height={4}
          progress={progress}     
          />
          <Navbar/>
          <Routes>
            <Route exact path ="/" element={<News  key="general" category="general"/>}/>
            <Route exact path ="/entertainment" element={<News  key="entertainment" category="entertainment"/>}/>
            <Route exact path ="/general" element={<News  key="general" category="general"/>}/>
            <Route exact path ="/health" element={<News key="health" category="health"/>}/>
            <Route exact path ="/science" element={<News  key="science"  category="science"/>}/>
            <Route exact path ="/sports" element={<News  key="sports"  category="sports"/>}/>
            <Route exact path ="/technology" element={<News  key="technology"  category="technology"/>}/>
            <Route exact path ="/business" element={<News  key="business" category="business" />}/>           
          </Routes>
          </Router>
    )
  };

export default App

