import Marquee from "react-fast-marquee"

export default function PageMarquee() {
  return (
    <div className="common-marquee bg-black">
        <Marquee autoFill={true} speed={60}>
            <h4 className="mb-0 text-uppercase text-white">loop bar</h4>
        </Marquee>
    </div>
  )
}
