import "./App.css"
import Navbar from "./components/navbar";
import Header from "./pages/header";
import About from "./pages/about";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Footer from "./pages/footer";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
          <Navbar/>
          <Header/>
      </div>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
