// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//====================================================================================

// In our index.js, we'll create the actual routing.
// This is the actual way we route between each component, or page. The structure is important here: by default, we'll render the Layout template, which in turn outputs the pages within. <Route index element={<Home />} />, By setting the index route, the naked domain will load the Home template.
// These routes will show the blog page when the url is /blog and contact page when the url is /contact. Add as many pages and routes as needed.

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ELearningResources from "./pages/ELearningResources";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import Projects from "./pages/Projects";
import Qualifications from "./pages/Qualifications";
import NoPage from "./pages/NoPage";
export default

  function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="ELearningResources" element={<ELearningResources />} />
          <Route path="ProfessionalExperience" element={<ProfessionalExperience />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Qualifications" element={<Qualifications />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));