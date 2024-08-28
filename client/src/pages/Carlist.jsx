import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { useCarData } from '../context/carContext';
import { FiSearch } from "react-icons/fi";
import ReactSlider from 'react-slider'
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import Carcard from '../component/cards/carcard';




function Carlist() {
    const { search, setsearch, searchCarData, onSliderChange, isClicked, ischecked, handleSortChange, sortData, clicked, pricerange, checked, filterdata, checkstyle, list } = useCarData()
    const [filterbox, setfilterbox] = useState(false)

    const openfilter = () => {
        setfilterbox(!filterbox)
    }
    
    console.log(filterbox);


    return (
        <>
            <section className='text-[18px]' ref={list}>
                <div className='topnavCOn  bg-[#182e3bcc]'>
                    <div className='py-3 max-w-[1280px] w-[90%] h-[60px] mx-auto flex items-center justify-between'>
                        <div className='navigation flex'>
                            <Link to={'/'}><p className=' font-[600]  text-[#bdc3c7] after:content-[">"] after:ml-1 mr-2' >Homepage </p></Link>
                            <p className='font-[600]  text-[#d7d7d7] mr-2'>Car list</p>
                        </div>
                        <div>
                            <p className='font-[600]'><span className='inline-block align-bottom text-[24px]'><GoLocation /></span> Jodhpur, Rajasthan</p>
                        </div>
                    </div>
                </div>

                <div className='main relative grid grid-cols-10 justify-between max-w-[1280px] w-[90%] mx-auto mt-10'>
                    <div className={`filter lg:block absolute top-10 lg:relative lg:top-0 col-span-3 text-left p-4 bg-[#071620] ${filterbox ? 'block' : 'hidden'}`}>
                        <div className='border-b-2 pb-3'>
                            <h3 className='text-[20px] font-[500] px-4'>Filter</h3>
                        </div>

                        <div className='search relative w-[99%] mx-auto rounded mt-6 overflow-hidden '>
                            <span className=' absolute text-[25px] z-10 top-[50%] translate-y-[-50%] left-6 font-[600]'><FiSearch /></span>
                            <input className='text-[18px] w-full bg-[#152836] px-[56px] py-3 text-[#a9a9a9]' type="text" name="search" value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search' />
                        </div>

                        {searchCarData ? (
                            <div className='search-list  rounded overflow-hidden my-3'>
                                {
                                    searchCarData.map(i =>
                                        <div className='grid grid-cols-6 gap-4 justify-between w-[99%] mx-auto mb-2 pt-2 px-3 bg-[#152836] '>
                                            <div className=' col-span-2 h-[80px] my-auto ' >
                                                <img className='w-full h-[90%] object-cover border-[1px] border-[#fff]' src={i.images[0]} alt={i.title} />
                                            </div>
                                            <div className='col-span-4 text-[14px] grid grid-cols-2'>
                                                <Link className='col-span-2' to={`/cardetails/${i._id}`}><p>{i.title}</p></Link>
                                                <p className='text-[#007cc7]'>${i.price}</p>
                                                <p>Year: {i.year}</p>
                                                {/* <p>{i.brand}</p>
                                                <p >{i.model}</p> */}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ) : null}


                        <div className='year w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('search')} className='w-full text-left' >Year</button>
                            {clicked.search &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="year" id='yearone' value={2020} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="yearone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.yearone ? checkstyle : null}></div> 2020</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="year" id='yeartwo' value={2021} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="yeartwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.yeartwo ? checkstyle : null}></div> 2021</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="year" id='yearthree' value={2022} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="yearthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.yearthree ? checkstyle : null}></div> 2022</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="year" id='yearfour' value={2023} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="yearfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.yearfour ? checkstyle : null}></div> 2023</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="year" id='yearfive' value={2024} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="yearfive"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.yearfive ? checkstyle : null}></div> 2024</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='brand w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('brand')} className='w-full text-left' >brand</button>
                            {clicked.brand &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="brand" id='brandone' value={'tata'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="brandone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandone ? checkstyle : null}></div> Tata</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="brand" id='brandtwo' value={'tesla'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="brandtwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandtwo ? checkstyle : null}></div> Tesla</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="brand" id='brandthree' value={'ford'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="brandthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandthree ? checkstyle : null}></div> Ford</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="brand" id='brandfour' value={'honda'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="brandfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandfour ? checkstyle : null}></div> Honda</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="brand" id='brandfive' value={'nissan'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="brandfive"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandfive ? checkstyle : null}></div> Nissan</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='Body-type w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('body')} className='w-full text-left'>Body Type</button>
                            {clicked.body &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="body_type" id='bodyone' value={'sedan'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="bodyone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.bodyone ? checkstyle : null}></div> Sedan</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="body_type" id='bodytwo' value={'hatch-back'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="bodytwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.bodytwo ? checkstyle : null}></div> Hatchback</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="body_type" id='bodythree' value={'suv'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="bodythree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.bodythree ? checkstyle : null}></div> SUV</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="body_type" id='bodyfour' value={'mvp'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="bodyfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.bodyfour ? checkstyle : null}></div> MVP</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="body_type" id='bodyfive' value={'sports'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="bodyfive"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.bodyfive ? checkstyle : null}></div> Sports</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='transmission w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('transmission')} className='w-full text-left'>Transmission Type</button>
                            {clicked.transmission &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="transmission" id='transmissionone' value={'automatic'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="transmissionone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.transmissionone ? checkstyle : null}></div> Automatic</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="transmission" id='transmissiontwo' value={'manual'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="transmissiontwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.transmissiontwo ? checkstyle : null}></div> Manual</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='fuel-type w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('fuel')} className='w-full text-left'>Fuel Type</button>
                            {clicked.fuel &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="fuel_type" id='fuelone' value={'petrol'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="fuelone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.fuelone ? checkstyle : null}></div> Petrol</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="fuel_type" id='fueltwo' value={'diesel'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="fueltwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.fueltwo ? checkstyle : null}></div> Diesel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="fuel_type" id='fuelthree' value={'electric'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="fuelthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.fuelthree ? checkstyle : null}></div> Electric</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="fuel_type" id='fuelfour' value={'hybrid'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="fuelfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.fuelfour ? checkstyle : null}></div> Hybrid</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='drivetrain w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('drivetrain')} className='w-full text-left'>Drivetrain</button>
                            {clicked.drivetrain &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="drivetrain" id='drivetrainone' value={'front-wheel'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="drivetrainone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.drivetrainone ? checkstyle : null}></div> Front-wheel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="drivetrain" id='drivetraintwo' value={'rear-wheel'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="drivetraintwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.drivetraintwo ? checkstyle : null}></div> Rear-wheel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="drivetrain" id='drivetrainthree' value={'all-wheel'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="drivetrainthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.drivetrainthree ? checkstyle : null}></div> All-wheel</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='seats w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('seats')} className='w-full text-left'>Passenger Capaccity</button>
                            {clicked.seats &&
                                <div className='dropdown py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="seats" id='seatsone' value={'5'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="seatsone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.seatsone ? checkstyle : null}></div> 5</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="seats" id='seatstwo' value={'6'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="seatstwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.seatstwo ? checkstyle : null}></div> 6</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="seats" id='seatsthree' value={'7'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="seatsthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.seatsthree ? checkstyle : null}></div> 7</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="seats" id='seatsfour' value={'9'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="seatsfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.seatsfour ? checkstyle : null}></div> 9</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='color w-[99%] mt-4 text-[14px] bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('color')} className='w-full text-left'>Exterior Color</button>
                            {clicked.color &&
                                <div className='dropdown  py-2 grid grid-cols-1 gap-y-2 mt-3 border-t-2 border-[#fff]'>
                                    <div>
                                        <input type="checkbox" className='hidden' name="color" id='colorone' value={'red'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="colorone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.colorone ? checkstyle : null}></div> Red</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="color" id='colortwo' value={'blue'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="colortwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.colortwo ? checkstyle : null}></div> Blue</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="color" id='colorthree' value={'black'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="colorthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.colorthree ? checkstyle : null}></div> Black</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="color" id='colorfour' value={'white'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="colorfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.colorfour ? checkstyle : null}></div> White</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" className='hidden' name="color" id='colorfive' value={'grey'} onChange={(e) => ischecked(e)} />
                                        <label htmlFor="colorfive"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.colorfive ? checkstyle : null}></div> Grey</label>
                                    </div>
                                </div>}
                        </div>

                        <div className='priceRange py-5'>
                            <h3 className='font-[600]'>Price Range</h3>
                            <p className='text-[18px] font-[700] text-[#007cc7]'>${pricerange[0]} - ${pricerange[1]}</p>
                            <div className=' w-[99%] h-2 bg-[#152836] my-7'>
                                <ReactSlider
                                    className="horizontal-slider pt-3 "
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    min={0}
                                    max={100000}
                                    value={pricerange}
                                    onChange={onSliderChange}
                                    renderThumb={(props, state) => <div  {...props}>{state.valueNow}</div>}
                                />
                            </div>
                            <div className='mt-10'>
                                <input type="checkbox" className='hidden' name="price" id='price' onChange={ischecked} />
                                <label htmlFor="price"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.price ? checkstyle : null}></div> Price</label>
                            </div>
                        </div>


                        <button className='text-[#007cc7] border border-[#007cc7] rounded w-full py-4 mt-6'>Reset Filter</button>

                    </div>

                    <div className='carContent col-span-10 lg:col-span-7  px-5'>
                        <div className='main mx-auto'>
                            <div className='upperCon flex justify-between '>
                                <div className='flex justify-between w-[200px] lg:w-[320px] mr-4'>
                                    <div className='bg-[#152836] px-5 py-1 rounded lg:hidden' onClick={() => openfilter()}>filter</div>
                                    <p className='text-[20px] lg:text-[30px] font-[700]'>{filterdata.length} result</p>
                                </div>
                                <div className='flex justify-evenly w-[180px] lg:w-[320px]'>
                                    <select className='bg-[#152836] text-[14px] font-[600] px-4 w-[100%] rounded' onChange={handleSortChange} name="sort_by" id="sort_by">
                                        <option value="" > sort by </option>
                                        <option value='asc'>Ascending</option>
                                        <option value="desc">Descending</option>
                                        <option value="high">Price high to low</option>
                                        <option value="low">Price low to high</option>
                                    </select>
                                    {/* <div className='text-[24px] items-center md:text-[30px] flex justify-between w-[60px] md:w-[80px] pt-1' ><span><FaListUl /></span><span><IoGrid /></span></div> */}
                                </div>
                            </div>

                            <div className='content'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 flex-wrap my-[40px]'>
                                    {
                                        filterdata && filterdata.map(i => (
                                            <Carcard
                                                id={i._id}
                                                title={i.title}
                                                price={i.price}
                                                year={i.year}
                                                drivetrain={i.drivetrain}
                                                fule_type={i.fuel_type}
                                                image={i.images[0]}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Carlist