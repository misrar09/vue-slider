//TRACCIA C - Slides with numbered steps
//Image, title and text are enclosed in a card, one under the other, and will have a number that starts from 1 and gradually increases in a corner of the slide

const { createApp } = Vue;

const vueApp = {
    data() {
        return {
                    // slides array with objects
            slides: [
                {
                   
                    image: 'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
                    title: 'Benvenuti nel nostro sito',
                    text: 'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
                },
                {
                    
                    image: 'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
                    title: 'Nuova collezione primavera',
                    text: 'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
                },
                {
                    
                    image: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
                    title: 'Offerte speciali',
                    text: 'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
                }
            ],

            activeImage: 0, // created slide counter
            autoPlay: null,
        }

    },

    methods: { // methods with functions

        btnDown() {  // down button function with condition to roll down the slides

/*             if (this.activeImage < this.slides.length - 1) {
                this.activeImage++;
            }
            else {
                this.activeImage = 0;
            } */

            // ternary way to write if else
            this.activeImage < this.slides.length - 1 ? this.activeImage++ : this.activeImage = 0

        },

        btnUp() { // up button function with condition to roll up the solde show

/*             if (this.activeImage > 0) {
                this.activeImage--;
            }
            else {
                this.activeImage = this.slides.length - 1;
            } */
            // ternary way to write if else
            this.activeImage > 0 ? this.activeImage-- : this.activeImage = this.slides.length - 1

        },
        //function to change slide on page, called with index in DOM
        changeSlide(n){
            this.activeImage = n;
        },

        slideShow() {
            this.autoPlay = setInterval(this.btnDown, 3000)
        },

        SliderStop(){
            clearInterval(this.autoPlay)
        },

        hoverRemove(){
            this.slideShow()
        }
    },

    mounted(){
        this.slideShow();   
    }

}

createApp(vueApp).mount("#app");


