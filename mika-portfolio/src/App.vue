<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    class="nav-bar"
    :class="{
      'home-active': $route.path === '/home',
      'projects-active': $route.path === '/projects',
      'exp-active': $route.path === '/exp',
    }"
  >
    <router-link
      to="/home"
      class="nav-item home"
      :class="{
        'home-active-home': $route.path === '/home',
        'projects-active-home': $route.path === '/projects',
        'exp-active-home': $route.path === '/exp',
      }"
      ><div class="linkName">Home</div></router-link
    >
    <router-link
      to="/projects"
      class="nav-item projects"
      :class="{
        'home-active-projects': $route.path === '/home',
        'projects-active-projects': $route.path === '/projects',
        'exp-active-projects': $route.path === '/exp',
      }"
      ><div class="linkName">Projects</div></router-link
    >
    <router-link
      to="/exp"
      class="nav-item exp"
      :class="{
        'home-active-exp': $route.path === '/home',
        'projects-active-exp': $route.path === '/projects',
        'exp-active-exp': $route.path === '/exp',
      }"
      ><div class="linkName">Exp</div></router-link
    >
  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&family=Bebas+Neue&family=Fascinate+Inline&family=Lexend+Giga:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pirata+One&family=Special+Gothic+Condensed+One&display=swap');
</style>
