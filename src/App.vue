<template>
	<div id="accessBar">
		<h1 id="title">Patfr</h1>
		<a class="barItem" href="#info">Info</a>
		<a class="barItem" href="#news" v-if="data.news.length > 0">News</a>
		<a class="barItem" href="#current" v-if="data.projects.current.length > 0">Current</a>
		<a class="barItem" href="#abandoned" v-if="data.projects.abandoned.length > 0">Abandoned</a>
		<a class="barItem" href="#experimental" v-if="data.projects.experimental.length > 0">Experimental</a>
		<a class="barItem" href="#about">About</a>
		<a class="barItem" href="#run" v-if="IFrameLink != ''">Play</a>
	</div>
	<div id="background">
		<div id="foreground">
			<div id="info" class="section">
				<h2 class="title">Info</h2><br />
				<div v-html="data.info"></div><br />
			</div>
			<div id="news" class="section" v-if="data.news.length > 0">
				<h2 class="title">News</h2><br />
				<NewsList :news="data.news ? data.news : []" /><br />
			</div>
			<div id="current" class="section" v-if="data.projects.current.length > 0">
				<h2 class="title">Current</h2><br />
				<ProjectList :projects="data.projects.current ? data.projects.current : []" /><br />
			</div>
			<div id="abandoned" class="section" v-if="data.projects.abandoned.length > 0">
				<h2 class="title">Abandoned</h2><br />
				<ProjectList :projects="data.projects.abandoned ? data.projects.abandoned : []" /><br />
			</div>
			<div id="experimental" class="section" v-if="data.projects.experimental.length > 0">
				<h2 class="title">Experimental</h2><br />
				<ProjectList :projects="data.projects.experimental ? data.projects.experimental : []" /><br />
			</div>
			<div id="about" class="section">
				<h2 class="title">About</h2><br />
				<span>Name: {{ data.about.name }}</span><br />
				<span>Age: {{ data.about.age }}</span><br />
				<span>Country: {{ data.about.country }}</span><br /><br />
				<span>{{ data.about.description }}</span><br /><br />
				<h3>Languages that I can code in</h3><br />
				<div id="langs" class="itemList">
					<div class="item" v-for="lang in data.about.langs" :key="lang.lang" :style="{'background':lang.background}"><h4 :style="{'color':lang.color}">{{ lang.lang }}</h4></div>
				</div><br />
				<h3>Links</h3><br />
				<div id="links" class="itemList">
					<div class="item" v-for="link in data.about.links" :key="link.name" :style="{'background':link.background}"><a :href="link.link" :style="{'color':link.color}">{{ link.name }}</a></div>
				</div><br />
				<span>(About was last updated: {{ data.about.lastUpdated }})</span>
			</div>
			<div id="run" v-if="IFrameLink != ''">
				<br /><h2 class="title">Play</h2>
				<h4 v-on:click="CloseIFrame()">(Close)</h4><br />
				<iframe :src="IFrameLink" title="Test"></iframe>
			</div>
			<div id="rightPadding"></div>
			<div id="bottomPadding"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IFrameLink from '@/assets/Global';
import ProjectList from './components/ProjectList.vue';
import NewsList from './components/NewsList.vue';
import data from './assets/data.json';

export default defineComponent({
	name: 'App',
	components: {
		ProjectList,
		NewsList
	},
	methods: {
		CloseIFrame(): undefined {
			this.IFrameLink = "";
			return;
		}
	},
	data() {
		return { data, IFrameLink }
	}
});
</script>