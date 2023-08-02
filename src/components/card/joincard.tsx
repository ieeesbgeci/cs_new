import Image from "next/image"
import Explore from "../button/explore"
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Joincard(){
    return(
    <>
        <div>
            <div className="w-72 flex mx-auto flex-col items-center md:w-[700px] md:flex-row">
                <div className="w-[80%] h-[15rem] rounded-[26px] overflow-hidden z-[1] md:w-[24rem] md:h-96"><Image src="/assets/join/2023.jpg" width="0" height="0" alt="join ieee" sizes="100vw" className="w-full h-full"/></div>
                <div className="w-full relative bottom-[148px] flex items-center mx-auto md:w-7/12 md:static">
                    <div className="h-full pt-[168px] pb-[38px] pl-[0px] flex flex-col items-center w-full bg-[rgba(248,252,251,0.7)] rounded-[26px] relative after:absolute after:z-[-3] after:inset-[-.125em] after:rounded after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur-[2px] after:opacity-1 after:rounded-[26px]  md:after:rounded-l-[0px] md:rounded-l-[0px] md:rounded-r-[26px] md:py-[38px] md:block md:pl-[50px] ">
                        <h1 className="font-bold text-lg mb-3">Full Year Membership</h1>
                        <h1 className="font-bold text-2xl font-sans">₹550.00</h1>
                        <div className="text-[#666] my-6 text-center md:text-start">
                            <h6>Don't wait</h6>
                            <h6>fill up now!!!</h6>
                            <h6>Contact : <span className="text-black font-medium">Salvi Hanna John</span></h6>
                            <h6 className="font-sans text-black">7736603302</h6>
                        </div>
                        <Explore name="JOIN NOW" icon={AiOutlineArrowRight} url="https://forms.gle/b9WBVt3A2Kdcg3gb7" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}