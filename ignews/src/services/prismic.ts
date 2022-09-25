import Prismic from "@prismicio/client";

const getPrismicClient = (req?: unknown) => {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPONT!, {
    req,
    accessToken: process.env.PRISMIC_CMS_ACCESS_TOKEN,
  });

  return prismic;
};

export { getPrismicClient };
