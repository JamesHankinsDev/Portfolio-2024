import React from 'react';

export default function Footer() {
  return (
    <div className="h-fit w-screen bg-tirtiary flex justify-center">
      <div className="max-w-[1200px] w-full gap-2 grid grid-cols-2 px-8">
        <p className="text-xs text-primary flex justify-start">
          Made with love by James Hankins
        </p>
        <p className="text-xs text-primary flex justify-end">
          Developed with NextJS and TailwindCSS
        </p>
      </div>
    </div>
  );
}
