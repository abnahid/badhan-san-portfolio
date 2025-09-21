"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditHighlightForm } from "./EditHighlightForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HighlightCard({ highlight, onUpdate }: any) {
  const handleDelete = async () => {
    if (!highlight || !highlight._id) return;
    if (!confirm("Delete this highlight?")) return;

    await fetch(`/api/highlights/${highlight._id}`, { method: "DELETE" });
    onUpdate();
  };

  if (!highlight) {
    return (
      <div className="border rounded-lg p-4 flex flex-col gap-2 text-red-500">
        data missing
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      {highlight.videoUrl ? (
        <iframe
          className="w-full aspect-video rounded-md"
          src={highlight.videoUrl}
          title={highlight.title || "Video"}
        />
      ) : (
        <div className="w-full aspect-video rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
          No video available
        </div>
      )}

      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="font-semibold">{highlight.name || "No Name"}</p>
          <p className="text-sm text-muted-foreground">
            {highlight.title || "No Title"}
          </p>
        </div>

        <div className="flex gap-2">
          {/* Edit Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                Edit
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Edit Highlight</DialogTitle>
                <DialogDescription>
                  Update your highlight details below.
                </DialogDescription>
              </DialogHeader>

              <EditHighlightForm highlight={highlight} onSuccess={onUpdate} />

              <DialogFooter />
            </DialogContent>
          </Dialog>

          <Button size="sm" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
