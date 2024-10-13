import Link from "next/link";
import { Button } from "./ui/button";

const SingleCta = () => {
  return (
    <div className="relative py-12 md:px-0 px-6 overflow-hidden my-20">
      <div className="relative container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl py-20 px-10">
        <div className="flex flex-col lg:w-1/2 justify-center">
          <h1 className="text-3xl md:text-6xl font-bold leading-snug">
            Start Your Design <span className="text-primary">Journey</span>{" "}
            Today
          </h1>
          <p className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8">
            Sign up now and experience the power of AI-driven design without any
            commitment.
          </p>
          <div className="flex items-center justify-start gap-4">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
        <div className="absolute bottom-[-45%] lg:bottom-[-32%] right-[-8%] overflow-hidden">
          <img className="lg:w-[540px] w-[250px]" src="/cta-single-img.avif" />
        </div>
      </div>
    </div>
  );
};

export default SingleCta;
