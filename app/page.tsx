import Data from "@/components/Data";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 z-[-2] min-h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-3">
        <Navbar />
        <Form />
        <Data />
      </div>
    </div>
  );
}
