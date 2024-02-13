import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import SubHeader from './component/SubHeader';
import Articles from './component/Articles';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <>
    <BrowserRouter>
    <>
    <Header />
    <SubHeader />
     {/* <Articles /> */}
    </>
    <Routes>
     
    {/* <Route path="/general" element={Articles />}/> */}
      <Route path="/" element={<Articles category="general" apiKey={apiKey}/>}/>
      <Route path="/general" element={<Articles category="general"apiKey={apiKey} />}/>
      <Route path="/sports" element={<Articles category="sports" apiKey={apiKey}/>}/>
      <Route path="/technology" element={<Articles category="technology" apiKey={apiKey}/>}/>
      <Route path="/health" element={<Articles category="health" apiKey={apiKey}/>}/>
      <Route path="/entertainment" element={<Articles category="entertainment"apiKey={apiKey} />}/>
      <Route path="/business" element={<Articles category="business" apiKey={apiKey}/>}/>
      {/* <Route path="/politics" element={<Articles category="politics" />}/> */}
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
