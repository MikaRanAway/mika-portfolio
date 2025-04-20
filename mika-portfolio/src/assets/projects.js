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
import {ref} from 'vue'

export const projects = ref([
    {
      img: smartMatch,
      bgColor: 'background-color: #1C0029',
      itemColor: 'background-color: rgb(138, 59, 241)',
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
        bgColor: 'background-color: #0D2900;',
        itemColor: 'background-color: rgb(26, 160, 55)',
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
        bgColor: 'background-color: #2E0011;',
        itemColor: 'background-color: rgb(177, 27, 27)',
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
          {name: 'Isaac Lindegren Ternbom', link: 'https://github.com/IsaacLT'},
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
  ])