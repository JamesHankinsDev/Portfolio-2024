import React from 'react';

export default function Footer() {
  return (
    <div className="h-fit w-screen bg-tirtiary flex justify-center h-2">
      <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <p className="text-xs text-primary flex justify-center col-span-12 sm:col-span-6">
          Made with love by James Hankins
        </p>
        <p className="text-xs text-primary flex justify-center col-span-12 sm:col-span-6">
          Developed with NextJS and TailwindCSS
        </p>
      </div>
    </div>
  );
}
