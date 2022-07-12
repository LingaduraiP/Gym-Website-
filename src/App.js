import "./App.css";
import Email from "./components/email/Email";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import Whyus from "./components/Why us/Whyus";
function App() {
    alert(
        "Note : This site created for mobile and desktop.so this site contain only one breakpoint at 550px "
    );
    return (
        <div className='App'>
            <Hero />
            <Program />
            <Whyus />
            <Journey />
            <Testimonials />
            <Email />
            <Footer />
        </div>
    );
}

export default App;
