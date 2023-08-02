export default function Headings(props:{contWidth?:string,xSecond?:number,xFirst?:number,xThird?:number,textFirst?:string,textsecond?:string,textThird?:string,firstPart?:string,secondPart?:string}) {

    return (
        <>
            <div className={props.contWidth+" mx-auto overflow-hidden"}>
                <svg className="text-3xl font-bold h-[35px] inline-block">
                    {props.textFirst?<><text y="22" >{props.textFirst}</text>
                    {props.textsecond?<text y="22" className="fill-none stroke-[#27B7F4] stroke-[1.5] stroke-linejoin-miter paint-order-stroke" x={props.xFirst!+8}>{props.textsecond}</text>:""}
                    {props.textThird?<text y="22" x={props.xSecond!+props.xFirst!+16}>{props.textThird}</text>:""}
                    </>:<><text y="22" >{props.firstPart}</text><text y="22" className="fill-none stroke-[#27B7F4] stroke-[1.5] stroke-linejoin-miter paint-order-stroke" x={props.xFirst}>{props.secondPart}</text></>}
                </svg>
            </div>
        </>
    )
}