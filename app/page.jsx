"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import InputSection from "../components/InputSection";
import VideoInfo from "../components/VideoInfo";
import ShareSection from "../components/ShareSection";
import Footer from "../components/Footer";
import GoogleAd from "../components/GoogleAd";
import InfoSection from "../components/InfoSection";
import SeoSection from "../components/SeoSection";
import Contact from "../components/Contact";
import About from "../components/About";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Page() {
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState({ title: "", hashtags: [] });

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:.*v=|v\/|shorts\/)|youtu\.be\/)([^"&?/ ]{11})/
    );
    return match ? match[1] : null;
  };

  const handleGetHashtags = async () => {
    const videoId = extractVideoId(videoLink);
    if (!videoId) {
      alert("Invalid YouTube link");
      return;
    }

    try {
      const res = await fetch("/api/hashtags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoId }),
      });

      const data = await res.json();
      setVideoData({ title: data.title, hashtags: data.tags || [] });
    } catch {
      alert("Failed to fetch hashtags");
    }
  };

  const handleCopyAll = () => {
    if (videoData.hashtags.length === 0) return;
    navigator.clipboard.writeText(videoData.hashtags.join(" "));
    alert("Copied all hashtags");
  };

  return (
    <div>
      <Navbar />
      
      <InputSection
        videoLink={videoLink}
        setVideoLink={setVideoLink}
        onGetHashtags={handleGetHashtags}
      />

      {videoData.title && (
        <VideoInfo
          title={videoData.title}
          hashtags={videoData.hashtags}
          onCopyAll={handleCopyAll}
        />
      )}

    
      <ShareSection videoLink={videoLink} />
      <GoogleAd adSlot="6501995365" />


      <FeaturesSection />

      {/* إعلان بين Features و FAQ */}
      <GoogleAd adSlot="0987654321" />

      <FaqSection />
      <Testimonials />

      <InfoSection />
      <SeoSection />


      <Contact />
      <About />
      <PrivacyPolicy />
      <GoogleAd adSlot="1122334455" />

      <Footer />
    </div>
  );
}
