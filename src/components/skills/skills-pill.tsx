import Image from "next/image";

export type SkillPillProps = {
  name: string;
  icon: string; // a string path
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      <Image
        src={icon}
        alt={`${name} logo`}
        width={32}
        height={32}
        className="h-5 w-5 object-contain sm:h-8 sm:w-8"
      />
      <span className="font-medium">{name}</span>
    </div>
  );
}
