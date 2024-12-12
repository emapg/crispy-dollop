import React from 'react';

export function QuranSkeleton({ type }: { type: 'sidebar' | 'content' }) {
  return (
    <div className="animate-pulse space-y-4">
      {type === 'sidebar' && (
        <div>
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-4 bg-gray-300 rounded w-3/4 mb-2 last:mb-0"
            ></div>
          ))}
        </div>
      )}
      {type === 'content' && (
        <div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="h-4 bg-gray-300 rounded w-full mb-2 last:mb-0"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
