import React from 'react';
import {PageContainer, TextContainer} from "./About.style";

function About(props) {
  return (
    <PageContainer>
      <TextContainer>
        <div>
          <div>
            <div>
              <p>Welcome to Apex Olympix!</p>
              <br/>
              <p>About Apex Olympix: Apex Olympix is a cutting-edge web platform that serves as the ultimate centralized
                hub for all scholarly contests. Our mission is to provide a comprehensive and accessible platform where
                students, educators, and academic enthusiasts can discover, participate in, and excel in a wide range of
                scholarly competitions.</p>
              <br/>
              <p>Key Features:</p>
              <ol>
                <li>
                  <p>All-in-One Contest Hub: Apex Olympix is your one-stop destination for scholarly contests. We bring
                    together competitions from various academic disciplines, including mathematics, science, literature,
                    history, computer science, and more. No matter your area of interest or expertise, you&apos;ll find
                    an exciting competition to challenge yourself and showcase your abilities.</p>
                </li>
                <li>
                  <p>Comprehensive Contest Listings: Our platform provides detailed information on each contest,
                    including eligibility criteria, registration deadlines, competition dates, rules, and prizes. With
                    our intuitive search and filtering options, you can easily navigate through the multitude of
                    contests to find the ones that align with your interests and goals.</p>
                </li>
                <li>
                  <p>Seamless Registration Process: Apex Olympix simplifies the contest registration process, allowing
                    you to sign up for multiple competitions effortlessly.</p>
                </li>
                <li>
                  <p>Resources and Study Materials: Apex Olympix is not just a contest platform; we also offer a wealth
                    of resources to help you excel in your chosen academic pursuits. Access study guides, sample
                    questions, past papers to enhance your preparation and stay ahead of the competition.</p>
                </li>
              </ol>
              <p>Join Apex Olympix today and embark on an exhilarating journey of intellectual exploration, competition,
                and personal growth. Unleash your scholarly prowess and take your academic achievements to new
                heights!</p>
            </div>
          </div>
        </div>
      </TextContainer>
    </PageContainer>
  );
}

export default About;