import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "qqm59yr5",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skWcooHo0W9GnDiM6TgdfeTVxXo9447oPduAcZpnJibB3JzasOyhPDhsuS4QKyjgKeeent5qPRYuZIISIfhHz7oXPOElOh2byeuCBh9UhdYmxspxhkmWKRMBhu7w1C6YqbFAekIwkWRngSy8IWgK8vgsd8QgkHMMJclAZx3JB9S6IyXX2RhW",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
