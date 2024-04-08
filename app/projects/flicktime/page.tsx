import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';

const flicktime_data = {
  title: 'FlickTime',
  category: 'Full Stack Movie Trailer Recommendation App',
  skills: [
    'Next.js',
    'React.js',
    'Tailwind',
    'Firebase',
    'Python',
    'Machine Learning',
    'Kubernetes',
    `Nginx`,
    `AWS EC2`,
    'Flask'
  ],

  image_url: '/image/FlickTime.png',
  github_link: 'https://github.com/priyank59/Flicktime',
  live_link: 'http://flicktime.website/',
  overview: [
    `FlickTime is a user-friendly app that simplifies the process of discovering new and exciting movie trailers. Powered by advanced machine learning algorithm, FlickTime analyzes your movie preferences and viewing history to curate personalized trailer recommendations tailored to your unique tastes. Stay ahead of the curve and explore upcoming releases with FlickTime's seamless browsing experience and insightful ratings from fellow movie enthusiasts. Never miss another must-see trailer again with FlickTime`,
  ],
  
  last: '/projects/AI_Gini',
  next: '/projects/sjsu_marketplace',
  warning: null,
};

const page = () => {
  return (
    <>
      <NavBar />
      <main className='mt-[80px] grid grid-cols-6'>
        <FullProjectSection data={flicktime_data} />
        <ExploreMore previous={flicktime_data.last} next={flicktime_data.next} />
      </main>
    </>
  );
};

export default page;

