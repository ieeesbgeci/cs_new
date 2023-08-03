import { BiBook, BiCalendar, BiNews, BiMedal, BiCheckShield } from "react-icons/bi";

export default function Whymap() {
    return (
        <>
            <div className="flex justify-center flex-col items-center gap-[60px] mx-auto w-max">
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:ml-36">
                    <div className="buttons text-3xl mx-9 inline-block font-medium block w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full">
                        <BiBook className="inline-block" />
                    </div>
                    <div className="w-80 inline-block text-center"><h2>Computer Society Digital Library</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">CSDL includes all articles and documents from magazines and transactions IEEE Computer Society publishes, dating back to the very first issue.</p></div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:mr-36">
                    <div className="w-80 inline-block text-center order-1 md:order-[0]"><h2>Conferences & Events</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">Deep discounts on all IEEE Computer Society events!</p></div>
                    <div className="buttons text-3xl inline-block font-medium block mx-9 w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full">
                        <BiCalendar className="inline-block" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:ml-36">
                    <div className="buttons text-3xl mx-9 inline-block font-medium block w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full">
                        <BiNews className="inline-block" />
                    </div>
                    <div className="w-80 inline-block text-center"><h2>Computer Magazine</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">The IEEE Computer Society’s award-winning, peer-reviewed flagship magazine (delivered monthly)</p></div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:mr-36">
                    <div className="w-80 inline-block text-center order-1 md:order-[0]"><h2>Scholarships and Awards</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">Apart from the travel grants, IEEE provides various scholarships to its members.More than US $40,000 in scholarships plus travel grants from the IEEE Computer Society.</p></div>
                    <div className="buttons text-3xl inline-block font-medium block mx-9 w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full">
                        <BiMedal className="inline-block" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[20px] md:flex-row md:ml-36">
                    <div className="buttons text-3xl mx-9 inline-block font-medium block w-20 h-20 text-center leading-[4.7rem] rounded-full border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both after:content-[''] relative after:absolute after:z-[-3] after:inset-[-.125em] after:bg-[linear-gradient(#F42D98,#955DCB)] after:blur after:opacity-50 after:rounded-full">
                        <BiCheckShield className="inline-block" />
                    </div>
                    <div className="w-80 inline-block text-center"><h2>Certification</h2><p className="mt-1 text-xs font-extralight text-[#666] mx-auto">IT Skills & Certifications, Desktop & Certifications, Business & Leadership Skills</p></div>
                </div>
            </div>
        </>
    );
}
