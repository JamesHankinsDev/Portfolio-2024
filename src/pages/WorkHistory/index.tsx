import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Link,
} from '@nextui-org/react';

import WorkHistoryModal from '../components/WorkHistoryModal';

export default function Resume() {
  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
          <h1 className="col-span-12 bg-secondary/90 text-primary p-1 rounded my-2 font-bold">
            Resume/CV
          </h1>
        </div>
        <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
          <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[200px]">
            <CardHeader className="absolute z-10 p-2 flex-col !items-start bg-white/40 rounded">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Resume
              </p>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="./Resume.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center"></div>
              <Button
                isExternal={true}
                as={Link}
                href="https://docs.google.com/document/d/e/2PACX-1vQU8lPIFlp3YyKpc3kltqJp-Ew2UvS1L2clGvhUDwAoCJRL87mop_mtPFpLHMmqmgC1Ve5KAeH3XYBL/pub"
                color="primary"
                variant="solid"
                radius="full"
                size="sm"
              >
                Get my CV
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
          <h1 className="col-span-12 bg-secondary/90 text-primary p-1 rounded my-2 font-bold mt-8">
            Education
          </h1>
        </div>
        <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
          <Card isFooterBlurred className="col-span-12 sm:col-span-7 h-[200px]">
            <CardHeader className="absolute z-10 p-2 flex-col !items-start bg-white/40 rounded">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Biddeford, ME
              </p>
              <h4 className="text-black/90 font-medium text-xl">
                The University of New England
              </h4>
            </CardHeader>
            <Image
              isZoomed
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
              <WorkHistoryModal
                header={<h1>UNE</h1>}
                CTA="Learn More"
                body={<p>This is where I went to college</p>}
              />
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="col-span-12 sm:col-span-5 h-[200px]">
            <CardHeader className="absolute z-10 p-2 flex-col !items-start bg-white/30 rounded">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Boston, MA
              </p>
              <h4 className="text-black/90 font-medium text-xl">
                General Assembly
              </h4>
            </CardHeader>
            <Image
              isZoomed
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
              <WorkHistoryModal
                header={<h1>General Assembly</h1>}
                CTA="Learn More"
                body={<p>This is where I learned to code!</p>}
              />
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
          <h1 className="col-span-12 bg-secondary/90 text-primary p-1 rounded my-2 font-bold mt-8">
            Work History
          </h1>
        </div>
        <div className="max-w-[1200px] w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
          <Card
            isFooterBlurred
            className="w-full h-[200px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 p-1 flex-col items-start bg-white/40 rounded">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Boston, MA
              </p>
              <h4 className="text-black/90 font-medium text-xl">
                EF Education First
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full object-cover"
              src="./Boston.jpg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-tiny text-black/80">
                  Marketing Technologist
                </p>
              </div>
              <WorkHistoryModal
                header={<h1>EF Education First</h1>}
                CTA="Learn More"
                body={<p>Sales and Marketing, Baby!</p>}
              />
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[200px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 p-1 flex-col items-start bg-white/20 rounded">
              <p className="text-tiny text-black/60 uppercase font-bold">
                Seattle, WA & Boston, MA
              </p>
              <h4 className="text-black/90 font-medium text-xl">
                Accenture Consulting
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="./Seattle.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Software Engineer</p>
                </div>
              </div>
              <WorkHistoryModal
                header={<h1>Accenture</h1>}
                CTA="Learn More"
                body={<p>Where I currently work.</p>}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
