import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative py-10 md:px-0 px-6 overflow-hidden">
      <div className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl py-24 lg:py-36 px-10">
        <div className="flex flex-col lg:w-2/3 justify-center">
          <h1 className="text-3xl md:text-7xl font-bold leading-snug">
            Your AI-Powered <span className="text-primary">Design</span>{" "}
            Assistant
          </h1>
          <p className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8">
            Unlock your creative potential. Seamlessly generate, customize, and
            perfect your designs with cutting-edge AI technology.
          </p>
          <div className="flex items-center justify-start gap-4">
            <Button size="lg">Get Started</Button>
            <Link href="#" className="hover:underline">
              Hire Mohit
            </Link>
          </div>
        </div>
        <div className="absolute bottom-[-45%] lg:bottom-[-32%] right-[-8%] overflow-hidden">
          <img
            className="lg:w-[610px] w-[250px]"
            src="https://framerusercontent.com/images/cLhE0zz9KoEfqjG2JcfNsvEDpA0.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
