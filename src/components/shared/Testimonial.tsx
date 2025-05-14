import Image from "next/image";
import girlie from "../../../public/girlie.webp";
import logo1 from "../../../public/logo1.svg";
import logo2 from "../../../public/logo2.svg";
import logo3 from "../../../public/logo3.svg";
import logo4 from "../../../public/logo4.svg";
import logo5 from "../../../public/logo6.svg";
import logo6 from "../../../public/logo6.svg";

const logos = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
  { image: logo6 },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 md:py-20 py-12 px-6">
      <div className="xl:w-[90%] 2xl:w-[75%] mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:hidden">
            <p className="text-2xl md:text-3xl font-semibold text-black leading-snug mb-6">
              “Vestry gave me the confidence and guidance I needed to start my
              business. The resources and mentorship were game-changers!”
            </p>
            <p className="text-gray-600 font-medium">
              Emily R., Founder of Bloom & Co.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-100 p-2 rounded-xl">
              <Image
                src={girlie}
                alt="Emily R."
                width={500}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="hidden md:block">
            <p className="text-2xl md:text-3xl font-semibold text-black leading-snug mb-6">
              “Vestry gave me the confidence and guidance I needed to start my
              business. The resources and mentorship were game-changers!”
            </p>
            <p className="text-gray-600 font-medium">
              Emily R., Founder of Bloom & Co.
            </p>
          </div>
        </div>

        {/* Logo Row */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            More than 50+ trusted partners.
          </p>
          <div className="flex justify-between flex-wrap items-center gap-6 grayscale">
            {logos.map((logos, idx) => (
              <Image
                key={idx}
                src={logos.image.src}
                alt={`Partner logo ${idx + 1}`}
                width={100}
                height={40}
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
