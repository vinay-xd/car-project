import React, { useState } from 'react'
import * as Images from '../assets/images/index.js'
import { Link } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useCarData } from '../context/carContext';
import ReactSlider from 'react-slider';
import { useNavigate } from 'react-router-dom';




function Home() {
    const { search, setsearch, pricerange, onSliderChange, clicked, isClicked, checked, ischecked, checkstyle, list } = useCarData()
    const navigate = useNavigate()
    const handleSearch = (e) => {
        ischecked(e)
        console.log(e);
        navigate('/carlist')
    }

    return (
        <>
            <section className='mb-[200px]' ref={list}>
                <div className='imgCon w-[100%] h-[823px] relative'>

                    <div className='top-bar bg-[#182e3bcc] w-[100%] absolute'>
                        <div className='topnavCon py-3 max-w-[1280px] w-[90%] flex justify-between mx-auto '>
                            <p>Buy & Sell used cars</p>
                            <p className='font-[600]'><span className='inline-block align-bottom text-[24px]'><GoLocation /></span> Jodhpur, Rajasthan</p>
                        </div>
                    </div>


                    <img className='w-[100%] h-[100%] object-cover' src={Images.homebanner} alt="" />


                    {/* <div className='filterBox w-[1040px] bg-[#071620] h-[162px] absolute left-[50%] translate-x-[-50%] bottom-[-10%] border-[1px] border-[#007cc7] p-5' >
                        <div className='flex justify-between'>
                            <div className='model relative w-[354px] bg-[#152836] px-4 py-3'>
                                <button onClick={() => isClicked('model')} className='w-full text-left' >Model</button>
                                {clicked.model &&
                                    <div className='dropdown absolute z-10 w-[300px] bg-[#152836] px-4 py-2 grid grid-cols-1 gap-y-2 mt-3 border-2 border-[#fff]'>
                                        <div>
                                            <input type="checkbox" className='hidden' name="model" id='modelone' value={'curvv'} onChange={ischecked} />
                                            <label htmlFor="modelone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.modelone ? checkstyle : null}></div> Curvv</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="model" id='modeltwo' value={'model-3'} onChange={ischecked} />
                                            <label htmlFor="modeltwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.modeltwo ? checkstyle : null}></div> Model 3</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="model" id='modelthree' value={'f-250 lariat'} onChange={ischecked} />
                                            <label htmlFor="modelthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.modelthree ? checkstyle : null}></div> F-250 lariat</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="model" id='modelfour' value={'elevate'} onChange={ischecked} />
                                            <label htmlFor="modelfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.modelfour ? checkstyle : null}></div> Elevate</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="model" id='modelfive' value={'magnite'} onChange={ischecked} />
                                            <label htmlFor="modelfive"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.modelfive ? checkstyle : null}></div> Magnite</label>
                                        </div>
                                    </div>}
                            </div>

                            <div className='brand relative w-[304px] bg-[#152836] px-4 py-3'>
                                <button onClick={() => isClicked('brand')} className='w-full text-left' >brand</button>
                                {clicked.brand &&
                                    <div className='dropdown absolute z-10 w-[250px] bg-[#152836] px-4 py-2 grid grid-cols-1 gap-y-2 mt-3 border-2 border-[#fff]'>
                                        <div>
                                            <input type="checkbox" className='hidden' name="brand" id='brandone' value={'tata'} onChange={ischecked} />
                                            <label htmlFor="brandone"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandone ? checkstyle : null}></div> Tata</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="brand" id='brandtwo' value={'tesla'} onChange={ischecked} />
                                            <label htmlFor="brandtwo"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandtwo ? checkstyle : null}></div> Tesla</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="brand" id='brandthree' value={'ford'} onChange={ischecked} />
                                            <label htmlFor="brandthree"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandthree ? checkstyle : null}></div> Ford</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="brand" id='brandfour' value={'honda'} onChange={ischecked} />
                                            <label htmlFor="brandfour"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandfour ? checkstyle : null}></div> Honda</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='hidden' name="brand" id='brandfive' value={'nissan'} onChange={ischecked} />
                                            <label htmlFor="brandfive"> <div className='inline-block border-2 border-[#fff] w-3 h-3 mr-2' style={checked.brandfive ? checkstyle : null}></div> Nissan</label>
                                        </div>
                                    </div>}
                            </div>

                            <div className='color relative w-[250px] bg-[#152836] px-4 py-3'>
                                <button onClick={() => isClicked('color')} className='w-full text-left'>Exterior Color</button>
                                {clicked.color &&
                                    <div className='dropdown absolute w-[200px] bg-[#152836] px-4 py-2 grid grid-cols-1 gap-y-2 mt-3 border-2 border-[#fff]'>
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

                        </div>

                        <div className='flex justify-evenly mt-5'>
                            <div className='priceRange h-10 flex justify-between w-[427px]'>
                                <div className='  mr-3'>
                                    <h3 className='font-[600]'>Price Range</h3>
                                    <p className='text-[#007cc7] '>${pricerange[0]} - ${pricerange[1]}</p>
                                </div>

                                <div className=' w-[70%] h-2 bg-[#152836] mt-2'>
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
                            </div>

                            <label className='bg-[#007cc7] px-14 rounded py-3' htmlFor='price' >
                                <input type="checkbox" className='hidden' name="price" id="price" onChange={handleSearch} />
                                Search
                            </label>

                        </div>
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Home