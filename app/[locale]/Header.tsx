import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="group relative transform hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-md blur-sm translate-y-[2px] group-hover:translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all" />
          <span className="relative text-xl font-bold text-white">
            Elytra Linux
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link 
            href="/docs" 
            className="group relative transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-md blur-sm translate-y-[2px] group-hover:translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all" />
            <span className="relative text-gray-300 hover:text-white transition-colors">
              Documentation
            </span>
          </Link>
          
          <Link 
            href="/community" 
            className="group relative transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="absolute inset-0 bg-green-500/20 rounded-md blur-sm translate-y-[2px] group-hover:translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all" />
            <span className="relative text-gray-300 hover:text-white transition-colors">
              Community
            </span>
          </Link>
          
          <Link 
            href="/blog" 
            className="group relative transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-md blur-sm translate-y-[2px] group-hover:translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all" />
            <span className="relative text-gray-300 hover:text-white transition-colors">
              Blog
            </span>
          </Link>

          <Link href="/download">
            <Button 
              size="sm"
              className="relative px-4 py-1.5 bg-blue-500 text-white font-medium rounded-lg
                transform hover:-translate-y-0.5 transition-all duration-200
                before:absolute before:inset-0 before:bg-blue-600 before:-z-10 before:translate-y-[2px] before:rounded-lg
                hover:before:translate-y-1
                active:translate-y-0.5 active:before:translate-y-0
                shadow-lg shadow-blue-500/20"
            >
              Download
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
