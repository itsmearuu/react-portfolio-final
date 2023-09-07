import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './component/NavigationBar';
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";
import './App.css';
import Myinfo from "./component/MyInfo";
import Projects from "./component/Projects";
import MySkills from "./component/MySkills";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Myinfo></Myinfo>
      <Projects></Projects>
      <MySkills></MySkills>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
