import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/nav';
import Home from "./components/home";
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <Box maxW={'1150px'} m='auto' className="App">
      <Navbar />
      <Box bg={'gray.100'}>
        <section id="home"><Home /></section>
        <section id="about" class="about section"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </Box>
    </Box >
  );
}

export default App;
