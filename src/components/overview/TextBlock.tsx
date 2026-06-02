import type { GameSection } from "@/types/types";

interface Props {
  section: GameSection;
}

export function TextBlock({ section }: Props) {
  return (
    <div className="flex flex-col mb-8">
      <h3 className="font-bold text-white uppercase tracking-widest text-[4cqi]">
        {section.title}
      </h3>
      <p className="text-white leading-loose tracking-wide whitespace-pre-line text-[2.5cqi]">
        {section.text}
      </p>
    </div>
  );
}
