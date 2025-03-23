import ArrowUpRightIcon from '../assets/icons/arrow-up-right.svg';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkOutlineIcon } from '@progress/kendo-svg-icons';

const portfolioProjects = [
  {
    company: 'Sky Mavis',
    year: '2024–present',
    title: 'Ronin Market fka Mavis Market',
    results: [
      { title: 'Mobile-prioritized design' },
      { title: 'First Presale: 10x oversubscribed' },
      { title: 'Countless events attracted whales 🐳' },
    ],
    link: 'https://marketplace.roninchain.com',
    image:
      'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F200ac70b-8d0e-45c0-8d0f-cbb5c4304fb4_5760x6544.png',
  },
  {
    company: 'Mercatus',
    year: '2024',
    title: 'Stor.ai Grocery eCommerce',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://stor.ai',
    image: 'https://stor.ai/wp-content/uploads/2024/01/FY24_Store_home-hero2.jpg',
  },
  {
    company: 'UEL School',
    year: '2021–2023',
    title: 'UEL AR Camera (Unity C#)',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Help 95% of freshmen adapt quickly to school.' },
      { title: 'The project achieved faculty-level recognition.' },
    ],
    link: 'https://github.com/longphanquangminh/Unity-AR-UEL-CSharp/blob/master/NCKH_AR_BaoCaoTongKet_v5.pdf',
    image: 'https://longphanportfolio.vercel.app/_next/static/media/uelarcameraapp.4379f488.svg',
    buttonText: 'View document',
  },
];

export const ProjectsSection = () => {
  return (
    <div className='pb-16 flex justify-center'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />
        <div className='mt-10 md:mt-20 flex flex-col gap-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>{project.title}</h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map(result => (
                      <li key={result.title} className='flex items-center gap-2 text-sm md:text-base text-white/50'>
                        <SvgIcon icon={checkOutlineIcon} className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target='_blank'>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 my-8 cursor-pointer'>
                      <span>{project.buttonText || 'Visit Live Site'}</span>
                      <img src={ArrowUpRightIcon} className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative rounded-t-2xl overflow-hidden border-t border-l border-r border-gray-300'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none '
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
