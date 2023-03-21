import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "ox4xsy3r",
  dataset: "production",
  apiVersion: "2022-07-16",
  useCdn: true,
  token:
    "skUemzjiN4vFCltTukDxXoYMCsMI1s7HuiCPXuR5u8XrjP4tzXQGoZZe1Zar0OM7biydqfrdWZNDJyCBZVIgd8GN0Qi41ttehqNJaVDl3h2NvPXU2NmWF4I6jajUSlNSERxEnj8xQZJBSlDcUwl7qm6dv66w1vksfZ9ioqJkPvPJFxr5Fdt8",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
