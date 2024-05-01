<script setup lang="ts">
import { ref } from 'vue';
import IconArrowDown from './icons/IconArrowDown.vue';

const faqItems = ref([
  {
    question: 'How is this different from Zillow or Redfin?',
    answer: 'If you believe the people that you live near are just as important as the place you call home, then you deserve a housing search platform that’s multi-player instead of single player. We help groups find the right neighborhoods, coordinate timing, and evaluate homes together.',
    isOpen: false
  },
  {
    question: 'What if my friends or I can’t afford to buy?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
  {
    question: 'Why does Live Near Friends use a 15-minute walking radius?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
  {
    question: 'Does Live Near Friends let us talk to a real person if we need advice or support?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
]);

const toggleAnswer = (index: number) => {
  faqItems.value.forEach((item, i) => {
    if (i !== index) {
      item.isOpen = false;
    }
  });
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">SOME OF OUR FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div v-for="(item, index) in faqItems" :key="index" :class="['faq-item', item.isOpen ? 'active' : '']" @click="toggleAnswer(index)">
        <div class="question" >
          <h3 class="item-title">{{ item.question }}</h3>
          <IconArrowDown class="arrow" />
        </div>
        <div class="answer">
          <p class="item-answer">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background-color: var(--ivory);
  padding: 55px 0 45px;
}
.title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0 25px;
}
.title {
  color: var(--black);
  font-family: 'Plain-Bold';
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 1.2;
  width: 100%;
  max-width: 50%;
}
.faq-item {
  background-color: var(--blue-light);
  border-radius: 7px;
  padding: 21px 22px;
  margin: 0 0 15px;
  cursor: pointer;
}
.item-title {
  font-size: 18px;
  letter-spacing: -1.2px;
  line-height: 1.2;
  text-wrap: balance;
  padding: 0 15px 0 0;
}
.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  font-size: 16px;
  line-height: 1.2;
}
.faq-item.active .answer {
  max-height: 1000px;
  transition: max-height 1s;
}
.item-answer {
  max-width: 860px;
  padding: 10px 0 0;
  letter-spacing: -.8px;
}
.arrow {
  transition: transform .25s ease-in-out;  
}
.faq-item.active .arrow {
  transform: rotate(180deg);
}

@media (min-width: 768px) {
  .faq-section {
    padding: 115px 0 105px;
  }
  .title-wrap {
    margin: 0 0 25px;
  }
  .title {
    font-size: 22px;
  }
  .faq-item {
    padding: 26px 30px;
    margin: 0 0 17px;
  }
  .item-title {
    font-size: 30px;
  }
  .answer {
    font-size: 20px;
  }
  .item-answer {
    padding: 23px 0 10px;
  }
}
</style>