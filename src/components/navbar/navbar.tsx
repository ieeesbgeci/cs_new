'use client'
import Image from "next/image"
import { useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { useRouter } from 'next/navigation';
export default function Navbar() {
    const { push } = useRouter();
    let b: Element | null, a: Element | null,c: Element | null,d:Element | null;
    function menuHandler() {
        b?.classList.remove("hidden")
        a?.classList.remove("flex")
        a?.classList.add("hidden")
        b?.classList.add("flex")
        c?.classList.remove("hidden")
        c?.classList.add("block")
        d?.classList.remove("enable-scroll")
        d?.classList.add("disable-scroll")

    }
    function removeHandler() {
        a?.classList.remove("hidden")
        b?.classList.remove("flex")
        b?.classList.add("hidden")
        a?.classList.add("flex")
        c?.classList.remove("block")
        c?.classList.add("hidden")
        d?.classList.remove("disable-scroll")
        d?.classList.add("enable-scroll")
    }
    function why(){
        let element = document.getElementById("whyieee");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#whyieee');
        }
    }
    function execom(){
        let element = document.getElementById("Execom");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#Execom');
        }
    }
    function gallery(){
        let element = document.getElementById("Gallery");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#Gallery');
        }
    }
    function contact(){
        let element = document.getElementById("Contact");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#Contact');
        }
    }
    function join(){
        let element = document.getElementById("Join");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#Join');
        }
    }
    function event(){
        let element = document.getElementById("Events");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#Events');
        }
    }
    function archives(){
        let element = document.getElementById("Archives");
        if(element){
            element!.scrollIntoView({behavior: "smooth",block:"start"});
        }else{
            push('/#Archives');
        }
    }
    useEffect(() => {
        a = document.querySelector(".menu-icon")
        b = document.querySelector(".remove-icon")
        c = document.querySelector(".menu-small")
        d = document.querySelector("body")
        a?.addEventListener('click', menuHandler)
        b?.addEventListener('click', removeHandler)
    }, [])
    return (
        <>
            <div className="flex justify-between h-16 bg-[rgba(248,252,251,0.8)] z-[2] backdrop-blur-sm backdrop-saturate-150 fixed top-0 w-full ">
                <Link href="/"><Image src={"/assets/cs_black.png"} alt="logo" width={100} height={100} className="ml-10 inline-block min-[960px]:ml-24 my-3" /></Link>
                <HiOutlineMenuAlt4 strokeWidth="1" className="menu-icon text-4xl mx-10 flex min-w-[30px] h-16 cursor-pointer md:hidden" />
                <HiOutlineX strokeWidth="1" className="remove-icon text-4xl mx-10 hidden min-w-[30px] h-16 md:hidden cursor-pointer" />
                <div className="hidden my-16 bg-[rgba(248,252,251,1)] h-[calc(100vh-64px)] absolute w-full menu-small leading-[4rem] md:inline-block md:my-0 min-[960px]:mr-28 md:mr-16 md:w-auto md:static md:h-auto md:bg-transparent">
                    <ul className="nav-item-inner text-[0.8rem] font-light text-[color:var(--subheading)] font-medium md:flex md:gap-10">
                        <li className="border-b md:border-0 cursor-pointer" onClick={why}>Why CS?</li>
                        <li className="border-b md:border-0 cursor-pointer" onClick={join}>Join Ieee</li>
                        <li className="border-b md:border-0 cursor-pointer" onClick={execom}>Execom</li>
                        <li className="border-b md:border-0 cursor-pointer" onClick={archives}>Archives</li>
                        <li className="border-b md:border-0 cursor-pointer" onClick={event}>Events</li>
                        <li className="border-b md:border-0 cursor-pointer" onClick={gallery}>Gallery</li>
                        <li className="border-b md:border-0 cursor-pointer" onClick={contact}>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}