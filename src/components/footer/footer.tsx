import Image from "next/image"
import {AiFillHeart, AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import Link from "next/link"
export default function Footer() {
    return (
        <>
            <div className="w-full relatives bottom-[0px] shadow-[0_-3px_30px_-15px_rgba(0,0,0,0.3)]" id="Contact">
                <div className="h-auto bg-[rgba(248,252,251,0.7)] pt-20 pb-2 px-14 md:px-22">
                    <div className="flex flex-col mb-[20px] md:mb-6 gap-[40px]">
                    <div className="flex gap-[20px] md:gap-[80px] flex-col md:flex-row">
                        <div>
                            <div className="flex gap-[10px] items-center">
                                <Image src="/assets/sb_black.png" width={45} height={45} alt="logo" />
                                <div>
                                    <h2 className="font-semibold text-sm">IEEE CS SBC GECI</h2>
                                    <h3 className="text-xs text-[#666]">Govt. Engineering College Idukki</h3>
                                </div>
                            </div>
                            <p className="text-[#666] text-xs my-3 w-[220px] md:w-[380px]">
                                The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Quick Links</h2>
                            <ul className="text-sm font-light ">
                            <li><a href="https://www.computer.org/" target="_blank" className="hover:font-normal transition-[font-weight] duration-300" >Computer.org</a></li>
                                <li><a href="https://www.ieee.org/" target="_blank" className="hover:font-normal transition-[font-weight] duration-300" >IEEE.org</a></li>
                                <li><a href="https://ieeexplore.ieee.org/" target="_blank" className="hover:font-normal transition-[font-weight] duration-300" >IEEE Xplore</a></li>
                                <li><a href="https://ieee-collabratec.ieee.org/" target="_blank" className="hover:font-normal transition-[font-weight] duration-300" >IEEE Collabratec</a></li>
                                <li><a href="http://spectrum.ieee.org/" target="_blank" className="hover:font-normal transition-[font-weight] duration-300" >IEEE Spectrum Online</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex text-2xl gap-[16px]">{<><a href="https://www.instagram.com/ieee_cs_geci/" target="_blank"><AiFillInstagram className="opacity-60 hover:opacity-80 transition-[opacity] duration-300"/></a><a href="https://www.facebook.com/ieeesbgeci" target="_blank"><AiFillFacebook className="opacity-60 hover:opacity-80 transition-[opacity] duration-300" /></a><a href="https://www.youtube.com/channel/UCxQBKeyBzBZNnmcTeL3D3sA/" target="_blank"><AiFillYoutube className="opacity-60 hover:opacity-80 transition-[opacity] duration-300"/></a><a href="https://www.linkedin.com/company/ieeesbgeci" target="_blank"><AiFillLinkedin className="opacity-60 hover:opacity-80 transition-[opacity] duration-300"/></a></>}</div>
                    </div>
                    <hr/>
                    <div className="flex my-4 gap-[10px] md:justify-between md:items-center flex-col md:flex-row flex-wrap">
                        <h2 className="text-xs font-medium">Made With {<AiFillHeart className="inline-block text-lg font-bold text-[#ea5555] my-1.5"/>} By <span className="font-semibold">IEEE WEB TEAM</span></h2>
                        <div className="text-xs order-[-1] flex flex-col gap-[2px] md:flex-row md:gap-[20px] min-[822px]:order-[2]">
                            <h3 className="inline-block ">Counselor : <span className="font-sans">+91 98953 27107</span></h3>
                            <h3 className="inline-block">Chairperson: <span className="font-sans">+91 79025 61866</span></h3>
                            <h3 className="inline-block ">ieeecs@gecidukki.ac.in</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}