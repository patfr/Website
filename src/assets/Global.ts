import { ref } from "vue";

export interface Link {
    text: string,
    link?: string,
    run?: string
}

export interface Project {
    title: string,
    description: string,
    links: Link[]
}

export interface NewsData {
    title: string,
    date: string,
    description: string
}

const IFrameLink = ref<string>("");

export default IFrameLink;