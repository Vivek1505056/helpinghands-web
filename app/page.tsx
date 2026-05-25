import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans">

      {/* ── 1. NAVBAR ───────────────────────────────────────────── */}
      <Navbar />

      {/* ── 2. HERO ─────────────────────────────────────────────── */}
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
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Many Hands, One Mission.
          </h1>
          <p className="text-lg font-normal text-gray-300 max-w-xl">
            Every Sunday we open our doors and feed whoever shows up. No forms, no fuss.
            Just food and people who care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/get-help"
              className="bg-royalBlue-500 hover:bg-royalBlue-600 text-white font-bold px-8 py-3 rounded shadow-sm transition-colors"
            >
              Get Food Today
            </a>
            <a
              href="/about"
              className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold px-8 py-3 rounded transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. THE PROBLEM ──────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hunger Is Closer Than You Think
            </h2>
            <div className="w-12 h-1 bg-royalBlue-500 mx-auto mb-8 rounded-full" />
            <p className="text-lg font-normal text-gray-500 leading-relaxed max-w-2xl mx-auto mb-14">
              Food insecurity doesn&apos;t look the way most people picture it. It&apos;s your
              neighbour, a kid at school, someone you would never guess. Thousands of families
              in our area go without enough food, not because they don&apos;t try, but because
              it&apos;s genuinely hard to keep up.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { stat: "1 in 8", desc: "Americans face hunger each year" },
                { stat: "30%",    desc: "Of those are children under 18" },
                { stat: "$0",     desc: "Is what it costs to walk through our doors" },
              ].map(({ stat, desc }) => (
                <div
                  key={stat}
                  className="bg-gray-50 border border-gray-100 rounded p-8 flex flex-col items-center gap-3"
                >
                  <p className="text-5xl font-bold text-royalBlue-500">{stat}</p>
                  <p className="text-base font-normal text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 4. QUICK IMPACT STATS ───────────────────────────────── */}
      <StatsSection />

      {/* ── 5. OUR MISSION / WHAT WE DO ─────────────────────────── */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="w-12 h-1 bg-royalBlue-500 mb-6 rounded-full" />
            <p className="text-lg font-normal text-gray-500 leading-relaxed mb-4">
              Helping Hands is a free food bank out of Kings Embassy Int Ministry in North
              York. Every Sunday we hand out fresh produce and pantry staples to whoever
              needs it. Over 80 families come through each week.
            </p>
            <p className="text-lg font-normal text-gray-500 leading-relaxed">
              We get our food through{" "}
              <span className="font-bold text-royalBlue-600">Second Harvest</span>, which
              means we&apos;re not guessing week to week. We have what we need, and our
              community knows we&apos;ll be there.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: "/img1.jpg",  position: "object-center", scale: "scale-150" },
              { src: "/img2.jpg",  position: "object-center", scale: "scale-150" },
              { src: "/img4.jpeg", position: "object-center", scale: "scale-150" },
              { src: "/img3.webp", position: "object-center", scale: "scale-100" },
            ].map(({ src, position, scale }, i) => (
              <div key={src} className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={src}
                  alt={`Helping Hands photo ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover ${position} ${scale}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROGRAMS / SERVICES ──────────────────────────────── */}
      <section id="programs" className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <div className="w-12 h-1 bg-royalBlue-500 mb-12 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Fresh Produce",
                body: "Fruits and vegetables sourced weekly through Second Harvest. Fresh, seasonal, and always free.",
                href: "/get-help",
                img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Pantry Staples",
                body: "Canned goods, grains, pasta, and shelf-stable essentials to keep your pantry stocked between visits.",
                href: "/get-help",
                img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "No Barrier Access",
                body: "You don't need anything to walk in. Just show up on Sunday and we'll take care of the rest.",
                href: "/get-help",
                img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
              },
            ].map(({ title, body, href, img }) => (
              <a
                key={title}
                href={href}
                className="group bg-white border border-gray-100 flex flex-col hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer"
              >
                {/* Card image */}
                <div className="w-full aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                  <p className="text-base font-normal text-gray-500 leading-relaxed flex-1">{body}</p>
                  <span className="text-base font-bold text-royalBlue-600 underline underline-offset-4 group-hover:text-royalBlue-800 transition-colors w-fit">
                    Learn more
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Map + Hours */}
          <div id="get-help" className="mt-14 border border-gray-200 grid grid-cols-1 md:grid-cols-2">

            {/* Left — Google Maps embed. Replace the src with your church's embed URL:
                Google Maps → share → Embed a map → copy the iframe src */}
            <div className="relative w-full aspect-square md:aspect-auto md:min-h-[320px] bg-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=415+Oakdale+Rd,+North+York,+Ontario,+Canada&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Helping Hands location"
              />
            </div>

            {/* Right — Hours info */}
            <div className="bg-royalBlue-50 border-t md:border-t-0 md:border-l border-gray-200 p-10 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-royalBlue-900 mb-1">Find Us</h3>
                <div className="w-10 h-0.5 bg-royalBlue-400" />
              </div>
              <div className="flex flex-col gap-4 text-base font-normal text-royalBlue-800 leading-relaxed">
                <div>
                  <p className="font-bold text-royalBlue-900 mb-0.5">Address</p>
                  <p className="font-bold">Kings Embassy Int Ministry</p>
                  <p>415 Oakdale Rd, Unit 413</p>
                  <p>North York, Ontario, Canada</p>
                </div>
                <div>
                  <p className="font-bold text-royalBlue-900 mb-0.5">Distribution Hours</p>
                  <p>Every <span className="font-bold">Sunday</span></p>
                  <p><span className="font-bold">2:00 PM</span> – <span className="font-bold">5:00 PM</span></p>
                </div>
                <p className="text-royalBlue-600 italic">No appointment needed. All are welcome.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. FINAL CALL TO ACTION ──────────────────────────────── */}
      <section
        id="contact"
        className="relative py-28 px-6 text-center text-white"
        style={{
          backgroundImage:
            "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold">Ready to Help or Need a Hand?</h2>
          <p className="text-lg font-normal text-gray-300">
            Coming for food or want to get involved? Send us a message and we&apos;ll get back to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/get-help"
              className="bg-royalBlue-500 hover:bg-royalBlue-600 text-white font-bold px-8 py-3 rounded shadow-sm transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
