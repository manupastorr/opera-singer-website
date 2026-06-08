"use client";

import { useState } from "react";
import { Button } from "./ui/button";

import { File } from "@/types";

type Props = {
  songs: File[];
};

const MusicPlayer = ({ songs }: Props) => {
  const [currentSong, setCurrentSong] = useState<File | null>(null);

  return (
    <section className="flex flex-col items-center rounded-xl">
      <div className="flex flex-1 flex-col  justify-center gap-4">
        <ul className="flex flex-col gap-1">
          {songs.map((song, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className="cursor-pointer justify-start rounded-md p-2 text-left transition-all duration-300 ease-in-out hover:text-primary/70"
                onClick={() => {
                  setCurrentSong(song);
                }}
              >
                {song.title}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-end gap-1">
          <figure>
            <audio controls autoPlay src={currentSong?.file} className="w-full">
              <a rel="ugc nofollow" href={currentSong?.file} download>
                Download audio
              </a>
            </audio>
          </figure>
          <figcaption className="self-center">
            <span className="text-sm font-thin italic opacity-50">
              {currentSong?.title ?? "Select a song"}
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
