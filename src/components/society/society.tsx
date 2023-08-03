import Image from "next/image";

export default function Society() {
  return (
    <>
      <div className="flex sm:mt-48 gap-[80px_60px] flex-col items-center justify-center mx-auto sm:w-[100%] sm:flex-row">
        <div className="h-12">
          <Image
            src={"/assets/cs_black.png"}
            alt="poster"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-full opacity-75 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </>
  );
}

