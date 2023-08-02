'use client'
import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import { MdOutlineRocketLaunch, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Execomcard from "@/components/card/execomcard"
import { useEffect, useState, useRef } from "react"
export default function Execom() {
    const [changed, setChanged] = useState<boolean>(false)
    const myStateRef = useRef(changed);
    const setMyState = (data: boolean) => {
        myStateRef.current = data;
        setChanged(data);
    };
    useEffect(() => {
        function triggerEvent(elem: Element, event: string) {
            var clickEvent = new Event(event);
            elem.dispatchEvent(clickEvent);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth < 876) {
                if (!myStateRef.current) {
                    b = b - 1
                    setMyState(true)
                }
            } else {
                if (myStateRef.current) {
                    if(document.querySelectorAll(".execom-card")[b]){
                        document.querySelectorAll(".execom-card")[b].classList.remove("card-hover")
                    }
                    b = b + 1
                    setMyState(false)
                }
            }
        })
        const left = document.getElementsByClassName('left-arrow')[0]
        const right = document.getElementsByClassName('right-arrow')[0]
        const slider = document.querySelector<HTMLElement>('.execom-slider')
        let a: number = 0
        let b: number = 1
        right.addEventListener('click', () => {
            if (window.innerWidth < 876) {
                if (!myStateRef.current) {
                    b = b - 1
                    setMyState(true)
                }
            }
            document.querySelectorAll(".execom-card")[b].classList.remove("card-hover")
            document.querySelectorAll(".execom-card")[b].classList.remove("min-[876px]:card-hover")
            document.querySelectorAll(".execom-card")[b].classList.remove("max-[876px]:card-hover")
            slider!.style.transitionDuration = "500ms";
            slider!.style.transitionProperty = "transform";
            a = a - 246;
            b = b + 1
            if (window.innerWidth < 876) {
                if (b == 14) {
                    b = 0
                }
            } else {
                if (b == 15) {
                    b = 1
                }
            }
            if (a == -1 * ((slider!.offsetWidth) - (3 * 246))) {
                slider!.style.transitionDuration = "200ms";
                slider!.style.transform = `translate(${a}px,0px)`
                a = 0
                setTimeout(() => {
                    slider!.style.transitionProperty = "none";
                    slider!.style.transform = `translate(${0}px,0px)`
                }, 200)
            } else {
                slider!.style.transform = `translate(${a}px,0px)`
            }
            document.querySelectorAll(".execom-card")[b].classList.add("card-hover")
        })
        left.addEventListener('click', () => {
            document.querySelectorAll(".execom-card")[b].classList.remove("card-hover")
            document.querySelectorAll(".execom-card")[b].classList.remove("min-[876px]:card-hover")
            document.querySelectorAll(".execom-card")[b].classList.remove("max-[876px]:card-hover")
            slider!.style.transitionDuration = "500ms";
            b = b - 1
            console.log(b)
            if (window.innerWidth < 876) {
                if (b == -1) {
                    b = 13
                }
            } else {
                if (b == 0) {
                    b = 14
                }
            }
            a = a + 246;
            if (a == 246) {
                a = -1 * ((slider!.offsetWidth) - (3 * 246))
                slider!.style.transitionProperty = "none"
                slider!.style.transform = `translate(${a}px,0px)`
                a = a + 246
                setTimeout(() => {
                    slider!.style.transitionProperty = "transform";
                    slider!.style.transitionDuration = "500ms";
                    slider!.style.transform = `translate(${a}px,0px)`
                }, 10)
            } else {
                slider!.style.transform = `translate(${a}px,0px)`
            }
            document.querySelectorAll(".execom-card")[b].classList.add("card-hover")
        })
        const rightClick = setInterval(() => {
            triggerEvent(right, 'click');
        }, 2500)
        
        return()=>{
            clearInterval(rightClick)
        }
    }, [])
    return (
        <>
            <div id="Execom" className="pt-32">
                <Headings firstPart="EXE" secondPart="COM" xFirst={55.45} contWidth="w-[123px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Execom Team for the year <span className="font-sans text-base">2023-2024</span></p>
                <div className="flex justify-center">
                    <div className="w-[450px] min-[876px]:w-fit h-auto relative inline-flex items-center mb-32">
                        <MdKeyboardArrowLeft className="left-arrow cursor-pointer z-[1] text-3xl font-light absolute left-[0px] min-[876px]:left-[-50px]" />
                        <div className="h-[442px] execom-slider-cont flex overflow-hidden relative justify-start items-center gap-2 w-[240px] min-[876px]:w-[738px] mx-auto">
                            <div className=" flex execom-slider transition-transform duration-500">
                                <Execomcard soceity="IEEE CS SBC GECI" position="Chairperson" name="Vaishnav Vijayan" src="Vaishnavvijayan.jpg" className="min-[876px]:card-hover min-[876px]:flex bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Chapter Advisor" name="Dr Vishak R" className="max-[876px]:card-hover min-[876px]:flex bg-[rgba(246,252,251,1)] drop-shadow-xl" src="Vishak sir.jpg" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Vice Chairperson" name="Vishnu V" src="Vishnu V.jpg" className="bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Secretary" name="Gokul H V" src="Gokul H V dop.jpg" className="bg-[rgba(246,252,251,1)] drop-shadow-xl" />                           
                                <Execomcard soceity="IEEE CS SBC GECI" position="Joint Secretary" name="Devika V R " src="Devika V R.jpg" className="bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Technical Coordinator" name="Abhiram N S" className="min-[876px]:flex bg-[rgba(246,252,251,1)] drop-shadow-xl" src="AbhiramS.jpg" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Women In Computing" name="Anakha Anilkumar" src="Anakha Anilkumar.jpg" className="bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                                 <Execomcard soceity="IEEE CS SBC GECI" position="Chairperson" name="Vaishnav Vijayan" src="Vaishnavvijayan.jpg" className="min-[876px]:card-hover min-[876px]:flex bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Chapter Advisor" name="Dr Vishak R" className="max-[876px]:card-hover min-[876px]:flex bg-[rgba(246,252,251,1)] drop-shadow-xl" src="Vishak sir.jpg" />
                                <Execomcard soceity="IEEE CS SBC GECI" position="Vice Chairperson" name="Vishnu V" src="Vishnu V.jpg" className="bg-[rgba(246,252,251,1)] drop-shadow-xl" />
                            </div>
                        </div>
                        <MdKeyboardArrowRight className="right-arrow cursor-pointer text-3xl font-light absolute right-[0px] min-[876px]:right-[-50px]" />
                    </div>
                </div>
                //<div className="mx-auto w-max"><Explore name="See More" icon={MdOutlineRocketLaunch} url="/execom" /></div>
            </div>
        </>
    )
}