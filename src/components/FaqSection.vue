<script setup lang="ts">
import { ref } from 'vue';
import IconArrowDown from './icons/IconArrowDown.vue';

const faqItems = ref([
  {
    question: 'How is Live Near Friends different from apps like Street Easy?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
  {
    question: 'How is Live Near Friends different from apps like Street Easy?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
  {
    question: 'How is Live Near Friends different from apps like Street Easy?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
  {
    question: 'How is Live Near Friends different from apps like Street Easy?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isOpen: false
  },
  {
    question: 'How is Live Near Friends different from apps like Street Easy?',
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
  <div class="faq-section">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">SOME OF OUR FREQUENTLY ASKED QUESTIONS</h2>
        <p class="subtitle">HEAD TO OUR FULL FAQ</p>
      </div>
      <div v-for="(item, index) in faqItems" :key="index" :class="['faq-item', item.isOpen ? 'active' : '']">
        <div class="question" @click="toggleAnswer(index)">
          <h3 class="item-title">{{ item.question }}</h3>
          <IconArrowDown class="arrow" />
        </div>
        <div class="answer">
          <p class="item-answer">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
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
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 1.2;
  width: 100%;
  max-width: 50%;
}
.subtitle {
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  text-align: right;
  font-size: 12px;
  width: 100%;
  max-width: 50%;
}
.faq-item {
  background-color: var(--blue);
  border-radius: 7px;
  padding: 21px 22px;
  margin: 0 0 15px;
}
.item-title {
  color: var(--black);
  font-family: "Scto-Grotesk-A-Medium";
  font-size: 16px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  text-wrap: balance;
  padding: 0 15px 0 0;
}
.question {
  cursor: pointer;
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
  transition: max-height .25s ease-in-out;
}
.item-answer {
  padding: 15px 0 0;
}
.arrow {
  transition: transform .25s ease-in-out;  
}
.faq-item.active .arrow {
  transform: rotate(90deg);
}

@media (min-width: 768px) {
  .faq-section {
    padding: 117px 0 105px;
  }
  .title-wrap {
    margin: 0 0 55px;
  }
  .title {
    font-size: 20px;
  }
  .faq-item {
    padding: 26px 30px;
    margin: 0 0 17px;
  }
  .item-title {
    font-size: 30px;
  }
  .answer {
    font-size: 25px;
  }
}
</style>