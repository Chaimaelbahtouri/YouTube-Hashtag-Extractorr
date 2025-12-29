"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import InputSection from "../components/InputSection";
import VideoInfo from "../components/VideoInfo";
import ShareSection from "../components/ShareSection";
import FeaturesSection from "../components/FeaturesSection";
import FaqSection from "../components/FaqSection";
import Testimonials from "../components/Testimonials";
import InfoSection from "../components/InfoSection";
import SeoSection from "../components/SeoSection";
import Contact from "../components/Contact";
import About from "../components/About";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import Terms from "../components/Terms"; 

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
  };

  return (
    <div>
      <Navbar />

      <section id="intro">
        <IntroSection />
      </section>

      <section id="input">
        <InputSection
          videoLink={videoLink}
          setVideoLink={setVideoLink}
          onGetHashtags={handleGetHashtags}
        />
      </section>

      {videoData.title && (
        <section id="video-info">
          <VideoInfo
            title={videoData.title}
            hashtags={videoData.hashtags}
            onCopyAll={handleCopyAll}
          />
        </section>
      )}

      <section id="share">
        <ShareSection videoLink={videoLink} />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      
      <section id="info">
        <InfoSection />
      </section>

      <section id="seo">
        <SeoSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="privacy">
        <PrivacyPolicy />
      </section>
      <Terms />
      
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
