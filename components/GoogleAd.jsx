"use client";
import React, { useEffect } from "react";

const GoogleAd = ({ adSlot, style }) => {
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
      style={{ display: "block", textAlign: "center", ...style }}
      data-ad-client="ca-pub-8286057084197279"
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAd;
