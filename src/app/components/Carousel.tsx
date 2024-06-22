'use client';
import {
  Button,
  Card,
  CardBody,
  Link,
  Image,
  Divider,
} from '@nextui-org/react';
import React, { createRef, useEffect, useRef, useState } from 'react';

export const Carousel = ({
  data,
}: {
  data: {
    image: string;
    title: string;
    link: string;
    description: string;
    subType: string;
  }[];
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const refs = useRef<any>([]);

  const handleCarouselChange = (i: number) => {
    const curEl: any = refs.current[i];
    const priorEl: any = refs.current[currentImg];

    setCurrentImg(i);
    curEl.className = curEl.className
      .split(' ')
      .filter((cn: string) => cn !== 'w-0' && cn !== 'h-0')
      .join(' ');
    priorEl.className = [...priorEl.className.split(' '), 'w-0', 'h-0'].join(
      ' '
    );
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex-col">
        {data.map((v, i) => {
          return (
            <div
              key={i}
              ref={(ref) => {
                refs.current[i] = ref;
              }}
              className={`transition-all max-w-[800px] rounded ${
                i != 0 ? 'w-0 h-0' : ''
              }`}
            >
              <Card
                isBlurred
                className="border-none bg-secondary/60 max-w-[610px]"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-12 gap-6 gap-4 items-center justify-center h-full">
                    <div className="relative col-span-12">
                      <Image
                        alt="Album cover"
                        className="object-cover"
                        height={200}
                        shadow="md"
                        src={v.image}
                        width="100%"
                      />
                    </div>

                    <div className="flex flex-col col-span-12 py-3">
                      <div className="flex flex-col gap-0 content-between justify-between">
                        <h3 className="font-semibold text-foreground/90">
                          {v.title}
                        </h3>
                        <p className="text-small text-foreground/80">
                          {v.subType}
                        </p>
                        <p className="text-xs font-medium mt-2">
                          {v.description}
                        </p>
                        <Divider className="my-6" />
                        <Button
                          as={Link}
                          isExternal={true}
                          href={v.link}
                          className="data-[hover]:bg-foreground/10"
                          radius="full"
                          variant="flat"
                        >
                          Check it out on GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        })}
        <div className="flex justify-between content-between items-center py-2">
          <Button
            disabled={currentImg == 0}
            onClick={() => handleCarouselChange(currentImg - 1)}
            className={`border font-bold ${currentImg == 0 && 'opacity-50'} `}
          >
            {'<'}
          </Button>
          {data.map((v, i) => {
            return (
              <div
                onClick={() => handleCarouselChange(i)}
                key={`${i}_b`}
                className={`w-3 h-3 rounded-full ${
                  i === currentImg ? 'bg-tirtiary' : 'bg-secondary'
                } hover:bg-secondary/60 cursor-pointer`}
              ></div>
            );
          })}
          <Button
            disabled={currentImg == data.length - 1}
            className={`border font-bold ${
              currentImg == data.length - 1 && 'opacity-50'
            } `}
            onClick={() => handleCarouselChange(currentImg + 1)}
          >
            {'>'}
          </Button>
        </div>
      </div>
    </div>
  );
};
