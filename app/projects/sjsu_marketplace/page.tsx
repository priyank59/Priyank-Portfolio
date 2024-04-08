import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';

const sjsu_maketplace_data = {
  title: 'SJSU Market Place',
  category: 'Full Stack Market Place where SJSU Students can buy/sell items',
  skills: [
    'Next.js',
    'React.js',
    'Tailwind',
    'FastAPI',
    'Python',
    'Tailwind CSS',
    'Kubernetes',
    'Cassandra',
    'Redux',
    'TypeScript'
  ],

  image_url: '/image/SJSU_MarketPlace.png',
  github_link: 'https://github.com/priyank59/Project-SJSU-Marketplace',
  live_link: '',
  overview: [
    'Faced a problem when i was not able to find microprocess for my CMPE 240 class and was not available online as well, but the students who had already completed the class might need to sell that',
    'Existing online marketplaces lack the tailored experience, student engagement and trusted environment desired for peer-to-peer transactions among fellow students',
    'This prompted the development of a full-stack web application designed exclusively for SJSU students, facilitating a seamless and secure marketplace experience within the campus ecosystem',
  ],
  last: '/projects/flicktime',
  next: '/projects/AI_Gini',
  warning:
    '',
};

const page = () => {
  return (
    <>
      <NavBar />
      <main className='mt-[80px] grid grid-cols-6'>
        <FullProjectSection data={sjsu_maketplace_data} />
        <ExploreMore previous={sjsu_maketplace_data.last} next={sjsu_maketplace_data.next} />
      </main>
    </>
  );
};

export default page;
