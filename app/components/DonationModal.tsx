"use client";

import { useState } from "react";

const PRESETS = [10, 25, 50, 100, 250];

export default function DonationModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom]     = useState("");

  const amount = custom ? parseFloat(custom) : selected;

  function handleDonate() {
    const base = "https://www.canadahelps.org/en/giving-pages/146912/";
    const url  = amount && amount > 0 ? `${base}?amount=${amount}` : base;
    window.open(url, "_blank");
    onClose();
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <div className="bg-white w-full max-w-3xl relative pointer-events-auto flex overflow-hidden max-h-[90vh]">

          {/* Left — image */}
          <div className="hidden sm:block w-2/5 relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Community support"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-royalBlue-900/40" />
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-white font-bold text-xl leading-snug">
                Your generosity feeds a family this Sunday.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto">

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6"  x2="6"  y2="18" />
                <line x1="6"  y1="6"  x2="18" y2="18" />
              </svg>
            </button>

            <div className="w-10 h-1 bg-royalBlue-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Make a Donation</h2>
            <p className="text-base font-normal text-gray-500 mb-8">
              Every dollar goes directly to feeding families in our community every Sunday.
            </p>

            {/* Preset amounts */}
            <p className="text-base font-bold text-gray-700 mb-3">Select an amount</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
              {PRESETS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelected(amt); setCustom(""); }}
                  className={`py-3 text-sm sm:text-base font-bold border transition-colors ${
                    selected === amt && !custom
                      ? "bg-royalBlue-500 text-white border-royalBlue-500"
                      : "border-gray-300 text-gray-700 hover:border-royalBlue-500 hover:text-royalBlue-500"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="flex flex-col gap-1.5 mb-8">
              <label className="text-base font-bold text-gray-700">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-normal text-base select-none">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                  className="w-full border border-gray-300 pl-8 pr-4 py-3 text-base font-normal text-gray-800 focus:outline-none focus:border-royalBlue-500 transition-colors"
                />
              </div>
            </div>

            <button
              onClick={handleDonate}
              disabled={!amount || amount <= 0}
              className="w-full bg-royalBlue-500 hover:bg-royalBlue-600 disabled:opacity-50 text-white font-bold py-4 text-lg transition-colors"
            >
              {amount && amount > 0 ? `Donate $${amount} Now` : "Donate Now"}
            </button>

            <p className="text-sm font-normal text-gray-400 text-center mt-4">
              Processed securely through CanadaHelps. Tax receipts issued automatically.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
