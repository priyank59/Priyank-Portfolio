import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';


const ai_gini_data = {
  title: 'AI-Gini',
  category: 'Full Stack Creative Feedback and Showcase Platform',
  skills: [
    'Next.js',
    'React.js',
    'Tailwind',
    'Material UI',
    'TypeScript',
  ],

  image_url: '/image/AI.jpeg',
  github_link: 'https://github.com/priyank59/AI-Gini',
  live_link: 'https://ai-gini.vercel.app/',
  overview: [
    'An AI-powered conversational assistant built by integrating with the OpenAI API. This application leverages the cutting-edge natural language processing capabilities of OpenAI to provide intelligent and context-aware responses.',
  ],
  last: '/projects/sjsu_marketplace',
  next: '/projects/flicktime',
  warning: null,
};

const page = () => {
  return (
    <>
      <NavBar />
      <main className='mt-[80px] grid grid-cols-6'>
        <FullProjectSection data={ai_gini_data} />
        <ExploreMore
          previous={ai_gini_data.last}
          next={ai_gini_data.next}
        />
      </main>
    </>
  );
};

export default page;