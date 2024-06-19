import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Skeleton,
} from '@nextui-org/react';

export default function Resume() {
  const [isLoaded, setIsLoaded] = React.useState(true);

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 p-2 flex-col !items-start bg-white/30 rounded">
            <p className="text-tiny text-primary/60 uppercase font-bold">
              Biddeford, ME
            </p>
            <h4 className="text-primary/90 font-medium text-xl">
              The University
              <br />
              of New England
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./UNE.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  B.S. Business Administration
                </p>
                <p className="text-tiny text-white/60">B.A. Communications</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              See More
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 p-2 flex-col !items-start bg-white/30 rounded">
            <p className="text-tiny text-primary/60 uppercase font-bold">
              Boston, MA
            </p>
            <h4 className="text-primary/90 font-medium text-xl">
              General Assembly
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./Boston_2.jpg"
          />
          <CardFooter className="absolute bg-white/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-black/80">
                  Software Engineering Fellow
                </p>
                <p className="text-tiny text-black/80">B.A. Communications</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              See More
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px] flex flex-col gap-3 justify-between bg-secondary/40"
        >
          <CardHeader className="absolute z-10 p-1 flex-col items-start bg-white/20 rounded">
            <p className="text-tiny m-1 text-white/60 uppercase font-bold">
              Resume / CV
            </p>
            <h4 className="text-white font-medium text-large">Get my Resume</h4>
          </CardHeader>
          <Skeleton isLoaded={isLoaded} className="rounded-lg m-2">
            <div className="h-32 rounded-lg bg-primary/75 border-1 border-tirtiary"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton
              isLoaded={isLoaded}
              className="pb-2 px-2 w-2/3 rounded-lg"
            >
              <div className="h-3 w-full rounded-lg bg-primary/75 border-1 border-tirtiary"></div>
            </Skeleton>
            <Skeleton
              isLoaded={isLoaded}
              className="pb-2 px-2 w-3/5 rounded-lg"
            >
              <div className="h-3 w-full rounded-lg bg-primary/75 border-1 border-tirtiary"></div>
            </Skeleton>
            <Skeleton
              isLoaded={isLoaded}
              className="pb-2 px-2 w-4/5 rounded-lg"
            >
              <div className="h-3 w-full rounded-lg bg-primary/75 border-1 border-tirtiary"></div>
            </Skeleton>
            <Skeleton
              isLoaded={isLoaded}
              className="pb-2 px-2 w-2/5 rounded-lg"
            >
              <div className="h-3 w-full rounded-lg bg-primary/75 border-1 border-tirtiary"></div>
            </Skeleton>
          </div>
          <CardFooter className="absolute bg-white/10 bottom-0 z-10 justify-between">
            <div>
              <p className="text-tiny text-black/80">See and download my CV</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Go Now!
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 p-1 flex-col items-start bg-white/40 rounded">
            <p className="text-tiny text-primary/60 uppercase font-bold">
              Boston, MA
            </p>
            <h4 className="text-primary/90 font-medium text-xl">
              EF Education First
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="./Boston.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-tiny text-black/80">Marketing Technologist</p>
              <p className="text-tiny text-black/80">Service & Sales Rep</p>
              <p className="text-tiny text-black/80">
                April, 2014 - July, 2019
              </p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              See More
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 p-1 flex-col items-start bg-white/20 rounded">
            <p className="text-tiny text-primary/60 uppercase font-bold">
              Seattle, WA & Boston, MA
            </p>
            <h4 className="text-primary/90 font-medium text-xl">
              Accenture Consulting
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="./Seattle.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Software Engineer</p>
                <p className="text-tiny text-white/60">March, 2020 - Current</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              See More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
