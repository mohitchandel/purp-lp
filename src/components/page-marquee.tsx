import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const logos = [
  {
    img: "/logos/logo-ispum-1.avif",
  },
  {
    img: "/logos/logo-ispum-2.avif",
  },
  {
    img: "/logos/logo-ispum-3.avif",
  },
  {
    img: "/logos/logo-ispum-4.avif",
  },
  {
    img: "/logos/logo-ispum-5.avif",
  },
  {
    img: "/logos/logo-ispum-6.avif",
  },
];

const row = logos.slice(0, logos.length / 2);

const LogoCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "flex relative w-64 cursor-pointer overflow-hidden items-center justify-center rounded-xl p-4 bg-zinc-800 dark:bg-transparent"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-6">
        <img width={180} className="rounded-full" alt="" src={img} />
      </div>
    </figure>
  );
};

const PageMarquee = () => {
  return (
    <div className="container mx-auto md:max-w-[1200px]">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
        <Marquee className="[--duration:20s]">
          {row.map((logos, i) => (
            <LogoCard key={i} {...logos} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default PageMarquee;
