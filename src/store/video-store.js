import axios from "axios";
import { defineStore } from "pinia";

export const useVideoStore = defineStore("video", {
    state: () => ({
        videos: null,
    }),
    actions: {
        async fetchVideosByUserId(userid) {
            let res = await axios.get("api/youtube/" + userid);

            this.$state.videos = res.data.videos_by_user;
        },

        clearVideos() {
            this.$state.videos = null;
        },
    },
    persist: true,
});
