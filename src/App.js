import { Allroutes } from "./routes/AllRoutes";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes></Allroutes>
      <Footer />
    </div>
  );
}

export default App;
