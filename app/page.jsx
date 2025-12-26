"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import InputSection from "../components/InputSection";
import VideoInfo from "../components/VideoInfo";
import ShareSection from "../components/ShareSection";
import Footer from "../components/Footer";
import GoogleAd from "../components/GoogleAd";
import ContentSection from "../components/ContentSection";

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
    const allTags = videoData.hashtags.join(" ");
    navigator.clipboard.writeText(allTags);
    alert("All hashtags copied!");
  };

  return (
    <div>
      <Navbar />
      <InputSection
        videoLink={videoLink}
        setVideoLink={setVideoLink}
        onGetHashtags={handleGetHashtags}
      />
      <ContentSection />
      <GoogleAd adSlot="6501995365" />
      {videoData.title && (
        <VideoInfo
          title={videoData.title}
          hashtags={videoData.hashtags}
          onCopyAll={handleCopyAll}
        />
      )}
      <ShareSection videoLink={videoLink} />
      <Footer />
    </div>
  );
}
