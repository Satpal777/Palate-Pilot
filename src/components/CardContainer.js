import Card from "./Card";
import { useCallback, useEffect, useState } from "react";
import constants from './../util/constants'
import _debounce from 'lodash/debounce';
import Lottie from "lottie-react";
import noMatch from "../../assets/no-match.json";
import ShimmerCard from "./ShimmerCard";
import Chip from "./Chip";
import { IoWallet } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";

const Container = () => {

    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [selectedBadge, setSelectedBadge] = useState(-1);
    const getDataFromApi = async (apiUrl) => {
        try {
            let res = await fetch(apiUrl);
            let resJson = await res.json();
            return resJson;
        } catch (err) {
            console.error("Error getDataFromApi", err);
        }
    }
    const getRestaurantData = (data) => {
        return data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }

    useEffect(() => {
        let apiUrl = constants.API_URL;

        async function getAppData() {
            let response = await getDataFromApi(apiUrl);
            let restaurantsData = getRestaurantData(response);
            setData(restaurantsData);
        }

        getAppData();
    }, []);

    const func = (input) => {
        let filteredData = data.filter((item) => item?.info?.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
        console.log("searching ==> ", input)
        setFilteredData(filteredData);
    }

    const debounceCallback = useCallback(_debounce(func, 500), [data]);

    const searchItem = (evt) => {
        let searchInput = evt.target.value;
        debounceCallback(searchInput);
    }

    const setBadge = (id) => {
        if (selectedBadge === id) {
            id = -1;
        }
        filterRestaurants(id);
        setSelectedBadge(id);
    }

    const filterRestaurants = (id) => {
        let filteredData = [];
        switch (id) {
            case -1:
                filteredData = null;
                break;
            case 1:
                filteredData = data.filter((item) => item?.info?.avgRating > 4.5);
                break;
            case 2:
                filteredData = data.filter((item) => item?.info?.sla?.deliveryTime < 20);
                break;
            case 3:
                filteredData = data.filter((item) => item?.info?.veg === true);
                break;
            case 4:
                filteredData = data.filter((item) => item?.info?.veg === false);
                break;
        }
        setFilteredData(filteredData);
    }

    const selectedBadgeStyle = (id) => {
        if (selectedBadge == id) {
            return true
        }
        return false
    }



    return (
        <div className="container">
            <h2>Best food to eat in Ahmedabad</h2>
            <input placeholder="Search for restaurants and food..." onChange={searchItem} />
            <div className="chip-container">
                <Chip active={selectedBadgeStyle(1)} selectedBadge={{ setBadge, id: 1 }} key={1} title={'Top Restaurants'}><FaTrophy color="orange" /></Chip>
                <Chip active={selectedBadgeStyle(2)} selectedBadge={{ setBadge, id: 2 }} key={2} title={'Fast Delivery'}><FaMotorcycle color="red" /></Chip>
                <Chip active={selectedBadgeStyle(3)} selectedBadge={{ setBadge, id: 3 }} key={3} title={'Veg'}>
                    <div className="square square-green">
                        <div className="circle circle-green"></div>
                    </div>
                </Chip>
                <Chip active={selectedBadgeStyle(4)} selectedBadge={{ setBadge, id: 4 }} key={4} title={'Non-veg'}>
                    <div className="square square-red">
                        <div className="circle circle-red"></div>
                    </div>
                </Chip>
            </div>
            <div className='group-of-cards'>
                {
                    filteredData ? (
                        filteredData?.length ? filteredData.map(({ info }) => {
                            return <Card key={info.id} palateEachData={info} />
                        }) : (
                            <div className="flex flex-col lottie"><p className='no-match'>No match found</p>
                                <Lottie animationData={noMatch} style={{ height: '200px' }} loop={2} autoPlay={false} /></div>
                        )
                    ) : (
                        data ? (
                            data?.length ? data.map(({ info }) => {
                                return <Card key={info.id} palateEachData={info} /> 
                             }) : (
                                <div className="flex flex-col lottie"><p className='no-match'>No match found</p>
                                    <Lottie animationData={noMatch} style={{ height: '200px' }} loop={2} autoPlay={false} /></div>
                            )
                        ) : (
                            <><ShimmerCard /><ShimmerCard /><ShimmerCard /></>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default Container;
