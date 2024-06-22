'use client';
import React from 'react';
import { Carousel } from '../components/Carousel';
import { Card, CardBody, Link, Image, Button } from '@nextui-org/react';

export default function ProjectWork() {
  const DATA = [
    {
      title: 'Tic-Tac-Toe',
      subType: 'Game',
      description: 'A Front-End based game written in Vanilla JS',
      link: 'https://github.com/JamesHankinsDev/Tic-Tac-Toe-Game',
      image: './Tic-Tac-Toe.png',
    },
    {
      title: 'Groups',
      subType: 'CRUD App',
      description:
        'A full stack people organizing app written with Ruby on Rails, JSON, and Handlebars.js',
      link: 'https://github.com/JamesHankinsDev/Tic-Tac-Toe-Game',
      image: './Groups.png',
    },
    {
      title: 'ChickenPix',
      subType: 'Image Repository',
      description:
        'Full-Stack image storage app built with Express, MongoDB, Handlebars.js, and AWS S3 Buckets',
      link: 'https://github.com/JamesHankinsDev/trips-client',
      image: './ChickenPix.png',
    },
    {
      title: 'T.R.I.P.S.',
      subType: 'CRUD App',
      description:
        'A full stack adventure planning app written with Express, MongoDB, and React.js',
      link: 'https://github.com/JamesHankinsDev/trips-client',
      image: './trips.png',
    },
  ];

  return (
    <div className="h-full w-full flex justify-center items-center flex-col p-8">
      <h1>Here are a few projects I've been working on</h1>
      <Carousel data={DATA} />
    </div>
  );
}
