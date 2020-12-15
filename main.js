let app = new Vue({
    el: '#app',

    data: {
        index: 0,
        imgs: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
        ]
    },

    methods: {
        next(){
            this.index++;
            if (this.index >= this.imgs.length) {
                this.index = 0;
            };
        },
        prev(){
            this.index--;
            if (this.index <= 0) {
                this.index = this.imgs.length -1;
            };
        }
    }
});