import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => (
    <div className="flex flex-col gap-10" >
        <Header />
        <Body />
        <Footer />
    </div>
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
