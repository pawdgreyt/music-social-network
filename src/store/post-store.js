import axios from "axios";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
    state: () => ({
        posts: null,
    }),
    actions: {
        async fetchPostsByUserId(userid) {
            let res = await axios.get("api/user/" + userid + "/posts");

            this.$state.posts = res.data;
        },

        postImage(image) {
            return process.env.VUE_APP_API_URL + "images/posts/" + image;
        },

        clearPosts() {
            this.$state.posts = null;
        },
    },
    persist: true,
});
