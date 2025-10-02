"use client";

import DeleteConfirmDialog from "@/components/dashboard/DeleteConfirmDialog";
import EditProjectModal from "@/components/dashboard/EditProjectModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type Portfolio = {
  _id: string;
  categoryId: string;
  categoryName: string;
  slug: string;
  title: string;
  videoUrl: string;
  alt?: string;
  createdAt: string;
};

const categories = [
  { id: "1", name: "Shorts & Reels", slug: "shorts-reels" },
  { id: "2", name: "Talking Head", slug: "talking-head" },
  { id: "3", name: "Cashcow", slug: "cashcow" },
  { id: "4", name: "Documentary", slug: "documentary" },
  { id: "5", name: "3D Visuals", slug: "3d-visuals" },
  { id: "6", name: "Other", slug: "other" },
];

export default function AllCategoriesPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Add Project Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    categoryId: "",
    categoryName: "",
    slug: "",
    title: "",
    videoUrl: "",
    alt: "",
  });
  const [addLoading, setAddLoading] = useState(false);

  // Edit Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(
    null
  );

  // Delete Dialog
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [portfolioToDelete, setPortfolioToDelete] = useState<Portfolio | null>(
    null
  );
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch portfolios
  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/portfolio");
      const data: Portfolio[] = await res.json();
      setPortfolios(data);
      setFilteredPortfolios(data);
    } catch (err) {
      console.error("Failed to fetch portfolios:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  // Filter portfolios
  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredPortfolios(portfolios);
    } else if (selectedFilter === "recent-6") {
      const sorted = [...portfolios].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setFilteredPortfolios(sorted.slice(0, 6));
    } else {
      setFilteredPortfolios(
        portfolios.filter((p) => p.categoryName === selectedFilter)
      );
    }
  }, [selectedFilter, portfolios]);

  // Handle Add Project
  const handleAddChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAddForm((prev) => {
      if (name === "categoryId") {
        const cat = categories.find((cat) => cat.id === value);
        return {
          ...prev,
          categoryId: value,
          categoryName: cat?.name || "",
          slug: cat?.slug || "",
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const convertToEmbedUrl = (url: string): string => {
    try {
      let videoId = "";
      if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
      } else if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1].split("&")[0];
      } else if (url.includes("/embed/")) {
        return url;
      }
      return `https://www.youtube.com/embed/${videoId}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return url;
    }
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddLoading(true);

    const formattedForm = {
      ...addForm,
      videoUrl: convertToEmbedUrl(addForm.videoUrl),
    };

    try {
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedForm),
      });

      if (response.ok) {
        await fetchPortfolios();
        setIsAddModalOpen(false);
        setAddForm({
          categoryId: "",
          categoryName: "",
          slug: "",
          title: "",
          videoUrl: "",
          alt: "",
        });
      }
    } catch (error) {
      console.error("Error adding portfolio:", error);
    } finally {
      setAddLoading(false);
    }
  };

  // Handle Edit
  const handleEdit = (portfolio: Portfolio) => {
    setSelectedPortfolio(portfolio);
    setIsEditModalOpen(true);
  };

  // Handle Delete
  const handleDeleteClick = (portfolio: Portfolio) => {
    setPortfolioToDelete(portfolio);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!portfolioToDelete) return;

    setDeleteLoading(true);
    try {
      const response = await fetch(`/api/portfolio/${portfolioToDelete._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchPortfolios();
        setIsDeleteDialogOpen(false);
        setPortfolioToDelete(null);
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Get unique categories from portfolios
  const uniqueCategories = Array.from(
    new Set(portfolios.map((p) => p.categoryName))
  );

  return (
    <div className="px-4 lg:px-6 space-y-6">
      {/* Header with Title and Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Categories</h1>
          <p className="text-gray-600 mt-1">
            Manage all your portfolio projects and categories
          </p>
        </div>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New Project
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedFilter === "all" ? "default" : "outline"}
          onClick={() => setSelectedFilter("all")}
          className={selectedFilter === "all" ? "bg-indigo-600" : ""}
        >
          All Categories ({portfolios.length})
        </Button>
        <Button
          variant={selectedFilter === "recent-6" ? "default" : "outline"}
          onClick={() => setSelectedFilter("recent-6")}
          className={selectedFilter === "recent-6" ? "bg-indigo-600" : ""}
        >
          Recent 6
        </Button>
        {uniqueCategories.map((cat) => (
          <Button
            key={cat}
            variant={selectedFilter === cat ? "default" : "outline"}
            onClick={() => setSelectedFilter(cat)}
            className={selectedFilter === cat ? "bg-indigo-600" : ""}
          >
            {cat} ({portfolios.filter((p) => p.categoryName === cat).length})
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Loading portfolios...</div>
        </div>
      ) : filteredPortfolios.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-lg text-gray-600 mb-4">No projects found</p>
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolios.map((portfolio) => (
            <div
              key={portfolio._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                <iframe
                  src={portfolio.videoUrl}
                  title={portfolio.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-3">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                    {portfolio.categoryName}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {portfolio.title}
                </h3>
                {portfolio.alt && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {portfolio.alt}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(portfolio)}
                    className="flex-1 gap-2 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClick(portfolio)}
                    className="flex-1 gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Project Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Add New Project
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddSubmit} className="flex flex-col gap-4 mt-4">
            <select
              name="categoryId"
              value={addForm.categoryId}
              onChange={handleAddChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <input
              name="title"
              placeholder="Project Title"
              value={addForm.title}
              onChange={handleAddChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />

            <input
              name="videoUrl"
              placeholder="Video URL"
              value={addForm.videoUrl}
              onChange={handleAddChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />

            <input
              name="alt"
              placeholder="Alt Text (optional)"
              value={addForm.alt}
              onChange={handleAddChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />

            <div className="flex gap-3 justify-end mt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddModalOpen(false)}
                disabled={addLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={addLoading}>
                {addLoading ? "Adding..." : "Add Project"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Project Modal */}
      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPortfolio(null);
        }}
        portfolio={selectedPortfolio}
        categories={categories}
        onSuccess={fetchPortfolios}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setPortfolioToDelete(null);
        }}
        onConfirm={handleDeleteConfirm}
        title={portfolioToDelete?.title || ""}
        loading={deleteLoading}
      />
    </div>
  );
}
