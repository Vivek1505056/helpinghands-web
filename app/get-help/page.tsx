import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function GetHelp() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center text-white px-6 py-72">
        <div
          className="absolute origin-center scale-[0.88]"
          style={{
            inset: "-8%",
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">We&apos;re Here For You</h1>
          <p className="text-lg font-normal text-gray-300 max-w-xl">
            Need food, want to volunteer, or just have a question? Send us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">

          {/* ── Contact Form ── */}
          <div className="p-10 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <div className="w-10 h-1 bg-royalBlue-500" />
            </div>

            <ContactForm />
          </div>

          {/* ── Info panel ── */}
          <div className="bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-10 flex flex-col gap-10 justify-center">

            <div className="flex flex-col gap-3">
              <div className="w-8 h-0.5 bg-royalBlue-500" />
              <h3 className="text-xl font-bold text-gray-800">Location</h3>
              <p className="text-base font-normal text-gray-500 leading-relaxed">
                Kings Embassy Int Ministry<br />
                415 Oakdale Rd, Unit 413<br />
                North York, Ontario, Canada
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-8 h-0.5 bg-royalBlue-500" />
              <h3 className="text-xl font-bold text-gray-800">Distribution Hours</h3>
              <p className="text-base font-normal text-gray-500 leading-relaxed">
                Every <span className="font-bold text-gray-700">Sunday</span><br />
                <span className="font-bold text-gray-700">2:00 PM</span> – <span className="font-bold text-gray-700">5:00 PM</span><br />
                No appointment needed.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-8 h-0.5 bg-royalBlue-500" />
              <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
              <a
                href="mailto:helpinghands@gmail.com"
                className="text-base font-normal text-royalBlue-600 underline underline-offset-4 hover:text-royalBlue-800 transition-colors"
              >
                helpinghands@gmail.com
              </a>
            </div>

            <div className="bg-royalBlue-500 p-6">
              <p className="text-white font-bold text-lg mb-1">Just need food?</p>
              <p className="text-royalBlue-100 text-base font-normal">
                You don&apos;t need to fill out this form. Just show up on Sunday between
                2 and 5pm. We&apos;ll be there.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
