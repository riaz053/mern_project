import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home  from './pages/Home';
import About  from './pages/About';
import Article  from './pages/Article';
import Articlelist  from './pages/Articlelist';
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/article-list" element={<Articlelist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
