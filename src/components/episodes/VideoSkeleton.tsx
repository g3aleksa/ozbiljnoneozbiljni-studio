import { Skeleton } from "@/components/ui/skeleton";

interface VideoSkeletonProps {
  variant?: "hero" | "card";
}

export function VideoSkeleton({ variant = "card" }: VideoSkeletonProps) {
  if (variant === "hero") {
    return (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Video Player Skeleton */}
        <Skeleton className="aspect-video rounded-2xl" />

        {/* Info Skeleton */}
        <div className="flex flex-col gap-4">
          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-12 w-full mb-2" />
            <Skeleton className="h-10 w-3/4" />
          </div>

          <Skeleton className="h-20 w-full rounded-xl" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          <Skeleton className="h-5 w-40 mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-background border border-border">
      <Skeleton className="aspect-video" />
      <div className="p-5">
        <Skeleton className="h-3 w-24 mb-1" />
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export function VideoGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <VideoSkeleton key={index} variant="card" />
      ))}
    </div>
  );
}
