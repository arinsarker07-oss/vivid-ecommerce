// app/loading.js
"use client";
import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4">
            <Spinner size="xl" />
            <span className="text-xs text-muted"></span>
        </div>
    );
}