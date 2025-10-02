import AddProjectForm from "@/components/dashboard/AddProjectForm";

const categories = [
  { id: "1", name: "Shorts & Reels", slug: "shorts-reels" },
  { id: "2", name: "Talking Head", slug: "talking-head" },
  { id: "3", name: "Cashcow", slug: "cashcow" },
  { id: "4", name: "Documentary", slug: "documentary" },
  { id: "5", name: "3D Visuals", slug: "3d-visuals" },
  { id: "6", name: "Other", slug: "other" },
];

const Page = () => <AddProjectForm categories={categories} />;

export default Page;
