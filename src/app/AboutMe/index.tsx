'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Image } from '@nextui-org/image';

const copy = {
  coverBlrub: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`,
  earlyCareer: `This is where I will talk about L.L. Bean, Burlington Coat Factory, and 
        Mamaleh's, but also about EF. Include what I learned about understanding how 
        technology can help drive business solutions and decision making.`,
  softwareBootcamp: `Here, I'll talk about general assembly and how that really helped 
        shape my introduction to technology! Include JIT, React and Ruby experience, etc. 
        Don't need to dwell too long, but some good content here will certainly help!`,
  thePNW: `Accenture baby, Accenture...`,
  aNewChapter: `Get excited! You're engaged now, back home in New England, and the Celtics are in the Finals!!!`,
};

export default function AboutMe(): React.ReactElement {
  const itemClasses = {
    base: 'py-0 grow',
    title: 'text-lg text-secondary',
    trigger:
      'px-2 py-0  rounded-lg h-14 flex items-center data-[hover=true]:decoration-tirtiary data-[open=true]:decoration-tirtiary data-[hover=true]:underline data-[open=true]:underline data-[hover=true]:italic data-[open=true]:font-bold',
    indicator: 'text-medium',
    content: 'text-small px-2 text-primary',
  };

  console.log('Height is: ', window.screen.height);

  return (
    <div className="flex justify-start items-start w-full h-fit py-6 about_me flex-row">
      <Image
        isBlurred
        src="/IMG_0314.jpeg"
        width={0.1 * window.screen.width}
        alt="Author, James, in a chair"
        className="rounded about_me_image"
      />
      <Accordion
        defaultExpandedKeys={['1']}
        itemClasses={itemClasses}
        showDivider={false}
        className="rounded bg-primary opacity-85 about_me_accordian"
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          subtitle={
            <p className="text-xs text-secondary">{`Developer, Marketer, Tinkerer`}</p>
          }
          title="Who is James..."
        >
          <div className="bg-secondary rounded opacity-75 p-1">
            {copy.coverBlrub}
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle={
            <p className="text-xs text-secondary">{`Learning to solve business problems`}</p>
          }
          title="Early Career..."
        >
          <div className="bg-secondary rounded opacity-75 p-1">
            {copy.earlyCareer}
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          subtitle={
            <p className="text-xs text-secondary">
              {`Sorry, where does the semi-colon go again?`}
            </p>
          }
          title="Software Bootcamp..."
        >
          <div className="bg-secondary rounded opacity-75 p-1">
            {copy.softwareBootcamp}
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          subtitle={
            <p className="text-xs text-secondary">{`Goin' to see about a girl`}</p>
          }
          title="The P.N.W."
        >
          <div className="bg-secondary rounded opacity-75 p-1">
            {copy.thePNW}
          </div>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          subtitle={
            <p className="text-xs text-secondary">{`I liked it, so I put a ring on it`}</p>
          }
          title="A New Chapter..."
        >
          <div className="bg-secondary rounded opacity-75 p-1">
            {copy.aNewChapter}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
