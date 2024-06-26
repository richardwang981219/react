import logo from '../../public/assets/img/protection1.png';
import vector from '../../public/assets/img/Rectangle 4406.png';
import camera from '../../public/assets/img/_Group_.png';
import polygon from '../../public/assets/img/Polygon 1.png';
import mark from '../../public/assets/img/Mask Group.png';
const MainBody = () => {

    return (
        <div className='pt-28'>
                <div className='xl:w-[1200px] lg:w-[992px] md:w-9/12 w-11/12 mx-auto justify-center items-center text-center flex flex-row relative h-48 mb-20'>
                    <div className=' w-1/2'>
                        <h1 className='font-56 text-center text-white mb-5'>

                        Perimeter Protection
                        </h1>
                        <p className=' text-white text-center font-18 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nunc maecenas rhoncus pellentesque ante odio turpis. Urna et sem
                        </p>
                    </div>
                    <div className=''>
                        <img src={camera} className='camera' ></img>
                        <img src={polygon} className='polygon'></img>
                    </div>

                </div>
                <div className='xl:w-[1200px] lg:w-[992px] md:w-9/12 w-11/12 mx-auto flex flex-row bg-contact border-radius-20 mb-36 flex-wrap'>
                    <div className='w-1/2  pl-14 pt-14 align-middle items-center' >
                        <h1 className='text-white font-52'>What is</h1>
                        

                            <h2 className='font-52 gradient-text '>Perimeter Protection?</h2>



                        <p className='text-white pb-5 pt-5 font-18'>

                            With the perimeter making the first line of defense against unwanted intruders, industrial, civil and residential security solution providers are experiencing an increase in the demand for leading-edge techniques to reshaping the system used for perimeter protection and wide area surveillance.
                        </p>
                        <p className='text-white font-18'>
                        
                            Dahua perimeter protection solution is designed to provide a high-efficiency, reliable, cost-effective and visual system powered by artificial intelligence technology. High-definition and AI-enabled security products can offer precise and predictive intrusion alert, and record detailed visual information at the right time.
                        </p>
                    </div>
                    <div className='w-1/2 relative border-radius-20'>
                        <img src={logo} width={"100%"}></img>

                    </div>
                </div>

                <div className="xl:w-[1200px] lg:w-[992px] md:w-9/12 w-11/12 mx-auto  bg-contact border-radius-20 mb-36 relative border-2 border-white" >
                    <img src={mark} width={"100%"}  className='h-full absolute'></img>
                    <div className='flex flex-row flex-wrap'>
                        <div className='w-1/2 p-24 pr-0 align-middle items-center' >
                            <p className='text-white font-32'>Our over 240-strong team provides an all-EMEA service</p>

                        </div>
                        <div className='w-1/2 relative flex justify-center items-center btn-contact'>
                        <button class="bg-white hover:bg-gray-200 text-gray-800 font-18 py-2 px-4 rounded">
                        Contact us
                        </button>

                        </div>
                    </div>

                </div>
        </div>

    )
}

export default MainBody;