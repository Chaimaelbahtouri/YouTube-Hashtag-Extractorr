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

  return (
    <div>
      <Navbar />
      <InputSection
        videoLink={videoLink}
        setVideoLink={setVideoLink}
        onGetHashtags={handleGetHashtags}
      />
      {videoData.title && (
        <VideoInfo title={videoData.title} hashtags={videoData.hashtags} />
      )}
      <ShareSection videoLink={videoLink} />
      <GoogleAd adSlot="1234567890" />
      <Footer />
    </div>
  );
}
