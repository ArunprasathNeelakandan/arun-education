import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import PostLists from "./components/postLists";
import Scholarships from "./components/scholarships";
import Universities from "./components/universities";
import SinglePost from "./components/siglePost";
import CounsellingPage from "./components/counselling";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Admin from "./components/admin";
import AdminLogin from "./components/adminLogin";
import ProductedRoute from "./components/productedRoute";
import Loading from "./components/Loading";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/postLists" element={<PostLists/>} />
          <Route path="/scholarships" element={<Scholarships/>}/>
          <Route path="/university/:universityName" element={<Universities/>}/>
          <Route path="/siglePost" element={< SinglePost/>}/>
          <Route path="/counselling" element={<CounsellingPage/>} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/admin" element={<ProductedRoute><Admin/></ProductedRoute>}/>
          <Route path="/login" element={<AdminLogin/>}/>
          <Route path="/load" element={<Loading/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
