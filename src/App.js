import "./App.css";
import { Sectionone } from "./components/Sectionone";
import { Sectiontwo } from "./components/Sectiontwo";

function App() {
  return (
    <main className="rainingHearts">
      <div class="heart x1"></div>
      <div class="heart x2"></div>
      <div class="heart x3"></div>
      <div class="heart x4"></div>
      <div class="heart x5"> </div>
      <div class="altheart x6"></div>
      <div class="heart x1"></div>
            <div class="heart x2"></div>
            <div class="heart x3"></div>
            <div class="heart x4"></div>
            <div class="heart x5"> </div>
            <div class="altheart x6"></div>
      <Sectionone />

      <div class="heart x3"></div>
      <div class="heart x4"></div>
      <div class="heart x5"> </div>
            <div class="altheart x6"></div>
      <Sectiontwo />
      <Sectionone />
    </main>
  );
}

export default App;
