import "./App.scss";
import Slide1 from "./components/slide1";
import Header from "./components/header";
import Slide2 from "./components/slide2";
import Slide3 from "./components/slide3";
import Slide4 from "./components/slide4";
import Slide5 from "./components/slide5";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Slide1 />
                <Slide2 />
                <Slide3 />
                <Slide4 />
                <Slide5 />
            </div>
            <Footer />
        </>
    );
}

export default App;
