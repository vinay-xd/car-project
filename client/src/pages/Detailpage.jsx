import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GoLocation } from "react-icons/go";
import { useCarData } from '../context/carContext';

function Detailpage() {
    const { carList } = useCarData()
    const { id } = useParams()
    const navigate = useNavigate()
    const [thumbnail, setthumbnail] = useState(0)
    const [isOpen, setisOpen] = useState(false)
    const [showReadBtn, setShowReadBtn] = useState(false)
    const ref = useRef(null)

    const singlecar = carList.find(item => item._id === id)
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

    const handelthumbnail = (index) => {
        setthumbnail(index)
    }

    const paraStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
    }
    
    useEffect(() => {
        if(ref.current) {
            console.log(ref.current.scrollHeight, ref.current.clientHeight);
            // setShowReadBtn(ref.current.scrollHeight !== ref.current.clientHeight)
        }
    }, [])


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

                <div className='subSection flex justify-between mt-[72px] w-[1280px] mx-auto my-[100px]'>
                    <div className='leftCon w-[664px]'>
                        <div>
                            <h3>Description</h3>
                            <p style={isOpen ? null : paraStyle} ref={ref}>
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                                Where does it come from?
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                Where can I get some?
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            {
                                showReadBtn && (
                                    <button onClick={() => setisOpen(!isOpen)}>
                                        {isOpen ? 'read less' : 'read more'}
                                    </button>
                                )
                            }
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