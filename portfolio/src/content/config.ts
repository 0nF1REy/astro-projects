import { defineCollection, z } from "astro:content";
const projectCollection = defineCollection({
  type: "data",
  schema: ({ image }) => {
    return z.object({
      title: z.string(),
      client: z.string(),
      work: z.string(),
      mainImage: image(),
      otherImages: z.array(image()),
      storyTitle: z.string(),
      storyContent: z.string(),
      dayOneTitle: z.string(),
      dayOneContent: z.string(),
    });
  },
});

export const collections = {
  projects: projectCollection,
};
