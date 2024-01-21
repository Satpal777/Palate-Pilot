import ReactDOM from 'react-dom/client';
import logo from './assets/FOA-logo.jpg';
import test from './assets/test.avif';

// Data 
const palatePilotData = [
    {
        "distance": "1.2 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/1/110271/fa5cb9c40843192a37febd1dfa7cebfb_o2_featured_v2.jpg",
        "locality": {
            "name": "Ashram Road, Ahmedabad",
            "address": "Ground Floor, City Gold Multiplex, Ashram Road, Ahmedabad",
            "localityUrl": "ahmedabad/ashram-road-restaurants"
        },
        "name": "McDonald's",
        "rating": {
            "rating_text": "4.0",
        },
        "resId": 110271,
        "deliveryTime": "16 min"
    },
    {
        "distance": "3.8 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/5/18808035/d1698afed158e4ad1b7d6e3dfeb01489_o2_featured_v2.jpg",
        "locality": {
            "name": "Vastrapur, Ahmedabad",
            "address": "Survey 14/1, Ground Floor, 153 Paiki, Vastrapur Lake, Opposite Kamnath Mahadev Mandir, Vastrapur, Ahmedabad",
            "localityUrl": "ahmedabad/vastrapur-restaurants"
        },
        "name": "Food On Way",
        "rating": {
            "rating_text": "4.0",
        },
        "resId": 18808035,
        "deliveryTime": "27 min"
    },
    {
        "distance": "1.6 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/113158/afbb6229560a56525ba6f72f24074fff_o2_featured_v2.jpg",
        "locality": {
            "name": "Aryan Work Spaces, Gulbai tekra, Ahmedabad",
            "address": "Shop 2, Aaryan Work Spaces, Saint Xaviers College, Corner Road, Navrangpura, Ahmedabad",
            "localityUrl": "ahmedabad/restaurants/in/aryan-work-spaces-gulbai-tekra"
        },
        "name": "Shakti - The Sandwich Shop",
        "rating": {
            "rating_text": "4.0",
        },
        "resId": 113327,
        "deliveryTime": "22 min"
    },
    {
        "distance": "1.6 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/3/20510753/aaebf1547278ff4852e8be706b2cb3fe_o2_featured_v2.jpg",
        "locality": {
            "name": "Navrangpura, Ahmedabad",
            "address": "AG 2, Karmyog Heights, Navrangpura, Ahmedabad",
            "localityUrl": "ahmedabad/navrangpura-restaurants"
        },
        "name": "Burger Farm",
        "rating": {
            "rating_text": "4.1",
        },
        "resId": 20720220,
        "deliveryTime": "21 min"
    },
    {
        "distance": "1.5 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/1/19708611/58e9a8bb27bf7435a139c53b701a722d_o2_featured_v2.jpg",
        "locality": {
            "name": "Navrangpura, Ahmedabad",
            "address": "Ground Floor 1, Campur Corner, HL College Road, Navrangpura, Ahmedabad",
            "localityUrl": "ahmedabad/navrangpura-restaurants"
        },
        "name": "La Milano Pizzeria",
        "rating": {
            "rating_text": "4.1",
        },
        "resId": 19901905,
        "deliveryTime": "24 min"
    },
    {
        "distance": "2 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/8/20826528/1b018124b5cc01cfb8d5586f7ca19017_o2_featured_v2.jpg",
        "locality": {
            "name": "Navrangpura, Ahmedabad",
            "address": "Shop 6, Indraprastha Buisness House, Near Vijay Char Rasta, Navrangpura, Ahmedabad",
            "localityUrl": "ahmedabad/navrangpura-restaurants"
        },
        "name": "The Fusion Pizza",
        "rating": {
            "rating_text": "4.1",
        },
        "resId": 20826528,
        "deliveryTime": "30 min"
    },
    {
        "distance": "1.2 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/6/110316/e81f66522df2f3dbc3c9d0aa3ce0756d_o2_featured_v2.jpg",
        "locality": {
            "name": "Ashram Road, Ahmedabad",
            "address": "956, Ground Floor, City Gold Multiplex, Ashram Road, Ahmedabad",
            "localityUrl": "ahmedabad/ashram-road-restaurants"
        },
        "name": "Pizza Hut",
        "rating": {
            "rating_text": "3.6",
        },
        "resId": 112868,
        "deliveryTime": "24 min"
    },
    {
        "distance": "1.4 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/110198/ffa9c907b81ef0453b3c189ae674510d_o2_featured_v2.jpg",
        "locality": {
            "name": "Ashram Road, Ahmedabad",
            "address": "Block B/, 8 To 10, 14, 15, Sun West Bank, Navrangpura, Ashram Road, Ahmedabad",
            "localityUrl": "ahmedabad/ashram-road-restaurants"
        },
        "name": "Honest",
        "rating": {
            "rating_text": "3.3",
        },
        "resId": 20435628,
        "deliveryTime": "24 min"
    },
    {
        "distance": "2.5 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/5/112945/851effc3156d49ce82888882ad966f27_o2_featured_v2.jpg",
        "locality": {
            "name": "C G Road, Ahmedabad",
            "address": "Shop 7, Ground Floor, 3rd Eye Building 2, Near Panchvati Circle, C G Road, Ahmedabad",
            "localityUrl": "ahmedabad/cg-road-restaurants"
        },
        "name": "KFC",
        "rating": {
            "rating_text": "3.3",
        },
        "resId": 19818406,
        "deliveryTime": "24 min"
    },
    {
        "distance": "4 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/3/110363/3a6953d518ddadc71925fd73336f1511_o2_featured_v2.jpg",
        "locality": {
            "name": "Vastrapur, Ahmedabad",
            "address": "1, Sardar Centre, Opposite Vastrapur Lake, Vastrapur, Ahmedabad",
            "localityUrl": "ahmedabad/vastrapur-restaurants"
        },
        "name": "Shiva's Coffee Bar & Snacks",
        "rating": {
            "rating_text": "3.8",
        },
        "resId": 110363,
        "deliveryTime": "31 min"
    },
    {
        "distance": "2.7 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/18603039/55307b06a976df75450a1e45c749e1ec_o2_featured_v2.jpg",
        "locality": {
            "name": "Ellis Bridge, Ahmedabad",
            "address": "9, Ground Floor, Dev Complex, Near Parimal Garden, Ellis Bridge, Ahmedabad",
            "localityUrl": "ahmedabad/ellis-bridge-restaurants"
        },
        "name": "Mahalaxmi Bhaji Pav-Manekchowk Wala",
        "rating": {
            "rating_text": "4.3"
        },
        "resId": 18603039,
        "deliveryTime": "22 min"
    },
    {
        "distance": "2.9 km",
        "costText": {
            "text": "₹200 for one"
        },
        "url": "https://b.zmtcdn.com/data/pictures/chains/1/18543621/33c76f241b02e6657c0725d1da8f982e_o2_featured_v2.jpg",
        "locality": {
            "name": "Shivalik Plaza, Vastrapur, Ahmedabad",
            "address": "Shivalik Plaza, IIM Road, Near Vastrapur, Ahmedabad, Gulbai Tekra, Ahmedabad",
            "localityUrl": "ahmedabad/restaurants/in/shivalik-plaza-vastrapur"
        },
        "name": "The Belgian Waffle Co.",
        "rating": {
            "rating_text": "3.8",
        },
        "resId": 18582921,
        "deliveryTime": "27 min"
    }
];

// App Layout
const App = () => (
    <div className="flex flex-col gap-10" >
        <Header />
        <Body />
        <Footer />
    </div>
);

const Header = () => (
    <div className="header flex">
        <div className="brand flex flex-row flex-center gap-10">
            <img className="logo" src={logo} alt='logo' />
            <h3>Palate Pilot 🚀</h3>
        </div>
        <div className='search-box flex flex-row'>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <div className="input-container">
                <input placeholder="Search for restaurants and food..." />
            </div>
        </div>
    </div>
);

const Body = () => (
    <div className='body'>
        <Container />
    </div>
);

const Footer = () => (
    <div>
        Footer
    </div>
);

const Container = () => (
    <div className="container">
        <h2>Best food to eat in Ahmedabad</h2>
        <div className='group-of-cards'>
            {
                palatePilotData.map((palateEachData)=>{
                  return  <Card key={palateEachData.resId} palateEachData={palateEachData} />
                })
            }
        </div>
    </div>
);

const Card = ({ palateEachData }) => {
    const { name, locality, distance, deliveryTime, costText, rating, resId, url } = palateEachData;
    console.log(name, locality, distance, deliveryTime, costText, rating, resId, url);
    return (
        <div className='res-card'>
            <div className='card-show-off'>
                <img className='img-food' src={url} alt={name + "restaurant image"} />
                <h2>
                  {costText.text}
                </h2>
            </div>
            <div className='col'>
                <h4 className='trail'>{name}</h4>
                <h4 className='rating'>{rating.rating_text}⭐</h4>
            </div>
            <div className='col'>
                <h4 className='trail'>{locality.name}</h4>
                <h4>{distance}</h4>
            </div>
            <p className='time'>{deliveryTime}</p>
        </div>
    )
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
