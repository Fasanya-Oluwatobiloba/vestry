import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import about from "../../../public/about.webp";

const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace creative thinking and forward-looking solutions to empower progress.",
  },
  {
    title: "Community",
    description:
      "We believe in connection and collaboration to build stronger networks.",
  },
  {
    title: "Integrity",
    description:
      "We act with honesty, transparency, and accountability in everything we do.",
  },
  {
    title: "Growth",
    description:
      "We are committed to continuous learning, improvement, and helping others succeed.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <div className="bg-gray-50 px-5 py-24">
      <section className="xl:w-[90%] 2xl:w-[75%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="container flex flex-col md:flex-row md:items-center gap-y-10 md:gap-y-0 xl:gap-36 lg:gap-10 gap-6">
            <div className="md:hidden">
              <h2 className="text-blue-600 uppercase text-sm font-semibold tracking-wide">
                About us
              </h2>
              <h1 className="text-4xl md:text-[35px] lg:text-4xl xl:text-5xl font-semibold leading-tight">
                We help entrepreneurs turn their ideas into successful
                businesses.
              </h1>
              <p className="text-gray-600 text-lg md:text-sm">
                We empower entrepreneurs with the tools, knowledge, and
                resources needed to turn ideas into successful businesses.
              </p>
            </div>
            <div className="md:w-[310px] lg:w-[500px] xl:w-[600px]">
              <Card className="overflow-hidden rounded-lg">
                <CardContent>
                  <Image
                    src={about}
                    alt="Team members"
                    className="lg:w-full md:w-[310px] w-full lg:h-[500px] object-cover"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="hidden md:block">
                <h2 className="text-blue-600 uppercase text-sm font-semibold tracking-wide">
                  About us
                </h2>
                <h1 className="text-4xl md:text-[35px] lg:text-4xl xl:text-5xl font-semibold leading-tight">
                  We help entrepreneurs turn their ideas into successful
                  businesses.
                </h1>
                <p className="text-gray-600 text-lg md:text-sm">
                  We empower entrepreneurs with the tools, knowledge, and
                  resources needed to turn ideas into successful businesses.
                </p>
              </div>

              <div className="lg:grid grid-cols-1 sm:grid-cols-2 gap-6 hidden">
                {coreValues.map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-5 h-2 bg-blue-500 rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-lg font-semibold">{value.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-8 lg:hidden">
          {coreValues.map((value) => (
            <div key={value.title} className="flex items-start gap-3">
              <div className="w-3 h-2 bg-blue-500 rounded-full mt-3"></div>
              <div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
