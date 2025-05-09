import MusicPlayer from "@/components/music-player";
import { getMedia } from "@/sanity/sanity.query";

const isAudio = (file: any) =>
  typeof file.file === "string" && /\.(mp3|wav|ogg|flac)$/i.test(file.file);
const isVideo = (file: any) =>
  typeof file.file === "string" && /\.(mp4|mov|webm|avi|mkv)$/i.test(file.file);

const Media = async () => {
  const media = await getMedia();

  // Flatten all files from all media entries and preserve parent title
  const allFiles = media.flatMap((m) =>
    (m.files || []).map((file) => ({
      ...file,
      parentTitle: m.title, // Add parent title to each file
    })),
  );

  const songs = allFiles.filter(isAudio);
  const videos = allFiles.filter(isVideo);

  const showAudio = songs && songs.length > 0;
  const showVideo = videos && videos.length > 0;

  return (
    <main className="container mx-auto flex max-w-4xl flex-1 flex-col gap-12 px-4 py-12 sm:px-16">
      <section
        className={`grid gap-10 ${showAudio && showVideo ? "md:grid-cols-2" : "mx-auto w-full max-w-2xl md:grid-cols-1"}`}
      >
        {showAudio && (
          <div className="flex flex-col items-center rounded-2xl bg-zinc-900/80 p-6 shadow-lg">
            {showVideo && (
              <h2 className="mb-4 text-xl font-semibold">Listen</h2>
            )}
            <MusicPlayer songs={songs} />
          </div>
        )}
        {showVideo && (
          <div className="flex flex-col items-center rounded-2xl bg-zinc-900/80 p-6 shadow-lg">
            {showAudio && <h2 className="mb-4 text-xl font-semibold">Watch</h2>}
            {videos.map((video, index) => (
              <div
                key={index}
                className="mb-8 flex w-full flex-col items-center last:mb-0"
              >
                {(video.title || video.parentTitle) && (
                  <h3 className="mb-2 text-lg font-medium text-zinc-100">
                    {video.title || video.parentTitle}
                  </h3>
                )}
                <video
                  src={video.file}
                  muted
                  controls
                  className="max-h-72 w-full rounded-lg border border-zinc-800 object-cover"
                />
                {video.description && (
                  <div className="mt-3 text-center text-sm text-zinc-300">
                    {video.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Media;
