import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center text-white px-6 py-72">
        <div
          className="absolute origin-center scale-[0.75]"
          style={{
            inset: "-20%",
            backgroundImage: "url('/img3.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">About Us</h1>
          <p className="text-lg font-normal text-gray-300 max-w-xl">
            Learn who we are, where we come from, and why we show up every single week.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-12 h-1 bg-royalBlue-500 mb-6" />
            <p className="text-lg font-normal text-gray-500 leading-relaxed mb-4">
              It started during COVID. When the pandemic hit, we saw how quickly people
              around us fell through the cracks. We began by donating to local food banks,
              doing what we could with what we had. The need kept growing, and so did our
              determination to do more.
            </p>
            <p className="text-lg font-normal text-gray-500 leading-relaxed">
              Eventually we stopped waiting and started our own. Out of Kings Embassy Int
              Ministry in North York, we built something from the ground up. Now, through
              our partnership with{" "}
              <span className="font-bold text-royalBlue-600">Second Harvest</span>, we
              feed over 80 families every Sunday. No strings, no paperwork, just food.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["/img1.jpg", "/img2.jpg", "/img4.jpeg", "/img3.webp"].map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={src}
                  alt={`Helping Hands photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover scale-125"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION + VALUES ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-12 h-1 bg-royalBlue-500 mb-6" />
            <p className="text-lg font-normal text-gray-500 leading-relaxed max-w-2xl">
              To make sure anyone in our community who needs food can get it. Free,
              straightforward, and without making people jump through hoops. Food is
              something everyone deserves.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dignity First",    body: "Everyone who comes through the door is treated with respect. That's non-negotiable." },
              { title: "Consistent",       body: "We're there every Sunday. People plan around us, so we make sure we show up." },
              { title: "Community-Driven", body: "This is run by people from the community, for the community. No long chain of command." },
              { title: "Fully Free",       body: "Everything we give out is free. No fees, no suggested donations, nothing." },
            ].map(({ title, body }) => (
              <div key={title} className="border border-gray-200 bg-white p-6 flex flex-col gap-3">
                <div className="w-8 h-0.5 bg-royalBlue-500" />
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-base font-normal text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ──────────────────────────────────────────── */}
      <section className="bg-royalBlue-500 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Powered by Partnership</h2>
            <div className="w-12 h-1 bg-white/50 mb-6" />
            <p className="text-lg font-normal text-royalBlue-100 leading-relaxed">
              We get our food through{" "}
              <span className="font-bold text-white">Second Harvest</span>, Canada&apos;s
              largest food rescue organization. That partnership is why we can show up every
              week with quality food, and it&apos;s also kept thousands of kilograms of
              waste out of landfills.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            {[
              { value: "$280,592", label: "Value of food rescued" },
              { value: "99,401",  label: "Lbs of greenhouse gases diverted" },
              { value: "23,805",  label: "Total lbs of food rescued" },
              { value: "80+",     label: "Families fed weekly" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 p-6">
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-base font-normal text-royalBlue-100 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The People Behind Helping Hands</h2>
          <div className="w-12 h-1 bg-royalBlue-500 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
            {[
              { name: "Vikrum Chauhan",  title: "Director of Operations",   img: "/team-vikrum.jpg" },
              { name: "Chetna Zalpuri", title: "Executive Director",        img: ""               },
              { name: "Mary Jane",      title: "Food Coordinator",          img: "/team-mary.jpg"  },
              { name: "Sulagana Guha",  title: "Director of Communications",img: ""               },
              { name: "Vivek Koul",     title: "Technical Director",        img: ""               },
              { name: "Ragnya Thakur",  title: "Social Media Manager",      img: ""               },
            ].map(({ name, title, img }) => (
              <div key={name} className="flex flex-col gap-4">
                <div className="w-full aspect-square border border-gray-200 bg-gray-100 overflow-hidden">
                  {img && (
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">{name}</p>
                  <p className="text-base font-normal text-royalBlue-500">{title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-royalBlue-500 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg mb-1">Want to get in touch?</p>
              <p className="text-royalBlue-100 text-base font-normal">
                Whether you need food, want to volunteer, or just have a question, we&apos;d love to hear from you.
              </p>
            </div>
            <a
              href="/get-help"
              className="shrink-0 text-base font-bold text-white underline underline-offset-4 hover:text-royalBlue-100 transition-colors whitespace-nowrap"
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
