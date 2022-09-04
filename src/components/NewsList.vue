<template>
    <div class="proItemList">
        <div class="proItem" v-for="ne in news" :key="ne.title">
            <h3 class="proItemTitle">{{ ne.title }}</h3>
            <h4 class="proItemDate">({{ ne.date }})</h4>
            <span class="proItemDescription" v-html="ne.description"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NewsData } from '../assets/Global';

export default defineComponent({
    props: {
        news: {
            required: true,
            type: Array as PropType<NewsData[]>
        }
    }
})
</script>

<style scoped>
.proItemList {
    max-height: 800px;
    height: fit-content;
    min-width: 200px;
    width: 100%;
    background: #272727;
    margin: 0;
    display: flex;
    border-radius: 8px;
    overflow: auto;
}

.proItem {
    min-width: 300px;
    width: 100%;
    height: fit-content;
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

.proItemDate {
    margin: 10px 10px 0 10px;
}

.proItemDescription {
    margin: 10px;
    max-height: 200px;
    white-space: pre-wrap;
}
</style>