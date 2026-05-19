import Arch from "./Arch";

export default function Hero() {
  return (
    <section className="relative flex-1 overflow-hidden">
      <img
        src="/images/sky.png"
        alt="sky"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src="/images/city.png"
        alt="city"
        className="absolute bottom-0 left-0 h-[clamp(280px,28vw,360px)] w-full object-cover object-bottom"
      />
      <Arch />
      <img
        src="/images/contractor.png"
        alt="contractor"
        className="absolute bottom-0 left-0 h-86 w-96"
      />
    </section>
  );
}
