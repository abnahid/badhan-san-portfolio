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
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch("/api/highlights")
            .then((res) => res.json())
            .then((data) => setHighlights(data.slice(0, 2)));
    }, [refresh]);

    const handleRefresh = () => setRefresh((prev) => !prev);

    return (
        <div className="px-4 lg:px-6">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Highlights</h2>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button disabled={highlights.length >= 2}>Add Highlight</Button>
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

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.filter(Boolean).map((highlight) => (
                    <HighlightCard
                        key={highlight._id}
                        highlight={highlight}
                        onUpdate={handleRefresh}
                    />
                ))}
            </div>
        </div>
    );
}
