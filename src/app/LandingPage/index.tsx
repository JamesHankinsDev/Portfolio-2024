import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

const imagePath = '/LandingPageImage.png';

export default function LandingPage() {
  function parallax(event: MouseEvent): void {
    const landingPage = document.getElementById('landing_page');
    if (!landingPage) {
      return;
    }

    const x = (window.innerWidth - event.pageX) / 135;
    const y = (window.innerHeight - event.pageY) / 135;

    console.log({ x, y });
    // landingPage.style.transform = `translateX(${x}px) translateY(${y}px)`;
    landingPage.style.backgroundPositionX = `${40 - x}%`;
    landingPage.style.backgroundPositionY = `${40 - y}%`;
  }
  document.addEventListener('mousemove', parallax);

  return (
    <div
      className="flex w-full justify-start items-end px-5 h-full p-6"
      id="landing_page"
    >
      <Card
        className="max-w-[400px] bg-primary text-secondary opacity-95"
        isBlurred
      >
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md underline decoration-tirtiary text-lg">{`Hi, I'm James!`}</p>
          </div>
        </CardHeader>
        <CardBody>
          <p className="italic">{`A Boston based developer.`}</p>
        </CardBody>
        <Divider className="bg-secondary" />
        <CardFooter>
          <Link color="foreground" to="/AboutMe">
            <Button className="bg-secondary text-primary opacity-100 my-2">
              <strong>{`Learn more about me >`}</strong>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
