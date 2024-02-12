import { computed, ref, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore('projects', () => {
    const projects = ref();




    async function getAllProjects() {
        watchEffect(async () => {
            const response = await fetch(
                `http://localhost:3000/api/project/`
            )
            projects.value = await response.json();
            console.log(projects.value);
        })
    }



    return { projects, getAllProjects }
})