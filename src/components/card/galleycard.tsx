import Image from "next/image"
export default function Gallerycard(props:{name:string,className?:string}) {
    return (
        <>
            <div className={`${props.className} w-full h-auto inline-block bg-white p-1 rounded-[6px] cursor-pointer shadow-[0px_0px_2px_0px_#86D1FF]`}><div className="overflow-hidden rounded-[4px]"><Image src={`/assets/gallery/${props.name}`} alt="join ieee" width="0" height="0" sizes="100vw" className="w-full h-auto rounded-[4px] hover:scale-105 transition-[transform] duration-300 "/></div></div>
        </>
    )
}