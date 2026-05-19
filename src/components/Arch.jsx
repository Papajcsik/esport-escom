export default function Arch() {
  return (
    <>
      <img src="/images/robot.png" alt="robot" className="abs-center h-70 w-84 scale-0" />
      <img src="/images/arch.png" alt="arch" className="abs-center h-82 w-96" />
      <div className="abs-center h-56 w-51 translate-y-[calc(-50%+2rem)]!">
        <img
          src="/images/door-left.png"
          alt="arch left"
          className="absolute left-0 h-full w-1/2 object-contain"
        />
        <img
          src="/images/door-right.png"
          alt="arch right"
          className="absolute right-0 h-full w-1/2 object-contain"
        />
      </div>
    </>
  );
}
