"use client";

import { useState } from "react";

type FormProps = {
  categories: { id: string; name: string }[];
};

export default function AddProjectForm({ categories }: FormProps) {
  const [form, setForm] = useState({
    categoryId: "",
    categoryName: "",
    title: "",
    videoUrl: "",
    alt: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "categoryId"
        ? {
            categoryName:
              categories.find((cat) => cat.id === value)?.name || "",
          }
        : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSuccess(true);
    setForm({
      categoryId: "",
      categoryName: "",
      title: "",
      videoUrl: "",
      alt: "",
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center  p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Project
        </h2>

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

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors duration-200 disabled:opacity-70"
        >
          {loading ? "Saving..." : "Add Project"}
        </button>

        {success && (
          <span className="text-green-600 text-center font-medium">
            ✅ Project added!
          </span>
        )}
      </form>
    </div>
  );
}
