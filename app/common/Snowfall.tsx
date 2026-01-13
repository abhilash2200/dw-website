"use client";

import { useEffect } from "react";

export default function Snowfall() {
  useEffect(() => {
    const snowContainer = document.createElement("div");
    snowContainer.className =
      "fixed inset-0 pointer-events-none z-[9999]";
    document.body.appendChild(snowContainer);

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.innerHTML = "❄";
      snowflake.className =
        "absolute text-white opacity-80 animate-snowfall";

      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.animationDuration =
        Math.random() * 5 + 5 + "s";

      snowContainer.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => {
      clearInterval(interval);
      snowContainer.remove();
    };
  }, []);

  return null;
}
