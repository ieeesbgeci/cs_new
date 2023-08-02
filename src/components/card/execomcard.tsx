import Image from "next/image"
import {HiMail} from 'react-icons/hi'
import {IoCallSharp} from 'react-icons/io5'
import {FaLinkedin} from 'react-icons/fa'
export default function Execomcard(props:{className?:string,src:string,name:string,position:string,soceity:string,phone?:string,mail?:string,linkedin?:string}){
    return(
        <>
            <div className={`${props.className} bg-[rgba(246,252,251,1)] drop-shadow-xl h-[357px] min-w-[204px] max-w-[204px] mx-[21px] bg-[rgba(248,252,251,0.7)] rounded-2xl relative flex py-10 flex-col items-center gap-2 execom-card`}>
                <div className="rounded-full w-40 h-40 overflow-hidden border-[4px] border-white"><Image src={`/assets/execom/${props.src}`} alt="execom" width="120" height="120" className="w-full"/></div>
                <h2 className="font-medium">{props.name}</h2>
                <div className="text-center text-xs text-[#666] font-extralight">
                    <h4>{props.position}</h4>
                    <h4>{props.soceity}</h4>
                </div>
                <div className="flex gap-3 my-3">{props.phone?<a href={`tel:${props.phone}`} ><IoCallSharp /></a>:""}{props.mail?<a href={`mailto:${props.mail}`} ><HiMail /></a>:""}{props.linkedin?<a href={props.linkedin} ><FaLinkedin /></a>:""}</div>
            </div>
        </>
    )
}