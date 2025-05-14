import Image from "next/image";
import { Button } from "@/components/ui/button";
import vestygirl from "../../../public/vestygirl.webp";

export default function Hero() {
  return (
    <section className="w-full pb-12 lg:pt-24 md:pt-16 pt-24 px-5 bg-gray-100">
      <div className="xl:w-[90%] 2xl:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
            Empowering ideas building futures.
          </h1>
          <p className="text-lg text-gray-600">
            A platform provides entrepreneurs with the essential tools, resources, and guidance needed to launch, grow, and scale with confidence.
          </p>
          <div className="flex gap-4">
            <Button variant="default" className="animate-slide-up transition-all duration-500 hover:bg-white hover:text-black">
              Let’s get started
            </Button>
            <Button variant="outline" className="animate-slide-up transition-all duration-500 hover:bg-black hover:text-white">
              About us
            </Button>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <div className="text-yellow-500 text-xl">★★★★★</div>
            <p className="text-gray-700 font-medium text-sm">4.9 From 500+</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src={vestygirl}
            alt="Hero"
            className="w-full h-auto rounded-md object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-md max-w-xs text-sm">
            <p>
              "Vestry gave me the confidence and tools to turn my side hustle into a full-time business. Community support was exactly what I needed."
            </p>
            <p className="mt-2 text-gray-500">Emily R., Founder of Bloom 🌿🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
}
