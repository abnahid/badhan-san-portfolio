"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  highlight: any;
  onSuccess: () => void;
}

export function EditHighlightForm({ highlight, onSuccess }: Props) {
  const [name, setName] = useState(highlight.name);
  const [title, setTitle] = useState(highlight.title);
  const [videoUrl, setVideoUrl] = useState(highlight.videoUrl);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/highlights/${highlight._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, title, videoUrl }),
      });

      if (!res.ok) throw new Error("Failed to update highlight");

      onSuccess(); // refresh list
    } catch (err) {
      console.error(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        placeholder="Highlight Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        placeholder="Highlight Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        placeholder="Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Updating..." : "Update Highlight"}
      </Button>
    </form>
  );
}
