import Card from "./Card";
import mockData from './../util/mockData'
import _debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from "react";

const Container = () => {

    const [ data, setData ] = useState(mockData);

    const func = (input) => {
        let filteredData = data.filter((item)=> item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
        console.log("searching ==> ", input)
        setData(filteredData);
    }

    const debounceCallback = useCallback(_debounce(func, 500), []);

    const searchItem = (evt) => {
        let searchInput = evt.target.value;
        debounceCallback(searchInput);
    }

    return (
        <div className="container">
            <h2>Best food to eat in Ahmedabad</h2>
            <input placeholder="Search for restaurants and food..." onChange={searchItem} />
            <div className='group-of-cards'>
                {
                    data.map((palateEachData) => {
                        return <Card key={palateEachData.resId} palateEachData={palateEachData} />
                    })
                }
            </div>
        </div>
    )
};

export default Container;