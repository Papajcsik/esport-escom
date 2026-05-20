import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Header, Hero } from "./components/_index";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Hero />
      <Header />
    </main>
  );
}

export default App;
