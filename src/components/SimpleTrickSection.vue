<script setup lang="ts">
  import IconAsSeenIn from './icons/IconAsSeenIn.vue';
  import IconVox from './icons/IconVox.vue';
  import IconAxios from './icons/IconAxios.vue';
  import IconTheGuardian from './icons/IconTheGuardian.vue';
  import IconBusinessInsider from './icons/IconBusinessInsider.vue';
</script>

<template>
    <section class="simple-trick-section" id="simpleTrickSection">
        <div class="section-wrap">
            <IconAsSeenIn />
            <div class="icons-wrap">
                <IconVox />
                <IconAxios />
                <IconTheGuardian />
                <IconBusinessInsider />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .simple-trick-section {
        background-color: var(--blue-light);
        padding: 20px 0;
    }
    .section-wrap {
        max-width: 625px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .icons-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 25px 15px 0;
    }
    .icons-wrap svg {
        padding: 0 5px;
    }
    @media (min-width: 768px) {
        .simple-trick-section {
            padding: 25px 0;
        }
        .section-wrap {
            flex-direction: row;
        }
        .icons-wrap {
            width: calc(100% - 135px);
            margin-left: auto;
            padding: 0;
        }
    }
</style>