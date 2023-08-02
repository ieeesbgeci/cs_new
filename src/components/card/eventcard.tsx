import Image from "next/image"
import Explore from "../button/explore"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
export default function Eventcard(props: { heading: string, time: string, text: string, day: string, month: string ,url?:string,poster:string,id:string}) {
    return (
        <>
            <div className="pt-24" id={props.id}>
                <div className="flex">
                    <div className="w-72 flex mx-auto flex-col items-center min-[840px]:items-end min-[840px]:w-[700px] min-[840px]:flex-row">
                    <div className="grid"><div className="inline-block h-auto font-bold text-2xl left-[30px] relative min-[840px]:left-[-60px] min-[840px]:top-[80px]"><div>{props.month}</div><div className="text-[#27b7f4] font-sans">{props.day}</div></div>
                        <div className="w-[90%] h-[14rem] rounded-[26px] overflow-hidden mx-auto z-[1] min-[840px]:w-[20rem] min-[840px]:h-96"><Image src={`/assets/events/${props.poster}`} width="0" height="0" alt="join ieee" sizes="100vw" className="w-full h-full" /></div></div>
                        <div className="w-full relative bottom-[148px] flex items-center mx-auto min-[840px]:w-7/12 min-[840px]:static">
                            <div className="h-full flex flex-col items-center text-center p-[20px] pt-[158px] pb-[38px] w-full bg-[rgba(248,252,251,0.7)] rounded-[26px] relative after:absolute after:z-[-3] after:inset-[-0.12em] after:bg-[#27b7f4] after:blur-[3px] after:opacity-90 after:rounded-[26px] min-[840px]:after:rounded-[26px] min-[840px]:rounded-[26px] min-[840px]:py-[38px] min-[840px]:pr-[30px] min-[840px]:pl-[50px] min-[840px]:text-start min-[840px]:block md:mt-9 items-center min-[840px]:items-start min-[840px]:ml-[-20px]">
                                <h1 className="font-bold text-lg mb-1 capitalize">{props.heading}</h1>
                                <div><BiTimeFive className="inline-block text-[#666] mr-2" /><h3 className="font-light text-xs text-[#666] font-sans inline-block">{props.time}</h3></div>
                                <p className="text-[12px] font-extralight text-[#666] my-6">{props.text}</p>
                                {props.url?<Explore name="SUBMIT" icon={AiOutlineArrowRight} url={props.url} />:""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}