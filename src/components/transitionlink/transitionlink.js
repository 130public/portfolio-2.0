import React from "react"
import { gsap } from "gsap";
import {navigate} from "gatsby";

const TransitionLink = (props) => {
    
    const AnimateOut = (event, to) => {
      event.preventDefault();
      gsap.timeline(
        {
          onComplete: () =>{
            navigate(to)
            gsap.timeline()
            .set('.mask', { transform: 'translateY(0)',opacity:0 })
            .to('.mask', { opacity: 1.0, duration: 0.25, delay:0.5 })
            .set('.layout', { opacity: 0 })
            .to('.layout', { opacity: 1.0, duration: 0.25, delay:0.25 })
          }
        }
      )
      .to('.layout', { opacity: 0, duration: 0.25 })
    }
    return (
      <a className={props.className} href={props.to} onClick={(e) => AnimateOut(e, props.to)}>{props.children}</a>
    )

  }

  export default TransitionLink