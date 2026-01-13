import { QueryParams, groq } from "next-sanity";
import { client } from "./lib/client";

import {
  About,
  Critic,
  Gallery,
  Legal,
  Media,
  Performance,
  Profile,
  Repertoire,
} from "@/types";

const revalidationOptions = { next: { revalidate: 10 } };
const DEFAULT_PARAMS = {} as QueryParams;

export async function getProfile(): Promise<Profile> {
  const query = groq`
    *[_type == "profile"]{
      _id,
      firstName,
      lastName,
      voiceType,
      quote,
      quoteSource,
      heroDarkImage { alt, "image": asset->url },
      heroLightImage { alt, "image": asset->url },
      email,
    }
  `;

  const [profile] = await client.fetch<Profile[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return profile;
}

export async function getAbout(): Promise<About> {
  const query = groq`
    *[_type == "about"]{
      _id,
      germanBio,
      englishBio,
      aboutImageDark { alt, "image": asset->url },
      aboutImageLight { alt, "image": asset->url },
    }
  `;

  const [about] = await client.fetch<About[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );
  return about;
}

export async function getLegal(): Promise<Legal[]> {
  const query = groq`
    *[_type == "legal"]{
      _id,
      title,
      content
    }
  `;

  const legal = await client.fetch<Legal[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return legal;
}

export async function getCritics(): Promise<Critic[]> {
  const query = groq`
    *[_type == "critics"] | order(ranking asc){
      _id,
      opera,
      role,
      description,
      source,
      ranking,
    }
  `;

  const critics = await client.fetch<Critic[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return critics;
}

export async function getPerformances(): Promise<Performance[]> {
  const query = groq`
    *[_type == "performances"]{
      _id,
      title,
      type,
      composer,
      composition,
      role,
      conductor,
      instrumentation,
      producer,
      firstDate,
      allDates,
      location,
      orchestra,
    }
  `;

  const performances = await client.fetch<Performance[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return performances;
}

export async function getGallery(): Promise<Gallery[]> {
  const query = groq`
    *[_type == "gallery"]{
      _id,
      title,
      images[] {
        alt,
        photographer,
        objectPosition,
        "image": asset->url,
      },
    }
  `;

  const [portrait, onStage] = await client.fetch<Gallery[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return [portrait, onStage];
}

export async function getMedia(): Promise<Media[]> {
  const query = groq`
    *[_type == "media"]{
      _id,
      title,
      files[] {
        alt,
        description,
        title,
        "file": asset->url,
      },
    }
  `;

  const media = await client.fetch<Media[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return media;
}

export async function getLied(): Promise<Repertoire[]> {
  const query = groq`
    *[_type == "repertoire" && type == "Lied"] | order(composerLastName asc){
      _id,
      composerFirstName,
      composerLastName,
      type,
      compositions[] | order(title asc) {
        title,
        role[],
      },
    }
  `;

  const repertoire = await client.fetch<Repertoire[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return repertoire;
}

export async function getOpera(): Promise<Repertoire[]> {
  const query = groq`
    *[_type == "repertoire" && type == "Oper"] | order(composerLastName asc){
      _id,
      composerFirstName,
      composerLastName,
      type,
      compositions[] | order(title asc) {
        title,
        role[],
      },
    }
  `;

  const repertoire = await client.fetch<Repertoire[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return repertoire;
}

export async function getConcert(): Promise<Repertoire[]> {
  const query = groq`
    *[_type == "repertoire" && type == "Konzert"] | order(composerLastName asc){
      _id,
      composerFirstName,
      composerLastName,
      type,
      compositions[] | order(title asc) {
        title,
        role[],
      },
    }
  `;

  const repertoire = await client.fetch<Repertoire[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );

  return repertoire;
}
