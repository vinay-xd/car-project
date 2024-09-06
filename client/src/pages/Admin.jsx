import React, { useEffect, useState } from 'react'
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useCarData } from '../context/carContext';
import Admincard from '../component/cards/Admincard';
import { useNavigate } from 'react-router-dom';
import { IoCalendarOutline } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useData } from '../context/userContex';
import axios from 'axios';

function Admin() {
    const { carList, setediting, editingfunction, fetchCarData, handleSortChange, filterdata, list } = useCarData()
    const { token, userData, fetchuserData } = useData()
    const [show, setshow] = useState()
    const [showuser, setshowUser] = useState(false)
    const [query, setquery] = useState({})
    const navigate = useNavigate()

    const showdelete = (item) => {
        setshow(item)
    }

    const toggleuser = () => {
        setshowUser(!showuser)
    }

    const deletecar = async (id) => {
        if (token) {
            try {
                const response = await axios.delete(`http://localhost:5000/delete-cardata/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setshow()
                fetchCarData()
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        fetchuserData()
    }, [])




    return (
        <>
            <section ref={list}>
                <div className='main max-w-[1280px] w-[90%] mx-auto my-[80px]'>
                    <div className='upperCon flex justify-between px-5'>
                        <p className='text-[20px] lg:text-[30px] font-[700]'>{showuser ? userData.length : carList.length} Results</p>
                        <button className='mr-auto md:ml-4' onClick={toggleuser}>{showuser ? 'Cars Data' : 'Users Data'}</button>
                        <div className='flex justify-evenly w-[180px] lg:w-[320px]'>
                            <select className='bg-[#152836] text-[14px] font-[600] px-4 w-[100%] rounded' name="sort_by" id="sort_by" onChange={handleSortChange}>
                                <option value=""> sort by </option>
                                <option value="asc">ascending</option>
                                <option value="desc">descending</option>
                                <option value="high">price high to low</option>
                                <option value="low">price low to high</option>
                            </select>
                            {/* <div className='text-[26px] md:text-[36px] flex justify-between w-[68px] md:w-[90px] pt-1' ><span><FaListUl /></span><span><IoGrid /></span></div> */}
                        </div>
                    </div>

                    {!showuser ? //showing car data
                        <div className='content'>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap my-[80px]'>
                                {
                                    filterdata && filterdata.map(i => (
                                        <Admincard
                                            key={i._id}
                                            id={i._id}
                                            title={i.title}
                                            price={i.price}
                                            year={i.year}
                                            drivetrain={i.drivetrain}
                                            image={i.images[0]}
                                            deletecar={() => showdelete(i)}
                                            edit={() => {
                                                editingfunction(i)
                                                navigate('/admin/add/cars')
                                            }}

                                        />
                                    ))
                                }
                            </div>
                            {
                                show &&
                                <>
                                    <div className='blurbackground w-[100%] fixed top-0 left-0 h-[100%] z-20 backdrop-blur-sm'></div>
                                    <div className='deletebox lg:w-[754px] w-[80%] bg-[#fff] z-50 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-[32px] py-10 lg:px-17 px-5 drop-shadow-md text-center mx-auto'>
                                        <h3 className='bg-[#2db0ff2e] font-[700] text-[28px] text-[#00415c] inline-block  rounded-[35px] px-3 '>Are you sure you want to delete ?</h3>
                                        <div className='carCon grid md:grid-cols-9 px-3 md:px-0 justify-between my-10 lg:w-[614px] w-[100%] mx-auto'>
                                            <div className='imgCon md:col-span-3 '>
                                                <img className='w-[320px] mx-auto h-[182px] object-cover' src={show.images[0]} alt="" />
                                            </div>
                                            <div className='decCon md:col-span-6 md:ml-4  text-[#000] text-left my-7'>
                                                <h3 className='font-[600] text-[20px] '>{show.title}</h3>
                                                <div className='grid grid-cols-4 gap-5'>
                                                    <div className='col-span-2 mt-3'>
                                                        <p className='font-[700] text-[24px] mb-2 text-[#007cc7]'>${show.price}</p>
                                                        <p className='font-[600]'>Jodhpur, Rajasthan</p>
                                                    </div>
                                                    <div className=' col-span-2 mt-3'>
                                                        <p className='mb-4'><span className='inline-block text-[#007cc7] text-[20px] align-text-bottom mr-1'><IoCalendarOutline /></span>{show.year}</p>
                                                        <p><span className='inline-block text-[#007cc7] text-[20px] align-text-bottom mr-1'><TbSteeringWheel /></span>{show.drivetrain}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='btnCon flex justify-around'>
                                            <button className='bg-[#007cc7] px-4 py-2 rounded-[10px]' onClick={() => deletecar(show._id)}>Delete <span className='inline-block text-[20px] align-text-bottom'><RiDeleteBin6Line /></span></button>
                                            <button className='px-4 py-2 shadow-md rounded-[10px] text-[#000]' onClick={() => setshow()}> Cancle</button>
                                        </div>
                                    </div>

                                </>
                            }
                        </div> :

                        <div className='usercontent'>
                            <div className='userdata flex-wrap justify-between mx-auto px-10 my-[80px] w-[90%] max-w-[1146px]'>
                                {
                                    userData.map(i => (
                                        <div className='relative max-w-[450px] grid grid-cols-2 font-[600] p-4 border-[2px] border-[#12232e] rounded bg-[#0b0c10] my-4'>
                                            <div>
                                                <p>Username: </p>
                                                <p>Email: </p>
                                                <p>Role: </p>
                                                <p>Verified: </p>
                                            </div>

                                            <div className='text-[#a0a0a0] text-right'>
                                                <p>{i.username}</p>
                                                <p>{i.email}</p>
                                                <p>{i.role}</p>
                                                <p>{i.verified ? 'true' : 'false'}</p>
                                            </div>
                                            {/* {query[i._id] && <p className='text-center '>
                                                {i.query.length > 0 ? i.query.map(q =>
                                                    <div className='dropdown mt-5  w-full text-left grid grid-cols-2'>
                                                        <div className='text-[#a0a0a0]'>
                                                            <p>Name:</p>
                                                            <p>Email:</p>
                                                            <p>{q.phone && 'Phone:'}</p>
                                                            <p>Car:</p>
                                                            <p>Subject:</p>
                                                            <p>Message:</p>
                                                        </div>
                                                        <div className='text-[#a0a0a0] text-right' >
                                                            <p>{q.name}</p>
                                                            <p>{q.email}</p>
                                                            <p>{q.phone}</p>
                                                            <p>{q.carname}</p>
                                                            <p>{q.subject}</p>
                                                            <p>{q.message}</p>
                                                        </div>
                                                    </div>
                                                ) : <p>no query</p>}
                                            </p>} */}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }




                </div>
            </section>

            {/* <div className='flex justify-center items-center bg-rose-400 max-w-[1000px] w-[90%] mx-auto lg:w-[500px] h-[100px]'>min width to 1024px to be apply the css</div> */}

        </>
    )
}

export default Admin