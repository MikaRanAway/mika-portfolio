<template>
  <main>
    <div class="wrapper">
      <div class="projectViewWrapper">
        <button @click="handleButtonPress('left')" class="arrow">
          <img src="../assets/arrow.png" class="arrowImg Left" alt="arrow" />
        </button>
        <div class="projectViewerPadding">
          <transition
            :enter-active-class="animationLeft"
            :leave-active-class="animationRight"
            mode="out-in"
          >
            <div class="projectViewer" :key="currentProject">
              <section class="sectionHalf" :style="projects[currentProject].bgColor">
                <h1 class="projectTitle">{{ projects[currentProject].title }}</h1>
                <p class="projectDefinition">{{ projects[currentProject].description }}</p>
                <img :src="projects[currentProject].img" v-if="currentProject !== 2" class="projectImg" alt="Project Image" />
                <LiteYouTubeEmbed v-else
                  id="n39D97m3lp4"
                  title="Shusher Video"
                />
                <h1 class="projectSubtitle">Usage</h1>
                <p class="projectDefinition">{{ projects[currentProject].Usage }}</p>
                <h1 class="projectSubtitle">Tools</h1>
                <div class="techList">
                  <div
                    class="techItem"
                    v-for="tech in projects[currentProject].Tools"
                    :key="tech.name"
                  >
                    <img :src="tech.img" :alt="tech.name" class="techImg" />
                    <p class="techName">{{ tech.name }}</p>
                  </div>
                </div>
              </section>
              <section class="sectionHalf" :style="projects[currentProject].bgColor">
                <h1 class="projectSubtitle">Authors</h1>
                <div class="authorList">
                  <a target="_blank" v-for="author in projects[currentProject].authors" :href="author.link":key="author.name" class="projectItem" :style="projects[currentProject].itemColor">
                    {{ author.name }}
                  </a>
                </div>
                <h1 class="projectSubtitle">Lessons Learned</h1>
                <p class="projectDefinition">{{ projects[currentProject].lessonsLearned }}</p>
                <h1 class="projectSubtitle">Other Links</h1>
                <div class="linkList">
                  <a v-for="link in projects[currentProject].links" :href="link.link" target="_blank" :key="link.name" class="projectItem" :style="projects[currentProject].itemColor">{{ link.name }}</a>
                </div>
                <h1 class="projectSubtitle">Difficulty</h1>
                <div class="starBoxWrapper">
                  <img :src="star.src" :key="star.name" alt="star.name" v-for="star in projects[currentProject].stars" class="star"></img>
                </div>
              </section>
            </div>
          </transition>
        </div>
        <button @click="handleButtonPress('right')" class="arrow">
          <img src="../assets/arrow.png" class="arrowImg" alt="arrow" />
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import {projects as projectsArray} from '../assets/projects.js'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'


const currentProject = ref(0)
const projects = ref(projectsArray)

const animationLeft = ref('animate__animated animate__backInLeft')
const animationRight = ref('animate__animated animate__backOutRight')

function handleButtonPress(direction) {
  if (direction === 'right') {
    animationLeft.value = 'animate__animated animate__backInRight'
    animationRight.value = 'animate__animated animate__backOutLeft'
    if (currentProject.value < projects.value.length - 1) {
      currentProject.value++
    } else {
      currentProject.value = 0
    }
  } else {
    animationLeft.value = 'animate__animated animate__backInLeft'
    animationRight.value = 'animate__animated animate__backOutRight'

    if (currentProject.value > 0) {
      currentProject.value--
    } else {
      currentProject.value = projects.value.length - 1
    }
  }
}
</script>
