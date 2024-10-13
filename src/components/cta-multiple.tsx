import { Button } from "./ui/button";

const CtaMultiple = () => {
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-[500] w-full lg:w-1/2 leading-snug">
                High-Resolution Outputs
              </h2>
              <p className="max-w-lg my-5">
                Download your final designs in high-resolution formats suitable
                for print and digital use. Ensure your work looks professional
                and polished in any medium.
              </p>
              <Button className="w-fit" size="lg">
                Get Started
              </Button>
            </div>
            <div>
              <img className="h-[471px]" src="cta-multiple-1.avif" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3">
              <img className="h-[471px]" src="cta-multiple-2.avif" />
            </div>
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-[500] w-full lg:w-1/2 leading-snug">
                Real-Time Collaboration
              </h2>
              <p className="max-w-lg my-5">
                Seamlessly collaborate with your team in real-time. Share ideas,
                give feedback, and make edits together, no matter where you are.
              </p>
              <Button className="w-fit" size="lg">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col w-full lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-[500] w-full lg:w-1/2 leading-snug">
                Advanced Scheduling Tools
              </h2>
              <p className="max-w-lg my-5">
                Plan and schedule your design projects with ease. Use our
                scheduling tools to set deadlines, track milestones, and ensure
                timely delivery of your design work.
              </p>
              <Button className="w-fit" size="lg">
                Get Started
              </Button>
            </div>
            <div>
              <img className="h-[471px]" src="cta-multiple-3.avif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaMultiple;
