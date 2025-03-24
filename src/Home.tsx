import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { Fade } from '@progress/kendo-react-animation';

import { AppBar, AppBarSection, Avatar } from '@progress/kendo-react-layout';
import { Button, FloatingActionButton, FloatingActionButtonHandle } from '@progress/kendo-react-buttons';
import GradientText from './components/gradient-text/GradientText';

import './Home.css';
import SplitText from './components/split-text/SplitText';
import PixelTransition from './components/pixel-transition/PixelTransition';
import Aurora from './components/aurora/Aurora';
import { SvgIcon, Typography } from '@progress/kendo-react-common';
import { checkIcon, chevronDoubleRightIcon, eyeIcon, paperPlaneIcon, searchIcon } from '@progress/kendo-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Iridescence from './components/iridescence/Iridescence';
import ScrollVelocity from './components/scroll-velocity/ScrollVelocity';
import { ContactSection } from './sections/Contact';
import { ProjectsSection } from './sections/Projects';
import { Popup } from '@progress/kendo-react-popup';
import { Slider, SliderChangeEvent } from '@progress/kendo-react-inputs';

const skills = [
  {
    label: 'HTML5',
    percent: 100,
  },
  {
    label: 'CSS3/SCSS',
    percent: 100,
  },
  {
    label: 'JavaScript ES6+',
    percent: 90,
  },
  {
    label: 'TypeScript',
    percent: 80,
  },
  {
    label: 'C#',
    percent: 80,
  },
  {
    label: 'ReactJS/NextJS',
    percent: 85,
  },
  {
    label: 'NestJS',
    percent: 80,
  },
  {
    label: 'TailwindCSS',
    percent: 85,
  },
  {
    label: 'Python',
    percent: 85,
  },
  {
    label: 'SQL',
    percent: 83,
  },
];

export default function Home() {
  const [isOutOfViewport, setIsOutOfViewport] = useState(false);
  const [isOutOfViewport2, setIsOutOfViewport2] = useState(false);
  const [isOutOfViewport3, setIsOutOfViewport3] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [velocity, setVelocity] = useState(100);

  const divRef = useRef<HTMLDivElement>(null);
  const starterRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const anchor = useRef<FloatingActionButtonHandle>(null);

  const textVelocity = Math.round((velocity / 1000) * 100);

  const getFireIcons = (value: number) => {
    if (value < 60) return '';
    const fireCount = Math.floor((value - 60) / 10) + 1;
    return '🔥'.repeat(fireCount);
  };

  const onChangeTextVelocity = (event: SliderChangeEvent) => {
    const { value } = event || {};
    setVelocity(value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOutOfViewport(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsOutOfViewport2(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        setIsOutOfViewport3(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    if (contactRef.current) {
      observer2.observe(contactRef.current);
    }

    if (skillsRef.current) {
      observer3.observe(skillsRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
      if (contactRef.current) {
        observer2.unobserve(contactRef.current);
      }
      if (skillsRef.current) {
        observer3.unobserve(skillsRef.current);
      }
    };
  }, []);

  const scrollToStarter = () => {
    starterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='global-container'>
        <div ref={starterRef} className='h-[50px]'></div>
        <AppBar className='appbar mainbar' position='top'>
          <AppBarSection>
            <Button themeColor='tertiary' fillMode='link' className='k-mr-1' onClick={scrollToStarter}>
              Home
            </Button>
            <Button themeColor='tertiary' fillMode='link' onClick={scrollToAbout}>
              About
            </Button>
            <Button themeColor='tertiary' fillMode='link' onClick={scrollToProjects}>
              Projects
            </Button>
            <Button themeColor='tertiary' fillMode='link' onClick={scrollToContact}>
              Contact
            </Button>
          </AppBarSection>
        </AppBar>
        <section className='section-container main-container'>
          <div className='k-d-flex k-flex-col k-my-12'>
            <GradientText>
              <div className='nameContainer'>
                <img src={'/assets/icons/hero-hand.svg'} width={80} height={80} />
                <Typography.h1 className='welcome-title'>Hello! I'm Long Phan</Typography.h1>
              </div>
            </GradientText>
            <SplitText
              text='Web3 Software Engineer @ Sky Mavis'
              className='text-2xl font-semibold text-center'
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin='-50px'
            />
            <div className='avatar' ref={divRef}>
              <PixelTransition
                firstContent={
                  <img
                    src='https://cdn.skymavis.com/mm-cache/3/0/f66691e98855d2ccc8410ca4b0a8d0.png'
                    alt='Software Engineer'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'grid',
                      placeItems: 'center',
                      backgroundColor: '#111',
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: '3rem', color: '#ffffff' }}>Full-stack Developer</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className='custom-pixel-card'
              />
            </div>
            <div className='buttonGroup'>
              <a href='../public/CV_PhanQuangMinhLong_SWE.pdf' target='_blank'>
                <FloatingActionButton
                  className='floatButton'
                  text='View Resume'
                  themeColor='tertiary'
                  svgIcon={eyeIcon}
                  align={{ horizontal: 'end', vertical: 'top' }}
                />
              </a>
              <FloatingActionButton
                className='floatButton2'
                text='About me'
                themeColor='tertiary'
                svgIcon={searchIcon}
                align={{ horizontal: 'end', vertical: 'top' }}
                ref={anchor}
                onClick={() => {
                  scrollToDemo();
                }}
              />
              <Popup anchor={anchor.current && anchor.current.element} show={showPopup}>
                <div className='bg-red-500 w-96 h-96'>hehe</div>
              </Popup>
            </div>
          </div>
          <Aurora />
        </section>
        <section className='section-container' ref={demoRef}>
          <ContactSection />
        </section>
        <section className='section-container skill-container' ref={skillsRef}>
          <h5 className='section-title'>Skills</h5>
          <div className='skill-list'>
            {skills.map((skill, index) => (
              <div key={index}>
                <Typography.h6 className='skill-label'>{skill.label}</Typography.h6>
                <ProgressBar
                  className='progress'
                  labelVisible={false}
                  animation
                  value={isOutOfViewport3 ? 0 : skill.percent}
                />
              </div>
            ))}
          </div>
        </section>
        <section className='section-container' ref={projectsRef}>
          <ProjectsSection />
        </section>
        <section ref={contactRef} className='section-container banner relative'>
          <div className='custom-scroll-text custom-2'>
            <Fade transitionEnterDuration={800} transitionExitDuration={1000}>
              {!isOutOfViewport2 && <ScrollVelocity texts={['LONG PHAN']} velocity={velocity} />}
            </Fade>
          </div>
          <div className='bg-white rounded-lg w-auto h-96 overflow-hidden relative iridescence'>
            <div className='absolute absolute-info'>
              <div>
                <Typography.h1 className='special-text special-icon-text'>👨🏻‍💻</Typography.h1>
                <Typography.h1 className='special-text'>Let's create something extraordinary</Typography.h1>
                <Typography.h1 className='special-text'>from scratch together.</Typography.h1>
              </div>
              <FloatingActionButton
                className='floatButton3'
                text='Contact me'
                themeColor='dark'
                align={{ horizontal: 'end', vertical: 'top' }}
                onClick={() => setShowPopup(!showPopup)}
              />
            </div>
            <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />
          </div>
          <div className='custom-scroll-text'>
            <Fade transitionEnterDuration={1000}>
              {!isOutOfViewport2 && <ScrollVelocity texts={['LONG PHAN']} velocity={velocity} />}
            </Fade>
          </div>
        </section>

        <section className='section-container slider-container'>
          <Typography.h6>
            🚀 Tweak the scroll velocity. Text speed: {textVelocity}% {getFireIcons(textVelocity)}
          </Typography.h6>
          <Slider
            disabled={false}
            min={0}
            max={1000}
            step={0.1}
            defaultValue={velocity}
            onChange={onChangeTextVelocity}
          />
        </section>

        <footer className='footer'>
          <Typography.h6 className='special-text'>© {new Date().getFullYear()}. All rights reserved</Typography.h6>
          <Typography.h6 className='special-text'>
            Made by @
            <a className='underline' href='https://github.com/longphanquangminh' target='_blank'>
              longphanquangminh
            </a>{' '}
            with Kendo React
          </Typography.h6>
        </footer>
        <div className={`fixed-popup ${isOutOfViewport && 'expanded'}`}>
          <div className='fixed-popup-container'>
            <BadgeContainer>
              <Avatar size='large' rounded='full' type='image'>
                <img src={'/assets/images/ML.png'} alt='My Avatar' />
              </Avatar>
              <Badge
                position='inside'
                rounded='full'
                size='small'
                align={{ vertical: 'top', horizontal: 'end' }}
                themeColor='success'
              >
                <SvgIcon icon={checkIcon} />
              </Badge>
            </BadgeContainer>
            <div className='subcontainer'>
              <div>
                <Typography.h4>Having new ideas?</Typography.h4>
                <a href='https://www.linkedin.com/in/phanquangminhlong' target='_blank'>
                  <FloatingActionButton
                    size='small'
                    className='sendMessageButton'
                    text='Send message'
                    themeColor='tertiary'
                    svgIcon={paperPlaneIcon}
                    align={{ horizontal: 'end', vertical: 'top' }}
                  />
                </a>
              </div>
              <SvgIcon
                className='check-icon-in-popover'
                icon={chevronDoubleRightIcon}
                onClick={() => setIsOutOfViewport(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='small-device-container'>
        <Typography.h1>Please use a larger screen for best experience.</Typography.h1>
        <Typography.h6 className='special-text'>
          Made by @
          <a className='underline' href='https://github.com/longphanquangminh' target='_blank'>
            longphanquangminh
          </a>{' '}
          with Kendo React
        </Typography.h6>
      </div>
    </>
  );
}
