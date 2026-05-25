import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pb-12 border-b border-gray-800">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Helping Hands logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <p className="text-white font-bold text-2xl">
                Helping <span className="text-royalBlue-400">Hands</span>
              </p>
            </div>
            <p className="text-base font-normal leading-relaxed">
              A free community food bank out of Kings Embassy Int Ministry in North York,
              Ontario.
            </p>
            <p className="text-base font-normal">
              Every Sunday, 2:00 PM to 5:00 PM
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold text-base uppercase tracking-widest">Pages</p>
            <div className="flex flex-col gap-3 text-base font-normal">
              <a href="/"          className="hover:text-white transition-colors">Home</a>
              <a href="/about"     className="hover:text-white transition-colors">About</a>
              <a href="/volunteer" className="hover:text-white transition-colors">Volunteer</a>
              <a href="/get-help"  className="hover:text-white transition-colors">Get Help</a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold text-base uppercase tracking-widest">Contact</p>
            <div className="flex flex-col gap-3 text-base font-normal">
              <p>Kings Embassy Int Ministry</p>
              <p>415 Oakdale Rd, Unit 413<br />North York, Ontario, Canada</p>
              <a
                href="mailto:helpinghands@gmail.com"
                className="hover:text-white transition-colors"
              >
                helpinghands@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-normal text-gray-600">
          <p>&copy; {new Date().getFullYear()} Helping Hands. All rights reserved.</p>
          <p>Food supplied in partnership with Second Harvest.</p>
        </div>

      </div>
    </footer>
  );
}
