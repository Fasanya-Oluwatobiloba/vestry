import Image from "next/image";
import { Button } from "@/components/ui/button";
import office from "../../../public/office.webp";
import { AnimateOnScroll } from "./AnimateScroll";

export default function Impact() {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-800 text-white">
      <div className="mx-auto xl:w-[90%] 2xl:w-[75%] flex flex-col md:flex-row items-center justify-center px-6 md:py-20 py-10">
        <div className="md:hidden md:text-left mt-10 md:mt-0 md:ml-16 md:w-1/2 space-y-6 mb-6">
          <AnimateOnScroll delay={0.2}>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Turn your idea into <br /> a thriving business.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-gray-200 max-w-md">
              Join Vestry and get the tools, mentorship, and resources you need
              to launch and scale successfully.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>◘</AnimateOnScroll>
        </div>
        <div className="flex flex-col items-start space-y-6 md:w-1/2 ">
          <AnimateOnScroll delay={0.2}>
            <span className="text-sm font-medium">Contact us</span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="rounded-md overflow-hidden shadow-md">
              <Image
                src={office}
                alt="Mac on a desk"
                className="w-[350px] h-52 object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div className="hidden md:block text-center md:text-left mt-10 md:mt-0 md:ml-16 md:w-1/2 space-y-6">
          <AnimateOnScroll delay={0.2}>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Turn your idea into <br /> a thriving business.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-gray-200 max-w-md">
              Join Vestry and get the tools, mentorship, and resources you need
              to launch and scale successfully.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <Button
              variant="outline"
              className="text-base font-medium px-6 py-6 animate-slide-up transition-all duration-500 hover:bg-black hover:text-white"
            >
              Let’s get started
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
