import type { GameSection } from "@/types/types";

interface Props {
  section: GameSection;
}

export function TextBlock({ section }: Props) {
  return (
    <div data-textblock className="flex flex-col text-center">
      <h3 className="font-bold text-white uppercase tracking-widest max-md:text-[2.8cqi] text-[3cqi]">
        {section.title}
      </h3>
      <p className="text-white leading-loose tracking-wide whitespace-pre-line max-md:text-[2.1cqi] text-[2.5cqi]">
        {section.text}
      </p>
    </div>
  );
}
