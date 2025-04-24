<script setup></script>

<template>
  <main>
    <div class="wrapper">
      <div class="tetrisWrapper" :key="experiences.name" :style="experiences[currentExperience].bgColor">
        <div class="centerSection">
          <div class="experienceViewer" :style="experiences[currentExperience].colorOfBox">
            <div class="centerSectionPlaceholder" v-if="currentExperience === 0">
              <div class="placeHolder">
                <h1 class="placeHolderTitle">PLACEHOLDER</h1>
                <p class="placeHolderDescription">
                  * Welcome to Mikas Tetris Experience * <br />* Click on any tetris piece to view
                  my experiences *<br />* Check out the next piece too! *<br />* More details can be
                  found on my LinkedIn *
                </p>
              </div>
            </div>
            <div class="centerSectionPlaceholder" v-else-if="currentExperience === 5">
              <div class="placeHolder">
                <h1 class="placeHolderTitle">POSSIBLY YOU?</h1>
                <p class="placeHolderDescription">
                  * Eager to expand my skills—my next work experience could be with you! * <br />*
                  Looking forward to new challenges—maybe with your team? *<br />* Ready to
                  contribute and grow—lets make my next role happen together! *
                </p>
              </div>
            </div>
            <div class="placeHeld" v-else>
              <h1 class="experienceTitle">{{ experiences[currentExperience].name }}</h1>
              <p class="experienceDescription">{{ experiences[currentExperience].description }}</p>
              <div class="photos">
                <img :src="experiences[currentExperience].image1" alt="image1" />
                <img :src="experiences[currentExperience].image2" alt="image2" />
              </div>
            </div>
          </div>
        </div>
        <div class="tetrisSection">
          <div class="tetrisBox">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <button
              @click="handlePiecePress('University Experience')"
              class="yellow block"
              id="UE"
            ></button>
            <div class="block"></div>
            <button
              @click="handlePiecePress('Telge Experience')"
              class="blue block"
              id="TE"
            ></button>
            <button
              @click="handlePiecePress('Telge Experience')"
              class="blue block"
              id="TE"
            ></button>
            <button
              @click="handlePiecePress('Telge Experience')"
              class="blue block"
              id="TE"
            ></button>
            <button
              @click="handlePiecePress('University Experience')"
              class="yellow block"
              id="UE"
            ></button>
            <div class="block"></div>
            <button
              @click="handlePiecePress('Scania Experience')"
              class="green block"
              id="SE"
            ></button>
            <button
              @click="handlePiecePress('Scania Experience')"
              class="green block"
              id="SE"
            ></button>
            <button
              @click="handlePiecePress('Telge Experience')"
              class="blue block"
              id="TE"
            ></button>
            <button
              @click="handlePiecePress('University Experience')"
              class="yellow block"
              id="UE"
            ></button>
            <div class="block"></div>
            <button
              @click="handlePiecePress('Barista Experience')"
              class="purple block"
              id="BE"
            ></button>
            <button
              @click="handlePiecePress('Scania Experience')"
              class="green block"
              id="SE"
            ></button>
            <button
              @click="handlePiecePress('Scania Experience')"
              class="green block"
              id="SE"
            ></button>
            <button
              @click="handlePiecePress('University Experience')"
              class="yellow block"
              id="UE"
            ></button>
            <div class="block"></div>
            <button
              @click="handlePiecePress('Barista Experience')"
              class="purple block"
              id="BE"
            ></button>
            <button
              @click="handlePiecePress('Barista Experience')"
              class="purple block"
              id="BE"
            ></button>
            <button
              @click="handlePiecePress('Barista Experience')"
              class="purple block"
              id="BE"
            ></button>
          </div>
          <div class="scoreBox">
            <h1>SCORE: 20</h1>
            <h1>NEXT:</h1>
            <button @click="handlePiecePress('Next Experience')" class="nextBlock">
              <img src="../assets/IBlock.png" class="IblockPic" alt="I Block" />
            </button>
            <h1>LAST:</h1>
            <button @click="handlePiecePress('Telge Experience')" class="nextBlock">
              <img src="../assets/JBlock.png" class="JblockPic" alt="J Block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import scania from '../assets/scania.png'
import NIWA from '../assets/NIWA.png'
import NIWAMika from '../assets/NIWAMika.png'
import scaniaMika from '../assets/scaniaMika.png'
import scaniaTelge from '../assets/ScaniaTelge.png'
import telge from '../assets/telge.png'
import lindholmen from '../assets/lindholmen.png'
import gu from '../assets/gu.png'

const currentExperience = ref(0)

const experiences = ref([
  {},
  {
    name: 'NIWA Coffee Bistro',
    description:
      'This position was my ever first job. Since I started studying in Gothenburg University and combined with the fact that it was my first time living alone, having this job was a lifesaver. I worked as a coffee barista at NIWA Coffee Bistro in the heart of gothenburg. Being in charge of customer orders, cleaning the cafe space, and handling almost all dishes, this job has left me with alot of life lessons learnt. Some of these lessons include Time Management and Multi-Tasking. Because you are not to keep customers waiting too long whilst keeping the dishes clean, I learned how to multi-task when appropriate so that I am prepared for future orders. I also learned how to communicate with lots of differing personalities and moods. Every shift was an opportunity to practice my communication skills with strangers whilst honing my ability to be friendly and pry out any information from the customer that may aid me in making them more satisfied. Lastly, I would consider team-working to be my biggest learning outcome from this position. Acknowledging that working alone with an assortment of tasks to do in the cafe, I realized that communication between team members can make that process so much easier. In the end I am so ever fortunate of having this under my belt of experiences, because although not directly related to my career path, I am able to apply many of the social skills I learned from this job to my future.',
    image1: NIWA,
    image2: NIWAMika,
    bgColor: 'background-color: #BB3AF5;',
    colorOfBox: 'background-color: #4A3E4B; color: white; border: 10px solid #994FA0;',
  },
  {
    name: 'Scania AB R&D',
    image1: scania,
    bgColor: 'background-color: #3BF55A;',
    colorOfBox: 'background-color: #6DA054; color: white; border: 10px solid #5CA067;',
    image2: scaniaMika,
    description:
      'This job was and still insanely cool. I managed to snag a summer worker position in R&D in Scania AB of all places. This required me going every day to their main office in Sodertalje and working closely with the TRVIS team of the R&D department. Being in such a professional environment alone was a huge learning outcome. These lessons ranged from understanding the manners in which employees speak and work together, experiencing team meetings and understanding workflows in industry, and simply learning from talking to colleagues that were in fields related to mine. My position required me to be a general aid to any person in the company who required it. I helped wire a few electrical circuits in the electrical engineering department, aided the process of identifying dependencies in an application, migrate test cases to a new platform, and many more. I am used to stand up meetings now, how communicating in professional workplaces happen, and what kind of tools to expect when I get hired to a position in the future.',
  },
  {
    name: 'Telge Consulting AB',
    image1: scaniaTelge,
    image2: telge,
    bgColor: 'background-color: #004EF5',
    colorOfBox: 'background-color: #635EF5; color: white; border: 10px solid #3557A0;',
    description:
      'This job only happened with the Scania Summer Worker program. Because I proved to be of help and assistance, I managed to convince my manager to allow my extension of work in Scania. But since hiring a full-time employee might only be viable after I get my degree or other certifications, they extended me via their consultant company Telge AB Consulting. Through this job Im essentially doing the same things I was doing when I was technically with the Scania Summer Program. Im currently helping an assortment of employees throughout the company. In one of the projects Im helping out with includes a machine learning one. Im active in data labelling, and the assistance of training the model on such labeled data for future use. I am more than happy with this position and am currently looking forward to whatever task they throw at me next',
  },
  {
    name: 'Gothenburg University',
    image1: lindholmen,
    image2: gu,
    bgColor: 'background-color: #F5C80C',
    colorOfBox: 'background-color: #F59D33; color: white; border: 10px solid #A08C3D;',
    description:
      'My time at Gothenburg University has been nothing less than amazing. Being surrounded by similar minded people and mentors, my education in software as a whole has climbed exponentially. Topics ranging from Iot to Neural Networks, I got to dabble in countless amounts of technologies in the software engineering world. I participated in many team projects and aced many examinations and realized that my biggest takeaway from such a school, is that I definitely want to continue working in this field. I also got the chance to attend more than one job fair and talk to many existing companies today and what they currently look for, and I am more than excited to be released into the job market and grow as a developer.',
  },
  {
    name: 'Next Experience',
    bgColor: '',
  }
])

function handlePiecePress(name) {
  switch (name) {
    case 'Barista Experience':
      currentExperience.value = 1
      break

    case 'Scania Experience':
      currentExperience.value = 2
      break

    case 'Telge Experience':
      currentExperience.value = 3
      break

    case 'University Experience':
      currentExperience.value = 4
      break

    case 'Next Experience':
      currentExperience.value = 5
      break

    default:
      break
  }
}
</script>
