import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Rocket } from "lucide-react";
import depth from "../../../public/depth.jpg";
import expert from "../../../public/expert.jpg";
import roadmap from "../../../public/roadmap.jpg";
import { AnimateOnScroll } from "./AnimateScroll";

const resources = [
  {
    title: "In-Depth Guides",
    description:
      "Learn how to validate your idea, create a business plan, and secure funding.",
    image: depth,
    icon: BookOpen,
  },
  {
    title: "Expert Blog",
    description:
      "Get the latest insights, success stories, and practical tips from industry leaders.",
    image: expert,
    icon: FileText,
  },
  {
    title: "Startup Roadmaps",
    description:
      "Follow proven frameworks to build and grow your business with confidence.",
    image: roadmap,
    icon: Rocket,
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="xl:w-[90%] 2xl:w-[75%] mx-auto space-y-12">
        <div className="">
          <div>
            <AnimateOnScroll delay={0.2}>
              <p className="text-blue-600 font-medium">Resources</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight mt-2">
                Learn & grow with<br></br> expert resources.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="flex items-center justify-between mt-6">
            <AnimateOnScroll delay={0.2}>
              <p className="text-gray-600 mt-3 max-w-xl">
                Stay ahead with valuable insights, expert advice, and
                step-by-step guides designed to help you succeed.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <Button
                variant="outline"
                className="hidden md:block animate-slide-up transition-all duration-500 hover:bg-black hover:text-white px-6 py-5"
              >
                All resources
              </Button>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <AnimateOnScroll key={idx} delay={0.2}>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <resource.icon className="w-5 h-5 text-blue-600" />
                    {resource.title}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
        <AnimateOnScroll delay={0.2}>
          <Button
            variant="outline"
            className="md:hidden animate-slide-up transition-all duration-500 hover:bg-black hover:text-white px-6 py-5"
          >
            All resources
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
