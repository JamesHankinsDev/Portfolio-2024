import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import Link from 'next/link';

const imagePath = '/LandingPageImage.png';

export default function Home() {
  return (
    <div className="flex w-screen justify-start items-end px-5 landing_page h-full p-6 m-0 rounded">
      <Card
        className="max-w-[400px] bg-primary text-secondary opacity-85"
        isBlurred
      >
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">{`Hi, I'm James!`}</p>
          </div>
        </CardHeader>
        <Divider className="bg-secondary" />
        <CardBody>
          <p>{`A Boston based developer.`}</p>
        </CardBody>
        <Divider className="bg-secondary" />
        <CardFooter>
          <Link href="/AboutMe">
            <Button className="bg-secondary text-primary opacity-100 my-2">
              <strong>{`Learn more about me >`}</strong>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
