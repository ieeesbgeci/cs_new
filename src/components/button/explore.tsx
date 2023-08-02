import { IconType } from "react-icons";
import Link from "next/link";
export default function Explore({name:names,icon:Icons,url:url,className}:{name:string,icon:IconType,url:string,className?:string}){
    return(
        <>
        <div className="flex"><Link href={url}><div className={`${className} hover:scale-105 duration-300 transition-[transform] buttons text-xs text-center h-[28px] leading-[20px] inline-block py-[3px] px-[14px] rounded border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both relative`}>{names}<Icons className="inline-block ml-0.5"/></div><div className="bg-[#ff00df] h-[28px] relative top-[-28px] z-[-3] blur-[4px] scale-x-105 scale-y-110 "></div></Link></div>
        </>
    )
}