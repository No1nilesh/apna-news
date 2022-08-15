import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App=()=> {

  const [mode, setMode] = useState("primary")

 const handleMode=()=>{
if(mode==="primary"){
    setMode("dark")
    document.body.style.backgroundColor = '#1F1D36';
    document.body.style.color ='white';
}else{
    setMode("primary")
    document.body.style.backgroundColor = 'white';
    document.body.style.color ='black';
}
 }
  const pageSize=5;
 
    const [progress, setProgress] = useState(0)
     
  
  const apiKey = "bcc6adfe50144073b50d6cff8257b658"

    return (
      <div>
        <Router>
          <Navbar mode={mode} handleMode={handleMode}/>
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route
              path="/"
              element={<News setProgress = {setProgress} key="general" pageSize={pageSize} country="in" apiKey={apiKey}  category="general" mode={mode}/>}>
                </Route>
              <Route
                exact path="/technology"
                element={
                  <News setProgress = {setProgress} key="technology" pageSize={pageSize} country="in" apiKey={apiKey} category="technology" mode={mode}/>
                }
              ></Route>
              <Route
                exact path="/sports"
                element={<News setProgress = {setProgress} key="sports" pageSize={pageSize} country="in" apiKey={apiKey} category="sports" mode={mode}/>}
              ></Route>
              <Route
               exact path="/science"
                element={<News setProgress = {setProgress} key="science" pageSize={pageSize} country="in" apiKey={apiKey} category=" science" mode={mode}/>}
              ></Route>
              <Route
               exact path="/health"
                element={<News setProgress = {setProgress} key="health" pageSize={pageSize} country="in" apiKey={apiKey} category=" health" mode={mode} />}
              ></Route>
              <Route
               exact path="/entertainment"
                element={
                  <News setProgress = {setProgress} key="entertainment" pageSize={pageSize} country="in" apiKey={apiKey} category="entertainment" mode={mode}/>
                }
              ></Route>
              <Route
               exact path="/business"
                element={<News setProgress = {setProgress} key="business" pageSize={pageSize} country="in" apiKey={apiKey} category="business" mode={mode} />}
              ></Route>
            
          </Routes>
        </Router>
      </div>
    );
  }

  export default App;