"use client";

import { useEffect } from "react";

export default function DonationForm() {
  useEffect(() => {
    const container = document.getElementById("ch-embed-container");
    if (!container) return;

    const script = document.createElement("script");
    script.id = "ch_cdn_embed";
    script.type = "text/javascript";
    script.src = "https://www.canadahelps.org/secure/js/cdf_embed.2.js";
    script.charset = "utf-8";
    script.setAttribute("data-language", "en");
    script.setAttribute("data-page-id", "146912");
    script.setAttribute("data-root-url", "https://www.canadahelps.org");
    script.setAttribute("data-formtype", "0");
    script.setAttribute("data-cfasync", "false");

    container.appendChild(script);
  }, []);

  return <div id="ch-embed-container" />;
}
