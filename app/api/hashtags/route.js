export async function POST(req) {
    const { videoId } = await req.json();
  
    if (!videoId) {
      return new Response(JSON.stringify({ error: "Video ID is required" }), { status: 400 });
    }
  
    try {
      const apiKey = process.env.YOUTUBE_API_KEY;
      const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`);
      const data = await res.json();
  
      const video = data.items?.[0]?.snippet;
      const title = video?.title || "No title";
      const tags = video?.tags || [];
  
      return new Response(JSON.stringify({ title, tags }), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Failed to fetch hashtags" }), { status: 500 });
    }
  }
  