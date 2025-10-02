"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

type Portfolio = {
  _id: string;
  categoryId: string;
  categoryName: string;
  slug: string;
  title: string;
  videoUrl: string;
  alt?: string;
};

type EditProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  portfolio: Portfolio | null;
  categories: { id: string; name: string; slug: string }[];
  onSuccess: () => void;
};

export default function EditProjectModal({
  isOpen,
  onClose,
  portfolio,
  categories,
  onSuccess,
}: EditProjectModalProps) {
  const [form, setForm] = useState({
    categoryId: "",
    categoryName: "",
    slug: "",
    title: "",
    videoUrl: "",
    alt: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (portfolio) {
      setForm({
        categoryId: portfolio.categoryId,
        categoryName: portfolio.categoryName,
        slug: portfolio.slug,
        title: portfolio.title,
        videoUrl: portfolio.videoUrl,
        alt: portfolio.alt || "",
      });
    }
  }, [portfolio]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!portfolio) return;

    setLoading(true);

    const formattedForm = {
      ...form,
      videoUrl: convertToEmbedUrl(form.videoUrl),
    };

    try {
      const response = await fetch(`/api/portfolio/${portfolio._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedForm),
      });

      if (response.ok) {
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error("Error updating portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Edit Project
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
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
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            name="videoUrl"
            placeholder="Video URL"
            value={form.videoUrl}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            name="alt"
            placeholder="Alt Text (optional)"
            value={form.alt}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <div className="flex gap-3 justify-end mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Project"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
