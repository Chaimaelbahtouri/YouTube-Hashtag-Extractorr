"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import InputSection from "../components/InputSection";
import VideoInfo from "../components/VideoInfo";
import ShareSection from "../components/ShareSection";
import Footer from "../components/Footer";
import GoogleAd from "../components/GoogleAd";

export default function Page() {
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState({ title: "", hashtags: [] });

  const handleGetHashtags = async () => {
    if (!videoLink) return;
    const videoId = videoLink.split("v=")[1]; // بسيطة
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

  return (
    <div>
      <Navbar />
      <InputSection videoLink={videoLink} setVideoLink={setVideoLink} onGetHashtags={handleGetHashtags} />
      {videoData.title && <VideoInfo title={videoData.title} hashtags={videoData.hashtags} />}
      <ShareSection videoLink={videoLink} />
      <GoogleAd adSlot="1234567890" />
      <Footer />
    </div>
  );
}
