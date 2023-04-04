import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <Router basename="/react-cooking-book">
        <Header />
        <main className="container content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/category/:name" element={<Category />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>      
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
