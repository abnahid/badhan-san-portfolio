import AddProjectForm from "@/components/dashboard/AddProjectForm";

const categories = [
  { id: "1", name: "Shorts & Reels" },
  { id: "2", name: "Documentary" },
  { id: "3", name: "YouTube Video" },
  { id: "4", name: "Wedding Video" },
  { id: "5", name: "Podcast & Interview" },
  { id: "6", name: "Commercial Video" },
];

const Page = () => <AddProjectForm categories={categories} />;

export default Page;
