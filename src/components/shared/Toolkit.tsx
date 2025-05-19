import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import toolkit from "../../../public/toolkit.webp"

const features = [
  {
    title: "Comprehensive Business Tools",
    description: "From planning to scaling, we offer everything you need in one place.",
  },
  {
    title: "Expert Mentorship & Guidance",
    description: "Learn from successful entrepreneurs and industry leaders.",
  },
  {
    title: "Funding & Financial Support",
    description: "Get insights into securing investments and managing business finances.",
  },
];

const ToolkitSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="xl:w-[90%] 2xl:w-[75%] mx-auto grid md:grid-cols-2 lg:gap-10 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-3xl xl:text-5xl font-semibold text-gray-900 mb-4">
            We provide the ultimate <br /> toolkit for entrepreneurs.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our platform offers expert guidance, financial insights, marketing strategies, and a strong
            community to help founders navigate every stage of their journey.
          </p>

          <div className="lg:space-y-10 space-y-5">
            {features.map((feature, i) => (
              <div key={i} className="border-b lg:pb-8 pb-4">
                <h4 className="md:text-xl mb-1 text-2xl font-semibold text-gray-500">{feature.title}</h4>
                <p className="text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>

          <Button className="mt-6 py-4 px-8" variant="default">Lets get started</Button>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg lg:w-[460px] xl:w-[520px]">
          <Image
            src={toolkit}
            alt="Entrepreneur workspace"
            className="w-full md:w-[350px] lg:w-[460px] xl:w-[520px] xl:h-[600px] lg:h-[510px] object-cover"
          />
          <div className="bg-black/60 text-white p-4 text-sm flex items-center gap-2">
            <Badge variant="secondary" className="bg-white text-black">🌱</Badge>
            Our platform equips entrepreneurs with the tools, knowledge, and resources to build and scale successfully.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
