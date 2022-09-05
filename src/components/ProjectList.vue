<template>
    <div class="proItemList">
        <div class="proItem" v-for="proj in projects" :key="proj.title">
            <h3 class="proItemTitle">{{ proj.title }}</h3>
            <div class="proItemCenter">
                <div class="proItemDescription" v-html="proj.description"></div>
                <img :src="GetImgUrl((proj.image ?? {}).img)" alt="Game" class="proItemImage" />
            </div>
            <div class="proItemLinks">
                <template v-for="link in proj.links" :key="link.text">
                    <a class="proItemLink" :href="link.link" v-if="link.text != 'Play'" target="_blank">{{ link.text }}</a>
                    <a class="proItemLink" href="#run" v-if="link.text == 'Play'" v-on:click="RunIFrame(link.run)">{{ link.text }}</a> 
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import IFrameLink from '@/assets/Global';
import { defineComponent, PropType } from 'vue';
import { Project } from '../assets/Global';

export default defineComponent({
    props: {
        projects: {
            required: true,
            type: Array as PropType<Project[]>
        }
    },
    methods: {
        RunIFrame(run?: string) : undefined {
            if (!run) return;
            IFrameLink.value = run;
        },
        GetImgUrl(img?: string): string {
            if (img && img != '') return require(`../assets/images/${img}.png`)
            return require(`../assets/images/Error.png`)
        }
    }
})
</script>

<style scoped>
.proItemList {
    height: fit-content;
    width: 100%;
    background: #272727;
    margin: 0;
    display: flex;
    border-radius: 8px;
    overflow: auto;
    flex-wrap: wrap;
}

.proItem {
    min-width: 300px;
    width: 300px;
    height: 170px;
    margin: 15px 0 0 15px;
    display: flex;
    background: linear-gradient(#303030, #373737);
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
}

.proItem:last-of-type {
    margin: 15px;
}

.proItemTitle {
    margin: 10px 10px 0 10px;
    color: #ffffff;
}

.proItemCenter {
    position: relative;
    height: 114px;
    margin: 0;
}

.proItemDescription {
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 10px;
    width: 166px;
    height: 94px;
}

.proItemImage {
    position: absolute;
    width: 114px;
    height: 114px;
    margin: 0;
    right: 0px;
}

.proItemLinks {
    margin: auto 0 0 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(#373737, #474747);
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