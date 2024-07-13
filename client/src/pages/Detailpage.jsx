import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { IoMdCheckbox } from "react-icons/io";
import { FiPhone, FiMail } from "react-icons/fi";
import { useCarData } from '../context/carContext';
import * as Images from '../assets/images/index.js' 

function Detailpage() {
    const { carList } = useCarData()
    const { id } = useParams()
    const navigate = useNavigate()
    const [thumbnail, setthumbnail] = useState(0)
    const [isOpen, setisOpen] = useState(false)
    const [showReadBtn, setShowReadBtn] = useState(false)
    const ref = useRef(null)

    const singlecar = carList.find(item => item._id === id)

    // const featuresarray = singlecar.features.split(',')
    // console.log(singlecar.features);
    
    
    const handelthumbnail = (index) => {
        setthumbnail(index)
    }

    useEffect(()=> {
        if (ref.current) {
            setShowReadBtn(ref.current.scrollHeight !== ref.current.clientHeight)
        }
    }, [singlecar])

    const paraStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #d7d7d7, #d7d7d720)', 
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent'
    }

    if (!singlecar) {
        return (
            <>
                <div className='flex justify-center items-center h-screen w-screen'>
                    <div className=' text-center'>
                        <div className='text-[50px] font-[600] text-[#4c3bcf]'>car data not Found</div>
                        <Link to={'/'}><div className='text-[25px] font-[500]'>Home</div></Link>
                    </div>
                </div>
            </>
        )
    }
    const featuresArray = singlecar.features ? singlecar.features.split(',').map(feature => feature.trim()) : [];
    
    return (
        <>
            <section>
                <div className='topnavCOn py-3 w-[1192px] mx-auto flex justify-between'>
                    <div className='navigation flex'>
                        <Link to={'/'}><p className=' font-[600] text-[18px] text-[#bdc3c7] after:content-[">"] after:ml-1 mr-2' >Homepage </p></Link>
                        <Link to={'/carlist'}><p className='font-[600] text-[18px] text-[#d7d7d7] after:content-[">"] after:ml-1 mr-2'>Car list</p></Link>
                        <p className='font-[600] text-[18px]'>Car details</p>
                    </div>
                    <div>
                        <p className='font-[600]'><span className='inline-block align-bottom text-[24px]'><GoLocation /></span> Jodhpur, Rajasthan</p>
                    </div>
                </div>


                <div className='imgCon w-[100%]'>
                    <div className='w-[100%]'>
                        <img className='w-[100%] h-[633px] object-cover' src={singlecar.images[thumbnail]} alt={singlecar.title} />
                    </div>
                    <div className='previewImg flex justify-between w-[1210px] mx-auto mt-9'>
                        {
                            singlecar.images.map((i, index) => (
                                <div className='quickview ' key={index} onClick={() => handelthumbnail(index)}>
                                    <img className="w-[142px] rounded h-[100px] object-cover hover:scale-125 transition-all duration-300 ease-in-out" src={i} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='subSection flex justify-between mt-[72px] w-[1210px] mx-auto my-[100px] '>
                    <div className='leftCon w-[664px]'>
                        
                        <div className='decCon text-[18px]'>
                            <h3 className='font-[700] mb-4'>Description</h3>
                            <p style={isOpen ? null : paraStyle} ref={ref}>
                                {singlecar.description}
                            </p>
                            {
                                showReadBtn && (
                                    <button className=' text-[#007cc7]' onClick={() => setisOpen(!isOpen)}>
                                        {isOpen ? 'read less' : 'read more'}
                                    </button>
                                )
                            }
                        </div>

                        <div className='featureCon text-[18px] mt-10'>
                            <h3 className='font-[700] mb-6'>Features</h3>
                            <div className=' flex flex-wrap'>
                                {featuresArray.map(i => (
                                <p className='bg-[#12232e] py-4 m-1 px-4' ><span className='inline-block text-[22px] align-text-bottom mr-2'><IoMdCheckbox /></span> {i}</p>
                            ))}
                            </div>
                        </div>

                        <div className='dealerInfo text-[18px] mt-16'>
                            <h3 className='font-[700]'>Dealer Info</h3>
                            <div className='mt-6 w-[100%] h-[90px] flex items-center  bg-[#071620] px-5'>
                                <div className=' flex justify-between w-1/3 my-auto border-r-2'>
                                    <img className='w-[60px] h-[60px] object-cover rounded-[100%] mr-4' src={Images.myImg} alt="" />
                                    <p>Vinay Panwar Dealer</p>
                                </div>
                                <div className='flex justify-evenly w-1/3 border-r-2 h-[60px] items-center ' >
                                    <span className='text-[35px]'><FiPhone /></span>
                                    <p>000-000-0000</p>
                                </div>
                                <div className='flex justify-evenly w-1/3 h-[60px] items-center ' >
                                    <span className='text-[35px] mr-2'><FiMail /></span>
                                    <p>sendmail@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='rightCon w-[400px]'>

                    </div>
                </div>
            </section >
        </>
    )
}

export default Detailpage