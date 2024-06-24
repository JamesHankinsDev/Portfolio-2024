'use client';

import React, { useEffect } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Image } from '@nextui-org/image';

const copy = {
  coverBlrub: (
    <>
      <p>
        {`I’m a Software Developer, Customer Advocate and Growth Marketer, basketball enthusiest, amatuer chef, and newly minted fiance based in greater Boston (Go Celtics - Congrats on Banner 18!)`}
      </p>
      <br />
      <p>
        {`At my core, I'm life-long learner who loves facing a new challenge. I'm a completionist, never liking to leave any stones unturned, and an includer who seeks input from everyone he can when working with others. I'm naturally extremely curious on how things work and love to uncover something new. To put it simply, I'm a tinkerer who loves to take on new challenges and create cool things!`}
      </p>
    </>
  ),
  earlyCareer: (
    <>
      <p>
        {`My early career has been anchored to supporting people in being successful. From interning at L.L. Bean in Freeport, Maine, where I helped to develop an in-house technology upskilling curriculum for staff, to Restaurant and Retail experiences, my early career stressed the importance of communication and customer experience.`}
      </p>
      <br />
      <p>
        {`The majority of my early career, however, was at EF Education First, a student travel organization specalizing in helping middle and high school educators lead their students around the world on immersive class tours. It was at EF that I first got the technology itch, first becoming a data specialist with the Sales and Service team, leading executive level Excel courses and analyzing customer data tables to identify major risks or key opportunities to the team, and later in becoming the Marketing Technologiest, owning marketing lead capture sites, maintaining social and paid search campaigns, and driving executive campaign presentations to recommend additional areas to shift spend and giving guidance on performance.`}
        ,
      </p>
    </>
  ),

  softwareBootcamp: (
    <>
      <p>
        {`While EF sparked the start of a technology interest, I soon ran into the blocker that I wasn't fluent in any meaningful software language. While able to edit and tailor basic HTML and CSS for lead capture sites, I wanted to develop further into a technologist that could understand the full customer funnel from add click to the creation of a CRM record.`}
      </p>
      <br />
      <p>
        {`To do that, I left EF for General Assembly, an immersive Software Bootcamp. Here, I spent the next 3 months learning the basics of computer science, refining my understanding of HTML and CSS, and being introduced to a few major web development technologies like JavaScript and React, Ruby on Rails, AWS and S3 Bucket Storage, and more. You can check out a few of the projects that were completed during the Bootcamp on my "Project Work" page.`}
      </p>
    </>
  ),
  thePNW: (
    <>
      <p>{`Somewhere between my marketing years at EF and finishing the General Assmebly course, I met the woman that turned out to be the love of my life, Meagan. Spoiler alert: she's the woman with me  on the home page! (thank you GPT for the stylized image!). She went to get her Masters Degree at the University of Washington in Seattle, and so I move to the Pacific North West! (Don't worry, it's a happy ending as we got engaged last October!)`}</p>
      <br />
      <p>
        {`While in Seattle, I found my way to a software apprenticeship with one of the premier technology consulting organizations - Accenture. Here, I went from knowing how to write high quality software in theory (thanks G.A.), to actually writing production level software every day.`}
      </p>
      <br />
      <p>
        {`Here, I was exposed to anything from writing Design Systems to support rappid product development, to Ruby on Rails based web app support for virtual technology learning organizations, to writing code for one of the largest technology  organizations in the world. I wrote anything from Data Pipelines in Python, to UI experiences in React, to supporting privacy and safety initiatives in proprietary OOP server frameworks.`}
      </p>
      <br />
      <p>
        {`A common experience I find at Accenture is the importance of being able to learn at a rapid pace. I've been fortunate to be able to go from new joiner and first exposure to new software, to being a go-to subject matter expert in a matter of a few years. I've experienced not only how to write code in new frameworks and languages, but how to document and train others in those frameworks and languages. I've supported engineering teams as an individual contributor, and have led other developers as a project lead.`}
      </p>
    </>
  ),
  aNewChapter: (
    <>
      <p>
        {`As previously mentioned, I'm newly engaged to my beautiful fiance Meagan (*hold for applause..... okay). She is origionally from the Boston area, and this is where I did my adult-growing-up years (my term for my 20's). While we love to travel and explore, New England always was and always will be home for us.`}
      </p>
      <br />
      <p>
        {`I've been fortunate to have been able to return home and stay with Accenture, while Meagan decided getting a Masters was so nice, she'd do it twice and study both Social Work and Public Health. We now live here in Boston with our pup, Diego, and are excited to be getting married in the Spring.`}
      </p>
      <br />
      <p>
        {`If you're interested in technology, bootcamps, web or game development (dabbling here!), catching a sports game (particularly a Celtics, Patriots, Nottingham Forest, or Wrexham game), or generally getting in touch, feel free to reach out and say hi!`}
      </p>
    </>
  ),
};

export default function AboutMe(): React.ReactElement {
  useEffect(() => {
    function parallax(event: MouseEvent): void {
      const aboutMeImage = document.getElementById('james_photo');
      if (!aboutMeImage) {
        return;
      }

      const x = (window.innerWidth / 2 - event.pageX) / 150;
      const y = (window.innerHeight / 2 - event.pageY) / 150;

      aboutMeImage.style.transform = `translate(${x * 0.5}%, ${y * 0.5}%)`;
    }
    document.addEventListener('mousemove', parallax);
  }, []);

  const itemClasses = {
    base: 'py-0 grow',
    title: 'text-lg text-secondary',
    trigger:
      'px-2 py-0  rounded-lg h-14 flex items-center data-[hover=true]:italic data-[open=true]:font-bold data-[open=true]:italic data-[hover=true]:font-bold',
    indicator: 'text-medium',
    content: 'text-small px-2 text-primary border-t-1 border-zinc-100/50',
  };

  return (
    // <div className="h-full w-full flex justify-center items-center px-3">
    <div className="h-full w-fit max-w-[1200px] justify-center items-center sm:overflow-hidden overflow-y-scroll">
      {/* <div className="flex justify-center items-center w-full h-full py-6 about_me flex-row"> */}
      <div className="grid grid-cols-12 gap-0 h-full items-center justify-center">
        <Image
          isBlurred
          removeWrapper
          src="/IMG_0314.jpeg"
          alt="Author, James, in a chair"
          className="rounded about_me_image h-0 w-0 sm:h-fit sm:w-fit sm:col-span-2"
          id="james_photo"
        />
        <Accordion
          defaultExpandedKeys={['1']}
          itemClasses={itemClasses}
          showDivider={false}
          className="rounded bg-primary opacity-85 about_me_accordian col-span-8"
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
    </div>
  );
}
