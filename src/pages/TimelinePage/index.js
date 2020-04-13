import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import "./TimelinePage.scss";

const textColor = "#eee";
const bgColor = "#00171f";

class TimelinePage extends Component {
  render() {
    return (
      <div className="TimelinePage">
        <h1 className="title center serif">Timeline</h1>
        <h3 className="subtitle center serif">Find me what I am upto these days!</h3>
        <Timeline lineColor={"#00171f"}>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="February 2020"
          >
            <p>
              Data Science Intern at <a href="https://www.ericsson.com/en">Ericsson</a>.
            </p>

            <p>Started Learning Flutter. MetaJUIT 101 soon!</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="Jan 2020"
          >
            <p>Runner Up, Dotslash 2020 Hackathon</p>
            <p>6th position, Hackverse 2020 Hackathon</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="December 2019"
          >
            <p>Learnt React.js, Node.js, MongoDB</p>
            <p>Started Full Stack Journey.</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="May 2019"
          >
            <p>Interned at Akvo. Automated Atmospheric Water Generators</p>

            <p>
              <a href="https://www.coursera.org/account/accomplishments/specialization/YJ83STEXMXEE">
                Deep Learning Specialization.
              </a>{" "}
              World Rank 29{" "}
              <a href="https://www.hackerearth.com/challenges/competitive/brainwaves-machine-learning/">
                Brainwaves 2019
              </a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="January 2019"
          >
            <p>
              Built <a href="https:github.com/akhilesh-k/metaqp-test">MetaQP 🚀</a>
            </p>
            <p>Elected as ACM Student Chapter Vice-Chairperson</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="October 2018"
          >
            <p>
              Organised Hacktoberfest{" "}
              <span aria-label="heart" role="img">
                💖
              </span>
            </p>
            <p>Learnt JavaScript</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="August 2018"
          >
            <p>
              <a href="http://communities.techstars.com/india/solan-himachal-pradesh-india/startup-weekend/13143#event-organizers">
                Organized
              </a>{" "}
              Startupweekend Solan.
            </p>
            <p>
              <a href="http://communities.techstars.com/india/solan-himachal-pradesh-india/startup-weekend/13143#event-organizers">
                Did Email Marketing!
              </a>{" "}
              Designed, Published, Analyzed and Marketed with Email.{" "}
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="February 2018"
          >
            <p>National Entrprenuership Challenge Finalist!</p>
            <p>
              Top 6 among 500 teams across the country at the National Entrepreneurship Challenge at
              IIT Bombay.
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="Pretty much complete 2018"
          >
            <p>Machine Learning! Computer Vision! Contributed to OpenCV.</p>
            <p>Strong Open Source Advocate!!</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="November 2017"
          >
            <p>
              1st Prize!! Smart City Hackathon. Built{" "}
              <a href="https://github.com/akhilesh-k/cityiotary">CityIoTary</a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="September-December 2017"
          >
            <p>Lot's of Robotics! ROS, SLAM and Odometry</p>
            <p>
              <a href="https://www.coursera.org/account/accomplishments/certificate/9SSNE58D35EH">
                {" "}
                Robotics Specialization
              </a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="August 2017"
          >
            <p>
              Machine Learning 101{" "}
              <a href="https://www.coursera.org/account/accomplishments/certificate/9SSNE58D35EH">
                Andrew Ng's Course
              </a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="January-May 2017"
          >
            <p>Learnt C++ and Python</p>
            <p>Lots of Competitive. IoT, Android and Python. Lot's of Robotics.</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="July-December 2016"
          >
            <p>Introduction to the world of programming!</p>
            <p>
              CS50 from <a href="https://cs50.harvard.edu/x/2020/">Hrvard</a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="14 Billion Years Ago"
          >
            <p>
              Our whole universe was in a hot dense state Then nearly fourteen billion years ago
              expansion started. Wait... The Earth began to cool The autotrophs began to drool
              Neanderthals developed tools We built a wall (we built the pyramids) Math, science,
              history, unraveling the mystery That all started with the big bang!
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default TimelinePage;
