"use client";

import { useEffect } from "react";

export default function GoogleAd({ adSlot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8286057084197279" // هادشي خاصو يكون هو Client ID ديالك
      data-ad-slot={adSlot} // هادشي هو Ad Unit ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
