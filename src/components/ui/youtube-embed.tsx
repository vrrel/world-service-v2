interface YouTubeEmbedProps {
  url: string;
}

function getYouTubeEmbedUrl(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
}

export function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  return (
    <div className="mb-6 aspect-video w-full overflow-hidden rounded-2xl">
      <iframe
        className="h-full w-full"
        src={getYouTubeEmbedUrl(url)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
