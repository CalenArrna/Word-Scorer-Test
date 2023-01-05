<template>
  <div class="heading">
    <img class="heading__logo" alt="App logo, word icons" src="./assets/scrabble.png">
    <h1 class="heading__title">Word Scorer</h1>
  </div>
  <div class="content">
    <TabsWrapper>
      <SimpleTab title="Add New Word">
        <InputScreen>
        </InputScreen>
      </SimpleTab>
      <SimpleTab title="Word Score Table">
        <ScoresScreen />
      </SimpleTab>
    </TabsWrapper>
  </div>
  <div class="footer">
    <a class="footer__reference" href="https://www.flaticon.com/free-icons/word" title="word icons">Word icons created
      by Febrian
      Hidayat -
      Flaticon</a>
  </div>
</template>

<script setup>
import TabsWrapper from './components/TabsWrapper.vue';
import SimpleTab from './components/SimpleTab.vue';
import InputScreen from './screens/InputScreen.vue';
import ScoresScreen from './screens/ScoresScreen.vue';

</script>

<style>
:root {
  --color-dark-1: #2c3e50;

  --color-accent-1: #FFCC80;
  --color-accent-2: #FFAC91;

  --color-accent-3: #f5b659;
  --color-accent-4: #e2653c;

  --color-white: #fff;
  --color-black: #000;

  --color-grey: #ddd;

  --shadow: 0 .5rem 1rem 2rem rgba(#000, 0.1);
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-dark-1);
}

.heading {
  margin-bottom: 3rem;
  color: var(--color-accent-2);

}

.heading__logo {
  width: 20%;
}

.heading__title {
  font-size: 12rem;
}

.content {
  margin: 0 auto;
  width: 85%;
  margin-bottom: 5rem;
}
</style>
