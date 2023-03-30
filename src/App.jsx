import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contact} />
              <Route path="/category/:name" component={Category} />
              <Route path="/recipe/:id" component={Recipe} />
              <Route component={NotFound} />
            </Switch>
        </main>      
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
