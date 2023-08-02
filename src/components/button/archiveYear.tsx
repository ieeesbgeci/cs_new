export default function ArchiveYear(props: { name: string, className?: string }) {
    return (
        <>
            <div className="flex relative">
                <div className={`${props.className} buttons text-md w-[78px] font-light text-center h-[36px] leading-[28px] inline-block py-[3px] px-[14px] rounded border-double border-[1.5px] border-transparent bg-[linear-gradient(white,white),radial-gradient(circle_at_top_left,#F42D98,#955DCB)] bg-origin-border bg-clip-both relative`}>
                    {props.name}
                </div>
                <div className="bg-[#ff00df] h-[36px] w-[78px] absolute top-[0px] z-[-3] blur-[3px] scale-x-105 scale-y-110 ">
                </div>
            </div>
        </>
    )
}