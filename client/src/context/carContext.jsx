import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const carContext = createContext()
export function Carprovider({ children }) {
    const [carList, setcarList] = useState([])
    const [editing, setediting] = useState(null)
    const [search, setsearch] = useState('')
    const [files, setfiles] = useState([])
    const [clicked, setClicked] = useState({})
    const [checked, setChecked] = useState({})
    const [carData, setcarData] = useState({
        title: '',
        description: '',
        price: '',
        features: '',
        brand: '',
        model: '',
        condition: '',
        year: '',
        body_type: '',
        seats: '',
        color: '',
        fuel_type: '',
        mileage: '',
        transmission: '',
        drivetrain: '',
        power: '',
        battery_capacity: '',
        charge_port: '',
        charge_speed: '',
        charge_time: '',
        length: '',
        width: '',
        height: '',
        cargo_volume: ''
    })
    const [filters, setFilter] = useState({
        price: { minPrice: 0, maxPrice: Number.POSITIVE_INFINITY },
        brand: [],
        model: [],
        year: [],
        body_type: [],
        seats: [],
        color: [],
        fuel_type: [],
        transmission: [],
        drivetrain: [],
    })
    const [filterdata, setfilterData] = useState([...carList])
    const [pricerange, setPricerange] = useState([20, 80000])
    const [sortOrder, setSortOrder] = useState({ key: '', order: '' })


    // console.log('files....', files);

    const searchCarData = search ? (
        carList.filter(carData =>
            carData.title.toLowerCase().includes(search.toLowerCase()) ||
            carData.description.toLowerCase().includes(search.toLowerCase()) ||
            carData.price.includes(parseInt(search))

        ))
        : []

    // .........................................price slider with filter
    const onSliderChange = (value) => {
        setPricerange(value)
        setFilter(prevValue =>
            checked.price ? { ...prevValue, 'price': { 'minPrice': value[0], 'maxPrice': value[1] } } :
                { ...prevValue, 'price': { 'minPrice': 0, 'maxPrice': Number.POSITIVE_INFINITY } }
        );
        // onSliderChange function pass value to setfilter when it checked and on slide it work dynamicaly 
    }

    //............................................checkbox
    const isClicked = (id) => {
        setClicked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        //customize function for checking an checbox is checked or not for custom checkbox
    }


    const ischecked = (e) => {
        const { id, name, value, checked } = e.target;
        const valuetoSet = ['year', 'seats'].includes(name) ? parseInt(value) : value.toLowerCase();
        setChecked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        setFilter(prevFilter => {
            if (name === 'price') {
                return checked ? { ...prevFilter, 'price': { 'minPrice': pricerange[0], 'maxPrice': pricerange[1] } } :
                    { ...prevFilter, 'price': { 'minPrice': 0, 'maxPrice': Number.POSITIVE_INFINITY } }
            }
            else {
                return checked ? { ...prevFilter, [name]: [...prevFilter[name], valuetoSet] } :
                    { ...prevFilter, [name]: prevFilter[name].filter(item => item !== valuetoSet) }
            }
        })
    }


    // ...................................sort function value
    const handleSortChange = (e) => {
        const value = e.target.value;
        value === 'asc' || value === 'desc' ? setSortOrder({ key: 'title', order: value }) :
            value === 'high' ? setSortOrder({ key: 'price', order: 'desc' }) : setSortOrder({ key: 'price', order: 'asc' });
    }
    const sortData = (data, key, order) => {
        return data.sort((a, b) => {
            if (key === 'price') {
                return order === 'asc' ? a[key] - b[key] : b[key] - a[key];
            }
            if (key && order) {
                return order === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
            }
            return data
        });
    }


    //...................................filter function
    const handlefilterdata = () => {
        const filtered = (carList.filter(item =>
            // use filters.year.length === 0 because if filters.year is empty or not selected, then first condition become true, if not use categories statement become false and exist whole funtion without checking other selected values
            (filters.year.length === 0 || filters.year.includes(parseInt(item.year))) &&
            (filters.brand.length === 0 || filters.brand.includes(item.brand.toLowerCase())) &&
            (filters.body_type.length === 0 || filters.body_type.includes(item.body_type.toLowerCase())) &&
            (filters.fuel_type.length === 0 || filters.fuel_type.includes(item.fuel_type.toLowerCase())) &&
            (filters.color.length === 0 || filters.color.includes(item.color.toLowerCase())) &&
            (filters.drivetrain.length === 0 || filters.drivetrain.includes(item.drivetrain.toLowerCase())) &&
            (filters.seats.length === 0 || filters.seats.includes(parseInt(item.seats))) &&
            (filters.transmission.length === 0 || filters.transmission.includes(item.transmission.toLowerCase())) &&
            (filters.model.length === 0 || filters.model.includes(item.model.toLowerCase())) &&
            (filters.price.minPrice <= item.price && filters.price.maxPrice >= item.price )
        ))

        const array = sortData(filtered, sortOrder.key, sortOrder.order)
        setfilterData(array)
    }

    useEffect(() => {
        handlefilterdata()
    }, [filters, carList, sortOrder, pricerange])


    // console.log(userSearchCarData);
    const fetchCarData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/get-cardata')
            // console.log(response.data.product);
            setcarList(response.data.cardata)
        } catch (error) {
            console.log('did not fetch', error);
        }
    }

    const editingfunction = (item) => {
        setediting(item._id)
        setcarData({
            title: item.title,
            description: item.description,
            price: item.price,
            features: item.features,
            brand: item.brand,
            model: item.model,
            condition: item.condition,
            year: item.year,
            body_type: item.body_type,
            seats: item.seats,
            color: item.color,
            fuel_type: item.fuel_type,
            mileage: item.mileage,
            transmission: item.transmission,
            drivetrain: item.drivetrain,
            power: item.power,
            battery_capacity: item.battery_capacity,
            charge_port: item.charge_port,
            charge_speed: item.charge_speed,
            charge_time: item.charge_time,
            length: item.length,
            width: item.width,
            height: item.height,
            cargo_volume: item.cargo_volume
        })
    }

    useEffect(() => {
        fetchCarData()
    }, [])

    const checkstyle = {
        backgroundColor: '#fff',
        borderColor: '#007cc7'
    }

    return (
        <>
            <carContext.Provider value={{ carList, search, setsearch, searchCarData, setcarList, editing, setediting, fetchCarData, editingfunction, carData, setcarData, files, setfiles, onSliderChange, clicked, isClicked, ischecked, handleSortChange, sortData, pricerange, checked, filterdata, checkstyle }}>
                {children}
            </carContext.Provider>
        </>
    )
}

export const useCarData = () => {
    return useContext(carContext)
}



