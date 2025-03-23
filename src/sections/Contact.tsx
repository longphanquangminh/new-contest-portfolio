import { Typography } from '@progress/kendo-react-common';
import grainImage from '../assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
      <div
        className='absolute inset-0 opacity-5 -z-10'
        style={{
          backgroundImage: `url(${grainImage})`,
        }}
      ></div>
      <div className='dark:bg-theme-white bg-theme-secondary dark:bg-opacity-5 bg-opacity-5 dark:text-theme-white text-theme-secondary text-sm sm:text-base lg:text-lg rounded-[40px] md:rounded-[40px] lg:rounded-[50px] leading-6 sm:leading-7 lg:leading-9 text-justify'>
        I'm Long Phan. I was born in 2001 and I'm a bachelor of Management Information System (IT) at Faculty of
        Information Systems (University of Economics and Law VNU-HCM). I am presently ranked in the top #53 among GitHub
        Users By Followers in Vietnam (2/2025). Throughout my university years, I've participated in various
        competitions, activities, and was a collaborator of numerous academic organizations in school in order to gain
        more knowledge and experience for my future career.
      </div>
    </div>
  );
};
