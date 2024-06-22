import React from 'react';
import { Divider, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const imagePath = '/LandingPageImage.png';

export default function LandingPage() {
  function parallax(event: MouseEvent): void {
    const landingPage = document.getElementById('landing_page');
    if (!landingPage) {
      return;
    }

    const x = (window.innerWidth / 2 - event.pageX) / 135;
    const y = (window.innerHeight / 2 - event.pageY) / 135;

    const getMatrixTwoVal = Math.max(x, y) * Math.min(x, y) * -0.1;

    landingPage.style.transform = `matrix(${1 - Math.abs(x) / 9}, 
    ${Math.max(x, y) * Math.min(x, y) * -0.1}, 
    ${0.0001}, 
    ${1 - Math.abs(y) / 9}, 0, 0)`;
  }
  document.addEventListener('mousemove', parallax);

  return (
    <div className="h-full w-full overflow-hidden">
      <div
        className="flex max-h-2/3 w-full flex-col justify-center items-center px-5 h-full p-6"
        id="landing_page"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-2/3 max-w-[600px] h-1/2 rounded-full object-cover border-2 border-tirtiary"
          src="./LandingpageImage.png"
        />
        <Divider className="bg-tirtiary max-w-[250px] m-6" />
        <h1 className="uppercase text-xl">{`Welcome!`}</h1>
        <p className="italic text-md">{`I'm James, a Boston based developer.`}</p>
      </div>
    </div>
  );
}
