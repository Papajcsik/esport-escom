interface SVGStageProps {
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}

export default function SVGStage({
  children,
  viewBox = "0 0 1920 1080",
  className,
}: SVGStageProps) {
  return (
    <svg
      viewBox={viewBox}
      width="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
