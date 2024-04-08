import { FileText, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import ProjectSection from './components/projects/section';
import Waving from './components/waving';
import ExperienceSection from './components/experience/section';
import SkillsSection from './components/skills/section';
import CtaSection from './components/cta/section';
import FooterSection from './components/footer/section';
import Follow from './components/navbar/follow';
import NavBar from './components/navbar/navbar';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <main className='grid-[20px] mt-[80px] grid  grid-cols-4 lg:grid-cols-6'>
        <Follow />
        <header className='col-span-4 grid w-full grid-cols-4 gap-[20px] lg:col-start-2'>
          <span className='col-span-4 space-y-4 lg:col-span-2'>
            <div className='relative h-[150px] w-[150px] overflow-hidden rounded-full'>
              {/* <Waving /> */}
              <Image
                className='absolute top-0 -z-10'
                src={'/image/priyank.jpeg'}
                width={200}
                height={200}
                alt='image colors'
              />
            </div>
            <section className='space-y-1'>
              <h1 className=''>Hi, I&apos;m Priyank Jagad</h1>
              <p>
                A <span className='bold'>software engineer</span> with a passion
                in <span className='bold'>FullStack</span> and{' '}
                <span className='bold'>FrontEnd development</span>
              </p>
            </section>
            <section className='flex justify-end gap-[10px] pt-8'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://drive.google.com/file/d/1W6gYDj4_V_4WBUihANbspq9QknD87ffD/view?usp=sharing'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <FileText />
              </a>
              <a
                href='https://github.com/priyank59'
                target='_blank'
                rel='noreferrer'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <Github />
              </a>
              <a
                href='https://www.linkedin.com/in/priyank-jagad/'
                rel='noreferrer'
                target='_blank'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <Linkedin />
              </a>
            </section>
          </span>
          <span className='col-span-4 space-y-4 lg:col-span-2'>
            <p>
            Computer engineering graduate with a minor in data science. My passion for web development blossomed during my studies, where I gained hands-on experience building functional and data-driven web applications. 
            Since then, I have further honed my skills through professional roles and personal projects.
            </p>
            <p>
            With a strong foundation in languages like Java, Python, JavaScript, and frameworks like React, Redux, Django, and Spring Boot, I am well-equipped to tackle complex web development challenges.I am driven to stay up-to-date with the latest trends and deliver innovative, data-driven solutions.
            </p>
          </span>
        </header>
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <CtaSection />
      </main>
      <FooterSection />
      <Analytics/>
    </>
  );
}
