import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-6 py-4 fixed left-0 right-0 top-0 mb-6 bg-gray-100 z-50">
      <div className="flex items-center justify-between xl:w-[90%] 2xl:w-[75%]">
        <div className="text-3xl font-semibold">🍃 vestry</div>

        <nav className="hidden lg:flex gap-6 text-gray-600 text-lg">
          <span className="cursor-pointer hover:text-black">Demos</span>
          <span className="cursor-pointer hover:text-black">Company</span>
          <span className="cursor-pointer hover:text-black">Services</span>
          <span className="cursor-pointer hover:text-black">Resources</span>
          <span className="cursor-pointer hover:text-black">All pages</span>
        </nav>
        <Button
          variant="outline"
          className="animate-slide-up transition-all duration-500 hover:bg-black hover:text-white"
        >
          Let’s talk
        </Button>
      </div>
    </header>
  );
}
