<template>
    <div class="proItemList">
        <div class="proItem" v-for="proj in projects" :key="proj.title">
            <h3 class="proItemTitle">{{ proj.title }}</h3>
            <span class="proItemDescription" v-html="proj.description"></span>
            <div class="proItemLinks">
                <a class="proItemLink" :href="link.link" v-for="link in proj.links" :key="link.text">{{ link.text }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Project from '../assets/Project';

export default defineComponent({
    props: {
        projects: {
            required: true,
            type: Array as PropType<Project[]>
        }
    }
})
</script>

<style scoped>
.proItemList {
    height: 200px;
    min-width: 200px;
    width: 100%;
    background: #272727;
    margin: 0;
    display: flex;
    border-radius: 8px;
    overflow-x: auto;
    overflow-y: hidden;
}

.proItem {
    min-width: 300px;
    width: fit-content;
    height: 170px;
    margin: 15px;
    display: flex;
    background: #373737;
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
}

.proItemTitle {
    margin: 10px 10px 0 10px;
    color: #ffffff;
}

.proItemDescription {
    margin: 10px;
    max-height: 200px;
    white-space: pre-wrap;
}

.proItemLinks {
    margin: auto 0 0 0;
    width: 100%;
    height: 24px;
    background: #474747;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.proItemLink {
    margin: 0 5px 0 5px;
    color: rgb(0, 174, 255);
}

.proItemLink:hover {
    text-shadow: 0 0 10px rgb(0, 174, 255);
}

.proItem:hover {
    transform: scale(1.05, 1.05);
}
</style>