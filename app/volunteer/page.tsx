import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Volunteer() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center text-white px-6 py-40 sm:py-72">
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
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Volunteer With Us</h1>
          <p className="text-lg font-normal text-gray-300 max-w-xl">
            We have been welcoming volunteers for over 6 years. If you have an hour on a Sunday,
            you have what it takes.
          </p>
          <a
            href="/get-help"
            className="mt-2 bg-royalBlue-500 hover:bg-royalBlue-600 text-white font-bold px-8 py-3 rounded transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* ── WHY VOLUNTEER ────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <div className="w-12 h-1 bg-royalBlue-500 mb-6" />
            <p className="text-lg font-normal text-gray-500 leading-relaxed mb-4">
              For over 6 years, volunteers have been the backbone of Helping Hands. Every
              Sunday we rely on people from this community to help sort, set up, and
              distribute food to over 80 families.
            </p>
            <p className="text-lg font-normal text-gray-500 leading-relaxed">
              No experience needed, no long commitments. Some volunteers come every week,
              others whenever they can. Either way, your time goes a long way.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden bg-gray-100 max-w-sm mx-auto w-full">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
              alt="Volunteers helping at a food bank"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-royalBlue-500 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold text-white">Ready to Join Us?</h2>
          <div className="w-12 h-1 bg-white/40" />
          <p className="text-lg font-normal text-royalBlue-100">
            Send us a message and we will get back to you with the details. No experience
            required, all are welcome.
          </p>
          <a
            href="/get-help"
            className="bg-white text-royalBlue-600 hover:bg-royalBlue-50 font-bold px-8 py-3 transition-colors"
          >
            Send Us a Message
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
