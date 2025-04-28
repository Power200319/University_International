import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Play } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Dialog, DialogContent } from "../components/ui/dialog";
import vd1 from "../assets/vd1.png";
import vd2 from "../assets/vd2.png";
import vd3 from "../assets/vd3.png";
import vd4 from "../assets/vd4.png";
import vd5 from "../assets/vd5.png";
import vd6 from "../assets/vd6.png";

const videos = [
  {
    id: 1,
    thumbnail: vd1,
    title: "Children Students",
    duration: "2:45",
    videoId: "dQw4w9WgXcQ", // YouTube video ID
  },
  {
    id: 2,
    thumbnail: vd2,
    title: "Student Achievements",
    duration: "3:12",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    thumbnail: vd3,
    title: "Chemistry Students",
    duration: "4:30",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    thumbnail: vd4,
    title: "Library Day",
    duration: "5:15",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 5,
    thumbnail: vd5,
    title: "Party Students",
    duration: "6:05",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 6,
    thumbnail: vd6,
    title: "Chemistry Students",
    duration: "7:20",
    videoId: "dQw4w9WgXcQ",
  },
];

const VideoGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  //   const [selectedVideo, setSelectedVideo] = (useState < string) | (null > null);
  //   const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector(".video-gallery-section");
    if (section) {
      observer.observe(section);
    } else {
      console.error("Element with class 'video-gallery-section' not found.");
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
    setVideoOpen(true);
  };

  return (
    <section className="py-14  bg-white video-gallery-section flex justify-center text-center">
      <div className="max-w-7xl mx-auto">
        {/* title */}
        <div className="text-center mb-10">
          <h2 className="inline-block mx-auto text-3xl md:text-4xl font-bold text-yellow-500 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-school-accent">
            Video Gallery
          </h2>
        </div>
        {/* list video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 ">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={cn(
                " relative rounded-xl  overflow-hidden",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="video-card group rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform card-hover  relative ">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-110 h-50 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleVideoClick(video.videoId)}
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 transform scale-75 group-hover:scale-100"
                    aria-label={`Play ${video.title} video`}
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-3 flex justify-center">
                <p className="text-sm font-medium text-gray-600 max-w-75 flex justify-center flex-wrap">
                  {video.title}
                </p>
                {/* <p className="text-gray-500 text-sm">Watch now to learn more</p> */}
              </div>
            </div>
          ))}
        </div>
        {/* see more video */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="font-medium bg-red-900 text-white hover:bg-amber-700"
          >
            See More
          </Button>
        </div>
      </div>
      {/* click veiw video */}
      {/* <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-black">
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </section>
  );
};

export default VideoGallery;
