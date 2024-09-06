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
                <div className='imgCon w-[100%] h-[823px] relative'
                // style={{backgroundImage: `url(${Images.homebanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'brightness(70%)'}}
                >

                    <div className='top-bar bg-[#182e3bcc] w-[100%] absolute z-1'>
                        <div className='topnavCon py-3 max-w-[1280px] w-[90%] flex justify-between mx-auto '>
                            <p>Buy & Sell used cars</p>
                            <p className='font-[600]'><span className='inline-block align-bottom text-[24px]'><GoLocation /></span> Jodhpur, Rajasthan</p>
                        </div>
                    </div>


                    <img className='w-[100%] h-[100%] object-cover ' style={{ backgroundImage: `url(${Images.homebanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'brightness(90%)' }} alt="" />


                    <div className='filterBox w-[85%] max-w-[1280px] bg-[#071620] absolute left-[50%] translate-x-[-50%] bottom-[10%] border-[1px] border-[#007cc7] px-5 py-10' >
                        <div className='grid grid-cols-7 justify-between gap-5'>

                            <div  className='brand rounded-md relative col-span-2 bg-[#152836] px-4 py-3'>
                                <button onClick={() => isClicked('brand')} className='w-full text-left' >brand</button>
                                {clicked.brand &&
                                    <div className='dropdown absolute top-10 left-0 z-10 w-[100%] rounded-md bg-[#152836] px-4 py-2 grid grid-cols-1 gap-y-2 mt-3 border border-[#ffffff40]'>
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

                            <div className='model rounded-md relative col-span-2 bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('model')} className='w-full text-left' >Model</button>
                                {clicked.model &&
                                    <div className='dropdown absolute top-10 left-0 z-10 w-[100%] bg-[#152836] rounded-md px-4 py-2 grid grid-cols-1 gap-y-2 mt-3 border-2 border-[#ffffff40]'>
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

                            <div className='color relative col-span-2 rounded-md bg-[#152836] px-4 py-3'>
                            <button onClick={() => isClicked('color')} className='w-full text-left'>Exterior Color</button>
                                {clicked.color &&
                                    <div className='dropdown absolute w-[100%] rounded-md top-10 left-0 bg-[#152836] px-4 py-2 grid grid-cols-1 gap-y-2 mt-3 border-2 border-[#ffffff40]'>
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

                            <label className='bg-[#007cc7] px-14 col-span-1 rounded py-3' htmlFor='price' >
                                <input type="checkbox" className='hidden' name="price" id="price" onChange={handleSearch} />
                                Search
                            </label>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home