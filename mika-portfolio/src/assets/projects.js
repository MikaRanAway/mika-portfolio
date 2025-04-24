import smartMatch from '../assets/smartmatch.gif'
import snake from '../assets/snake.gif'
import python from '../assets/python.png'
import django from '../assets/django.png'
import docker from '../assets/docker.png'
import java from '../assets/java.png'
import gradle from '../assets/gradle.png'
import arduino from '../assets/arduino.png'
import cpp from '../assets/cpp.png'
import mqtt from '../assets/mqtt.png'
import mysql from '../assets/mysql.png'
import fullStar from '../assets/fullstar.png'
import emptyStar from '../assets/emptyStar.png'
import javascript from '../assets/javascript.png'
import vuejs from '../assets/vuejs.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import maven from '../assets/maven.png'
import cavityControl from '../assets/cavityControl.gif'
import Hashikahan from '../assets/Hashikahan.png'
import openCV from '../assets/openCV.png'
import cmake from '../assets/cmake.png'
import {ref} from 'vue'
import coneVision from '../assets/coneVision.gif'
import expressJS from '../assets/ExpressJS.png'
import postman from '../assets/postman.png'

export const projects = ref([
    {
      img: smartMatch,
      bgColor: 'background-color: #3152AD',
      itemColor: 'background-color:rgb(3, 43, 155)',
      title: 'Smart Match',
      description: 'An AI model that generates a list of most likely jobs a given resume fits under',
      Usage:
        '* Smart Match allows users to insert their given resumes and is returned relevant job positions \n\n * An admin dashboard allows training of new models, selection of different model versions, and the management of the database of resumes',
      Tools: [
        { name: 'Python', img: python },
        { name: 'Django', img: django },
        { name: 'MySql', img: mysql },
        { name: 'Docker', img: docker },
      ],
      authors: [
        {name: 'Mika Rannisto', link: 'https://github.com/MikaRanAway'},
        {name: 'Daniel Hueval', link: 'https://github.com/danielvdh24'},
        {name: 'Hashem Ibrahim', link: 'https://github.com/hashem'},
        {name: 'Kai Rowley', link: 'https://github.com/irmata'},
        {name: 'Abdullahi Mahamed', link: 'https://github.com/abdullahimahamed'},
        {name: 'Vilmer Hedin', link: 'https://github.com/vilmerhedin'},
      ],
      lessonsLearned: 'This was a fantastic project to hone many different skills at once. Due to the nature of the Smart Match, I learned and gained alot of experience around machine learning, the hosting of apps, and generally what tools to use when given an assignment like this. Because the app was hosted on Google Cloud with the use of Docker and Kubernetes, the biggest issue we faced was data persistency. Since the app included features of adding or removing resumes to a shared database, we had to handle actually keeping those changes present. Finding out that this was due to databases being reset everytime a new docker image was pushed, I learned alot researching about the use of Persistent Disks and Volume Claims when it comes to hosting an app on the web. Understanding the behaviour of databases within docker images, now Im able to avoid such a time waste when it came to fixing such a big issue so late in the project. Another issue faced and lesson learnt was documentation. Since the group was pretty excited to be working with training their own machine learning model, not much time was spent discussing the general structure of the app. Time spent on brainstorming ideas, could have been spent more efficiently on planning proper diagrams and structure the app should take. Because there was only a mere verbal consensus on such matters, confusion and mistakes occured alot more down the line. Therefore, understanding from our experience, any future projects should definitely encourage the idea of creating diagrams and program structures so that such disorganization doesnt happen again.',
      links: [
        {name: 'Final Report', link: 'https://docs.google.com/document/d/12ovYyPxKwlLhJpHDfa41lNuVnu2AzuexCRN3HlY4m3M/edit?usp=sharing'},
        {name: 'GitHub Repository', link: 'https://github.com/danielvdh24/smart-match'}
      ],
      stars: [
        {name: 'star1', src: fullStar},
        {name: 'star2', src: fullStar},
        {name: 'star3', src: fullStar},
        {name: 'star4', src: fullStar},
        {name: 'star5', src: emptyStar}
      ]
    },
    {
        img: snake,
        bgColor: 'background-color: #6031AD;',
        itemColor: 'background-color:rgb(68, 7, 167)',
        title: 'Snake Game',
        description: 'A full functioning snake game made with OOP qualities',
        Usage:
          '* The snake game allows for users to test how long they can survive playing snake! \n\n* Customization allows for the user to change the snakes colors and game difficulty',
        Tools: [
          { name: 'Java', img: java },
          { name: 'Gradle', img: gradle },
        ],
        authors: [
          {name: 'Mika Rannisto', link: 'https://github.com/MikaRanAway'},
          {name: 'Arvin Rahimi', link: 'https://github.com/Aspanix'},
          {name: 'Ahmad Haj Ahmad', link: 'https://github.com/AhmadHajAhmad'},
          {name: 'Henrik Lagrosen', link: 'https://github.com/helagro'},
          {name: 'Nawras Kanjo', link: 'https://git.chalmers.se/nawrask'},
          {name: 'Teo Portase', link: 'https://github.com/teoportase'},
        ],
        lessonsLearned: 'This was my first ever programming project with a functioning team. Since we were essentially new to the university program, difficulties in who should do what and how things should be handles arose. Management was a very big lesson learnt throughout this course. I got used to making and using project management tools like trello and started embracing the idea of software diagrams. When it comes to the programming aspect of the project, I handled mostly the customization component of the Snake Game. Since we spent lots of time planning and structuring how the game will work, integrating seperate pieces of functionality together was very simple and comprehensive. More time could have been spent meeting together more often since individual members will often go AWOL and work mindlessly into opposite directions, altering the end product. The biggest learning outcome from this project has to be the experience of working with a team for the first time. I understood how git works and how a good structured commit looks like, and am still applying to this day. I also realized how drastically important it is to have open communication with your group mates since one or two mistakes can equal weeks in time spent fixing such wrong-doings. Therefore, for future prospects, I will be ever so adamant on communication with team members and remember how important tools around project management truly is.',
        links: [
          {name: 'Final Report', link: 'https://docs.google.com/document/d/1sAGiwyN8aMHnvsNVO4NVKXtDndyk_DFVBLGrxqTmy3w/edit?usp=sharing'},
          {name: 'GitHub Repository', link: 'https://github.com/MikaRanAway/SnakeGame'}
        ],
        stars: [
          {name: 'star1', src: fullStar},
          {name: 'star2', src: fullStar},
          {name: 'star3', src: emptyStar},
          {name: 'star4', src: emptyStar},
          {name: 'star5', src: emptyStar}
        ]
      },
      {
        bgColor: 'background-color: #3630AD;',
        itemColor: 'background-color:rgb(8, 1, 148)',
        title: 'Shusher',
        description: 'A device to monitor your sound levels built with an Arduino Kit',
        Usage:
          '* Tracks and warns the User if they are being too loud \n\n* Customizable sound thresholds and Wio Terminal UI themes',
        Tools: [
          { name: 'Java', img: java },
          { name: 'Arduino', img: arduino },
          { name: 'C++', img: cpp },
          { name: 'Mqtt', img: mqtt },
        ],
        authors: [
          {name: 'Mika Rannisto', link: 'https://github.com/MikaRanAway'},
          {name: 'Hashem Ibrahim', link: 'https://github.com/hashem'},
          {name: 'Johan Engstrom', link: 'https://github.com/johanengstrom98'},
          {name: 'Ashor Abraham', link: 'https://git.chalmers.se/ashabr'},
          {name: 'Isaac Ternbom', link: 'https://github.com/IsaacLT'},
          {name: 'Abdullahi Mahamed', link: 'https://github.com/abdullahimahamed'},
        ],
        lessonsLearned: 'This project was an absolute blast. This was the first time dealing with micro-controllers and programming for real-time events. We were given Arduino Kits and a breif overview on how to write .ino files to be able to execute on the WIO Terminal. Since there were many sensors and actuators to choose from, there was an objective to use atleast three components together to create an overall product. Having picked the LED light strip, the ultrasonic ranger, and the built-in microphone. Interestingly, I believe the biggest learning outcome from this project was making a good structured code base with a proper wiki, connected requirements, planned out calender, and full structured commit templates. This made the project alot simpler long term when it comes to workflow since delegation and monitoring of progress was alot simpler with all this documentation. We also learned the use of threading, how to have seperate processes working parallelly to work together, and how to code efficiently. Since my previous projects did not work in real-time and not so dependent on time efficiency, this was an interesting change since any delays in code meant worse functionality for the Shusher. Lastly, I also learned vastly about technologies like MQTT and the ability to communicate to hardware simply through a broker. This type of software development has definitely peaked my interest within the field and given me an idea of what I want to work with in the future. Having understood threading and coding very closely to machine language, I absolutely am able to bring the knowledge Ive gained from this project to any future endeavours with real-time software and other embedded technologies.',
        links: [
          {name: 'Final Report', link: 'https://docs.google.com/document/d/1xxjRNxSbH1NRYVUTqq_iBjkENZdsOGINvgB6kffvKX8/edit?usp=sharing'},
          {name: 'GitHub Repository', link: 'https://github.com/MikaRanAway/Shusher'}
        ],
        stars: [
          {name: 'star1', src: fullStar},
          {name: 'star2', src: fullStar},
          {name: 'star3', src: fullStar},
          {name: 'star4', src: emptyStar},
          {name: 'star5', src: emptyStar}
        ]
      },
      {
        img: cavityControl,
        bgColor: 'background-color: #3179AD;',
        itemColor: 'background-color:rgb(2, 86, 146)',
        title: 'Cavity Control',
        description: 'A fully working dentist booking app distributed across different machines',
        Usage:
          '* A user is able to find dentist clinics on a map, updated real-time, and book them accordingly \n\n* A dentist user is able to view their scheduled appointments, cancel them in real-time, or open new slots \n\n* The app being hosted on different machines via seperate software components allows for its use on seperate machines at once.',
        Tools: [
          { name: 'Java', img: java },
          { name: 'JavaScript', img: javascript },
          { name: 'Vue.JS', img: vuejs },
          { name: 'Maven', img: maven },
          { name: 'Node.js', img: nodejs },
          { name: 'MQTT', img: mqtt },
          { name: 'MongoDB', img: mongodb },
          { name: 'Python', img: python },
        ],
        authors: [
          {name: 'Mika Rannisto', link: 'https://github.com/MikaRanAway'},
          {name: 'Rasmus Nygren', link: 'https://git.chalmers.se/rasmusny'},
          {name: 'Vilmer Hedin', link: 'https://github.com/vilmerhedin'},
          {name: 'Hashem Ibrahim', link: 'https://github.com/hashem'},
          {name: 'Johan Engstrom', link: 'https://github.com/johanengstrom98'},
          {name: 'Felix Humleby', link: 'https://git.chalmers.se/humleby'},
        ],
        lessonsLearned: 'This project was a definite struggle to complete. Given the nature of the entire app being distributed across many different hosts, teamwork, structure, and overall testing of the app was super important. The Cavity Control Application was composed of a Patient Component, Dentist Component, Notification Component, Booking database, and multiple services that acted as middleware for further functionality. Given this structure and the fact that every component communicated via MQTT with HiveMQ, collaboration and planning was a huge learning outcome from this project. If any component didnt follow along our plannings and diagrams, parts and pieces of the Cavity Control will simply not work entirely. The team was also seperated amongst these components, which lead to further planning on a general consensus of what the apps scope should be. Therefore requirements, user stories, MQTT diagrams, and agreed upon JSON formats were also made within this project. My personal biggest problem when it came to developing Cavity Control had to be testing the whole app. Since the app was seperated amongst many machines and our team rarely were all together for a meeting, setting up the app would require reaching out to certain members of the team to turn on their component. This was a bit of a hassle to work with, but ended up teaching us that we should have structured our schedule more onto actually running and finding bugs with the system. My biggest learning outcome from this project definitely has to be the plethera of tools used within this program. ALthough the functionality of each component in the distributed app was pretty simple, this project was a great was to see how why and how so many different software technologies can come together to fulfill a general goal of the app. I will definitely apply such experience to any future projects!',
        links: [
          {name: 'Final Report', link: 'https://docs.google.com/document/d/1pFW1ZwzXaUzfFVjavyheJqJNrh0ZXE8yLT6rEsn7lbs/edit?usp=sharing'},
        ],
        stars: [
          {name: 'star1', src: fullStar},
          {name: 'star2', src: fullStar},
          {name: 'star3', src: fullStar},
          {name: 'star4', src: fullStar},
          {name: 'star5', src: emptyStar}
        ]
      },
      {
        img: coneVision,
        bgColor: 'background-color: #8931AD;',
        itemColor: 'background-color:rgb(100, 1, 139)',
        title: 'Cone Vision',
        description: 'A steering angle program to calculate the next steering input of a self-driving car',
        Usage:
          '* Provided multiple recordings of a RC car driving through a track, our Cone Vision calculates and prints accurate steering angles for any given future recordings of the same car',
        Tools: [
          { name: 'OpenCV', img: openCV },
          { name: 'Python', img: python },
          { name: 'C++', img: cpp },
          { name: 'CMake', img: cmake },
          { name: 'Docker', img: docker },
        ],
        authors: [
          {name: 'Mika Rannisto', link: 'https://github.com/MikaRanAway'},
          {name: 'Hassan Alhilo', link: 'https://git.chalmers.se/hassan'},
          {name: 'Hashem Ibrahim', link: 'https://github.com/hashem'},
          {name: 'Simone Graziosi', link: 'https://git.chalmers.se/graziosi'},
        ],
        lessonsLearned: 'This project was a problematic one. The premise of the project was to make software features towards data sourced directly from real-time remote control vehicles. It was a mix of embedded systems, cyber physical systems, and how we, as a team, are to fit our software into that. The goal was to generate steering angles throughout an entire recording of a vehicle racing through a track. In order to pass, we were required to replicate atleast 25% of angles produced when the vehicle was racing in real-time. Given the concept of the project, concept was a very important factor in the process of developing the software. We initially thought a rule-based approach to the problem was applicable. This was implemented via ground values of where the cones should be when the car is going directly straight. Offset values from where the cones currently are, were then processed in a simple calculator to arrive at our steering angle. This didnt work. Because we completely missed that the recordings had turns that differed from other turns and had its own certain behaviour, mimicing it with a simple static rule base was almost impossible. Realizing this about 5 days before the deadline, lots of work was done to completely start from scrath and go towards machine learning to learn more intricate patterns to mimic such delicate actions more carefully. Although I definitely learned how to use tools like OpenCV and gained vast amounts of knowledge around image detection and video processing, I personally think that my biggest learning outcome from this project is the importance of problem-base thinking. If we were able to review and analyze the problem more initially, realizing that this should have been a task for machine learning would have come alot sooner. Therefore for any future tasks dealing with big problem spaces, I now know more time should be spent with brainstorming in that space.',
        links: [
          {name: 'Final Report', link: 'https://docs.google.com/document/d/1pFW1ZwzXaUzfFVjavyheJqJNrh0ZXE8yLT6rEsn7lbs/edit?usp=sharing'},
        ],
        stars: [
          {name: 'star1', src: fullStar},
          {name: 'star2', src: fullStar},
          {name: 'star3', src: fullStar},
          {name: 'star4', src: emptyStar},
          {name: 'star5', src: emptyStar}
        ]
      },
      {
        img: Hashikahan,
        bgColor: 'background-color: #6E6AAD',
        itemColor: 'background-color:rgb(48, 41, 143)',
        title: 'Hashikahan',
        description: 'A fullstack web-app to display your own photo and albums to other users',
        Usage:
          '* A user is able to create a profile on the site\n\n* A user is able to post their own photos and categorize them into custom albums \n\n* A user is able to view other peoples pictures on the site',
        Tools: [
          { name: 'JavaScript', img: javascript },
          { name: 'VueJS', img: vuejs },
          { name: 'ExpressJs', img: expressJS},
          { name: 'MongoDB', img: mongodb },
          { name: 'Postman', img: postman},
        ],
        authors: [
          {name: 'Mika Rannisto', link: 'https://github.com/MikaRanAway'},
          {name: 'Johan Engstrom', link: 'https://github.com/johanengstrom98'},
          {name: 'Hashem Ibrahim', link: 'https://github.com/hashem'},
        ],
        lessonsLearned: 'This project was a super fun one. We were tasked to making a full fledged web-app. Our group deciding with a shared photo/album space similar to SmugMug, got into developing the actual app pretty quickly. This project was my first time fully developing a responsive web-app, and it was very fun doing so. With a VueJS front end and ExpressJS backend frameworks, it was really interesting how websites on the internet actually function. With ideas ranging from Http requests to cookies and session storages, I absolutely had a blast with everything in the project. My favourite part has to be understanding how the backend works in all web apps. Since the frontend seemed kind of simple with HTML being the frame of how elements appear and CSS being the styling of such elements, I showed most of my interest into visualizing and understanding how the backend works. We spent alot of time with postman and testing each Http request of the app to see if functionality works and lots of time was also used in troubleshooting certain functions. Because we had functionalities that handled posting photos, middlewares were also sourced and used to do so, making the process ever so cool to work with. I personally believe that my biggest learning outcome from the Hashikan project was the importance of databases and the backend for such types of functional web-apps. Making different models, inserting such models or removing such models from MongoDB via Http requests was definitely an eye opener to future projects. I also learned how to visualize such models in databases with Entity Relationship diagrams and understand now the basics of using such diagrams to aid the process of making database-reliant apps!',
        links: [
          {name: 'Final Report', link: 'https://docs.google.com/document/d/1hyLTO4ZOtZAPjHMxfahAqSbvIzu5TgkZy39ZZzsdlpo/edit?usp=sharing'},
          {name: 'GitHub Repository', link: 'https://github.com/MikaRanAway/Hashikahan'}
        ],
        stars: [
          {name: 'star1', src: fullStar},
          {name: 'star2', src: fullStar},
          {name: 'star3', src: fullStar},
          {name: 'star4', src: emptyStar},
          {name: 'star5', src: emptyStar}
        ]
      },
  ])