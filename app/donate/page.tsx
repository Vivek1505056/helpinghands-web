import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationForm from "../components/DonationForm";

export default function Donate() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center text-white px-6 py-56">
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
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Make a Difference</h1>
          <p className="text-lg font-normal text-gray-300 max-w-xl">
            Your donation goes directly to feeding families in our community every Sunday.
          </p>
        </div>
      </section>

      {/* ── DONATION FORM ────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Donate Now</h2>
          <div className="w-10 h-1 bg-royalBlue-500 mb-10" />
          <DonationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
