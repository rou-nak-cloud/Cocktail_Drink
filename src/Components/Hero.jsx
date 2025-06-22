import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' })
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.9,
            ease: 'expo.out',
            stagger: 0.07,
            delay: 1,
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
          .to('.left-leaf', { y: -200 }, 0)
          .to('.right-leaf', { y: 200 }, 0)

        //   video animation start and end
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        // "When the top of the trigger element hits 50% of the viewport height, start the animation."
        //  "When the center of the element hits 60% of the viewport height, start."
        const endValue = isMobile ? '120% top' : 'bottom top';
        // "When 120% down the element hits the top of the viewport, end the animation." (a bit further down for mobile)
        // "When the bottom of the element reaches the top of the viewport, end the animation."

        let videoTl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true
            }
        })
        videoRef.current.onloadedmetadata = () => { 
            //"When the video’s metadata is loaded (such as duration, width, height, etc.), run this function."
            videoTl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
            // Use GSAP to smoothly change the video’s currentTime property — from its starting point (0) all the way to its full duration (the end of the video).
        }
    },[])

  return (
    <>
     <section id='hero' className='noisy'>
        <h1 className='title'>MARTINI</h1>
        <img src="/images/hero-left-leaf.png" alt="left leaf" className='left-leaf' />
        <img src="/images/hero-right-leaf.png" alt="right leaf" className='right-leaf' />

        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crisp. Classic.</p>
                    <p className='subtitle'>
                        Sip the spirit <br /> of the Summer
                    </p>
                </div>

                <div className='view-cocktails'>
                    <p className='subtitle'>
                        Our cocktails are liquid artistry — blending premium spirits, handpicked flavors, and timeless inspiration to create unforgettable moments in every glass.
                    </p>
                    <a href="#cocktails">View Coquetel..</a>
                </div>
            </div>
        </div>
    </section> 
    {/* video */}
    <div className='video absolute inset-0'>
        <video 
            ref={videoRef}
            muted
            playsInline
            preload='auto'
            src='/videos/output.mp4'
        />
    </div>
    </>
  )
}

export default Hero
