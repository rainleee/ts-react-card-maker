import "./app.css";
import Footer from "./components/footer/footer";
import CardMakerHeader from "./components/header/card_maker_header";
import Login from "./components/login/login";

function App() {
  const handleGoogleLogin = () => {};
  return (
    <>
      <header>
        <CardMakerHeader />
      </header>
      <main>
        <Login />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
