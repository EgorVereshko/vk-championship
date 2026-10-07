import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Directions from "./components/Directions/Directions";
import Prizes from "./components/Prizes/Prizes";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Directions />
        <Prizes />
        <Subscribe />
      </main>

      <Footer />
    </>
  );
}

export default App;