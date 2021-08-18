import "./app.css";
import Footer from "./components/footer/footer";
import CardMakerHeader from "./components/header/card_maker_header";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <>
      <header>
        <CardMakerHeader />
      </header>
      <main>
        <Login authService={authService} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
