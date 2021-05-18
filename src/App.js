import "./App.css";
import About from "./components/About/About";
import Header from "./components/layout/Header/Header";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__content">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
