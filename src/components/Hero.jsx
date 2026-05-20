import Arch from "./Arch";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen overflow-hidden">
      <img
        src="/images/sky.webp"
        alt="sky"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src="/images/city.webp"
        alt="city"
        className="absolute bottom-0 left-0 h-[clamp(180px,28vw,360px)] w-full object-cover object-bottom"
      />
      <Arch />
      <img
        src="/images/contractor.webp"
        alt="contractor"
        className="absolute bottom-0 left-0 h-96 w-102 translate-y-[8%]"
      />
    </section>
  );
}
