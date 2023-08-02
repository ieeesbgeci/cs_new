import Hero from "@/sections/hero/hero"
import Why from "@/sections/why/why"
import Join from "@/sections/join/join"
import Execom from "@/sections/execom/execom"
import Events from "@/sections/events/events"
import Gallery from "@/sections/gallery/gallery"
import Archives from "@/sections/archives/archives"
export default function Home() {
  return (
    <>
      <Hero/>
      <Why/>
      <Join/>
      <Execom/>
      <Archives />
      <Events/>
      <Gallery/>
    </>
  )
}
