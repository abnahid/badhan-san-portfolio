import PortfolioSlugPage from "@/components/Portfolio/PortfolioSlugPage";
import { getAllPortfolioSlugs } from "@/lib/portfolios";

export async function generateStaticParams() {
  const allSlugs = await getAllPortfolioSlugs();
  return allSlugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const categoryTitles: { [key: string]: string } = {
    "shorts-reels": "Reels & Shorts",
    "talking-head": "Talking Head",
    cashcow: "Cashcow",
    documentary: "Documentary",
    "3d-visuals": "3D Visuals",
    other: "Other",
  };
  const categoryTitle = categoryTitles[params.slug] || params.slug;
  return {
    title: `${categoryTitle} - Portfolio | Badhan San`,
    description: `Explore the ${categoryTitle} projects by Badhan San, showcasing expertise in video editing and content creation.`,
  };
}

const page = () => {
  return <PortfolioSlugPage  />;
};

export default page;
