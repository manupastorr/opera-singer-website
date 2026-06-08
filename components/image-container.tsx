"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { cn } from "@/lib/utils";
import { Picture } from "@/types";
import DownloadButton from "./download-button";

type Props = {
  photo: Picture;
};

export default function ImageContainer({ photo }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsLoading(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(true);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <button
        type="button"
        className="group relative flex h-64 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-0 bg-transparent p-0 text-white"
        onClick={openModal}
        aria-label={`Open image: ${photo.alt}`}
      >
        <Image
          priority
          src={photo.image}
          alt={photo.alt}
          fill
          sizes="(max-width: 590px) 90vw, (max-width: 926px) 45vw, (max-width: 1190px) 30vw, 22vw"
          className={cn(
            "object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75",
            photo.objectPosition || "object-top",
          )}
        />
        <h2 className="absolute bottom-3 left-3 hidden opacity-80 transition-all duration-500 ease-in-out group-hover:flex">
          {photo.photographer && photo.photographer}
        </h2>
        <Maximize2
          className="absolute right-3 top-3 hidden cursor-pointer rounded bg-transparent p-1 hover:bg-primary/80 group-hover:flex"
          aria-hidden="true"
        />
        <DownloadButton photo={photo} className="hidden group-hover:flex" />
      </button>

      {isModalOpen && photo.image && (
        <button
          type="button"
          className="group fixed inset-0 z-40 flex max-h-screen cursor-pointer items-center justify-center overflow-auto border-0 bg-background p-0"
          onClick={closeModal}
          aria-label="Close image preview"
        >
          <div className="bg-opacity h-full w-full bg-black text-white">
            {isLoading && (
              <div className="absolute z-10 flex h-full w-full items-center justify-center">
                <ClipLoader
                  color="#ffffff"
                  loading={isLoading}
                  cssOverride={{ display: "block" }}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
            <Image
              onLoad={handleImageLoad}
              quality={100}
              src={photo.image}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="relative object-contain"
            />
            {!isLoading && (
              <div className="p-30 z-30">
                <span className="absolute bottom-3 left-3">
                  {photo.photographer && photo.photographer}
                </span>
                <Minimize2 className="absolute right-3 top-3 rounded p-1 hover:bg-primary/80" />
                <DownloadButton photo={photo} />
              </div>
            )}
          </div>
        </button>
      )}
    </>
  );
}
