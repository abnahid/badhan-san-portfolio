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
import { useEffect, useState } from "react";

import { AddHighlightForm } from "./AddHighlightForm";
import { HighlightCard } from "./HighlightCard";

export function HighlightsDashboard() {
    const [highlights, setHighlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("/api/highlights");

                if (!res.ok) {
                    throw new Error("Failed to fetch highlights");
                }

                const data = await res.json();

                // Ensure we only get valid highlight objects
                const validHighlights = Array.isArray(data)
                    ? data.filter(h => h && h._id).slice(0, 2)
                    : [];

                setHighlights(validHighlights);
            } catch (err) {
                console.error("Error fetching highlights:", err);
                setError(err.message);
                setHighlights([]);
            } finally {
                setLoading(false);
            }
        };

        fetchHighlights();
    }, [refresh]);

    const handleRefresh = () => setRefresh((prev) => !prev);

    return (
        <div className="px-4 lg:px-6">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Highlights</h2>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button disabled={loading || highlights.length >= 2}>
                            Add Highlight
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Add New Highlight</DialogTitle>
                            <DialogDescription>
                                You can add up to 2 highlights only
                            </DialogDescription>
                        </DialogHeader>

                        <AddHighlightForm onSuccess={handleRefresh} />

                        <DialogFooter />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                        <div
                            key={i}
                            className="border rounded-lg p-4 animate-pulse"
                        >
                            <div className="w-full aspect-video rounded-md bg-gray-200 mb-4" />
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                            <div className="h-3 bg-gray-200 rounded w-1/2" />
                        </div>
                    ))}
                </div>
            )}

            {/* Error State */}
            {error && !loading && (
                <div className="border border-red-300 rounded-lg p-4 bg-red-50 text-red-700">
                    <p className="font-semibold">Error loading highlights</p>
                    <p className="text-sm">{error}</p>
                    <Button
                        onClick={handleRefresh}
                        variant="outline"
                        size="sm"
                        className="mt-2"
                    >
                        Retry
                    </Button>
                </div>
            )}

            {/* Highlight Cards */}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.length === 0 ? (
                        <div className="col-span-full border rounded-lg p-8 text-center text-gray-500">
                            <p className="text-lg font-semibold mb-2">No highlights yet</p>
                            <p className="text-sm">Click "Add Highlight" to create your first highlight</p>
                        </div>
                    ) : (
                        highlights.map((highlight) => (
                            <HighlightCard
                                key={highlight._id}
                                highlight={highlight}
                                onUpdate={handleRefresh}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
