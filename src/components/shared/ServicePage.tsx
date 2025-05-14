import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import branding from "../../../public/branding.png";
import business from "../../../public/business.png";
import growth from "../../../public/growth.png";

const services = [
  {
    title: "Business Planning",
    description: "Step-by-step guidance to create a solid business plan.",
    image: business,
  },
  {
    title: "Growth Strategies",
    description: "Proven methods to scale and expand your business.",
    image: growth,
  },
  {
    title: "Branding & Marketing",
    description:
      "Expert insights to build a strong brand and attract customers.",
    image: branding,
  },
];

const steps = [
  {
    number: 1,
    title: "Plan & Strategize",
    text: "Use our expert-guided tools to refine your business idea, create a roadmap, and set clear goals.",
  },
  {
    number: 2,
    title: "Mentorship",
    text: "Learn from industry experts through step-by-step guides, mentorship programs, and educational content.",
  },
  {
    number: 3,
    title: "Build Your Brand",
    text: "Explore financial strategies, investment opportunities, and proven branding techniques to grow with confidence.",
  },
  {
    number: 4,
    title: "Launch & Scale",
    text: "Implement marketing, operational, and growth strategies to turn your vision into a thriving business.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white py-10 px-5">
      <div className="xl:w-[90%] 2xl:w-[75%] mx-auto">
        <div className="md:flex items-center justify-between my-10">
          <div>
            <h2 className="text-sm font-semibold">
              We offer everything you need to launch and scale your business
            </h2>

            <h1 className="md:text-2xl hidden md:block text-xl font-bold mt-2">
              Our services are designed to guide entrepreneurs <br />
              at every stage, from idea to growth.
            </h1>
            <h1 className="md:text-2xl md:hidden text-xl font-bold mt-2">
              Our services are designed to guide entrepreneurs
              at every stage, from idea to growth.
            </h1>
          </div>
          <Button className="hidden md:block animate-slide-up transition-all duration-500 hover:bg-black hover:text-white px-6 py-4" variant="outline">
            All Services
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden text-black">
              <img
                src={service.image.src}
                alt={service.title}
                className="w-full lg:h-80 h-52 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
                <Button className="animate-slide-up transition-all duration-500 hover:bg-white hover:text-black my-6" variant="default">
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}

          <Button className="md:hidden animate-slide-up transition-all duration-500 hover:bg-black hover:text-white px-6 py-4" variant="default">
            All Services
          </Button>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white my-6">
          {steps.map((step) => (
            <div key={step.number} className="space-y-2">
              <div className="flex items-center">
                <div className="text-black bg-white w-9 h-9 rounded-lg flex items-center justify-center">
                  {step.number}
                </div>
                <h4 className="font-semibold ml-3 text-2xl">{step.title}</h4>
              </div>
              <p className="text-base text-gray-200">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
