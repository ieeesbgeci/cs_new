import Image from "next/image"
import Gallerycard from "./galleycard"
export default function Gallerycardcontmain() {
    return (
        <>
            <div className="w-[90%] mx-auto mb-24">
                <div className="w-full flex flex-col sm:flex-wrap sm:flex-row">
                    <div className="w-full md:w-4/12 sm:w-[50%] inline-flex flex-col gap-[5px] px-0.5">
                        <Gallerycard name="try3.png" />
                        <Gallerycard name="try4.jpg" />
                    </div>
                    <div className="w-full inline-flex sm:w-[50%] md:w-4/12 flex-col gap-[5px] px-0.5">
                        <Gallerycard name="banner2.JPG" />
                        <Gallerycard name="banner1.jpg" />
                    </div>
                    <div className="w-full inline-flex sm:hidden md:inline-flex md:w-4/12 flex-col gap-[5px] px-0.5">
                        <Gallerycard name="banner1.jpg" />
                        <Gallerycard name="banner3.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}