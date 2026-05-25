"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mlgvwpra", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-10 h-1 bg-royalBlue-500" />
        <h3 className="text-2xl font-bold text-gray-900">Message sent.</h3>
        <p className="text-base font-normal text-gray-500">
          Thanks for reaching out. We&apos;ll get back to you as soon as we can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-base font-bold text-royalBlue-600 underline underline-offset-4 hover:text-royalBlue-800 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-base font-bold text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Jane"
            required
            className="border border-gray-300 px-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-base font-bold text-gray-700">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Doe"
            required
            className="border border-gray-300 px-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-base font-bold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="jane@example.com"
          required
          className="border border-gray-300 px-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-base font-bold text-gray-700">
          Phone <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+1 (416) 000-0000"
          className="border border-gray-300 px-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-base font-bold text-gray-700">How can we help?</label>
        <select
          name="subject"
          required
          defaultValue=""
          className="border border-gray-300 px-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors bg-white"
        >
          <option value="" disabled>Select a reason</option>
          <option value="food">I need food assistance</option>
          <option value="volunteer">I want to volunteer</option>
          <option value="donate">I want to donate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-base font-bold text-gray-700">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a bit more..."
          required
          className="border border-gray-300 px-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-base font-normal text-red-600">
          Something went wrong. Please try again or email us directly at helpinghands@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-royalBlue-500 hover:bg-royalBlue-600 disabled:opacity-60 text-white font-bold px-8 py-3 rounded transition-colors w-full"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
