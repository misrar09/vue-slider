//TRACCIA C - Slides with numbered steps
//Image, title and text are enclosed in a card, one under the other, and will have a number that starts from 1 and gradually increases in a corner of the slide


const { createApp } = Vue;

const vueApp = {
    data() {
        return {

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
                
            
            }
            
        },
        
        methods(){
            


            
            
        }
        
    }
   



















createApp(vueApp).mount("#app");



// const container = document.querySelector(".container");


// for (let i = 0; i < slides.length; i++) {
//     const imageLink = slides[i].image;

//     // Create a wrapper div
//     const wrapper = document.createElement("div");
//     container.appendChild(wrapper);

//     // Create and append the image element
//     const imgElement = document.createElement("img");
//     imgElement.src = imageLink;
//     wrapper.appendChild(imgElement);

//     // Create and append the title element
//     const imageTitle = slides[i].title;
//     const titleElement = document.createElement("h2");
//     titleElement.innerHTML = imageTitle;
//     wrapper.appendChild(titleElement);

//     // Create and append the text element
//     const imageText = slides[i].text;
//     const textElement = document.createElement("p");
//     textElement.innerHTML = imageText;
//     wrapper.appendChild(textElement);

//     // Add the 'inAction' class to the div wrapper
//     if (i == 0) {
//         wrapper.classList.add("inAction");
//     }
// };


// const wrapperElements = container.querySelectorAll(".container > div"); // selected wrapper
// let activeImage = 0;
// wrapperElements[activeImage].classList.add("inAction"); // on active image add the the class in action


// // created a function with 3 second time internal
// function slideShow() {

//     wrapperElements[activeImage].classList.remove("inAction");// on active image remove the class in action

//     //go forwards
//     if (activeImage < wrapperElements.length - 1) { // Check if the current value of activeImage is less than the maximum index in the array.
//         activeImage++; // If yes, increment the value of activeImage.
//     } else { // otherwise put the activeImage to 0, indicating that we should go back to the first image.
//         activeImage = 0;
//     }

//     wrapperElements[activeImage].classList.add("inAction"); // on active image add the class in action
// }

// //creating internval function and button to start the show
// const btnStart = document.querySelector(".start");
// let timeShow;
// btnStart.addEventListener("click", function () {
//     timeShow = setInterval(slideShow, 3000); // calling the function of interval
// });


// //creating a button function with slideshow as well
// const btnUpElement = document.querySelector(".btnUp");
// btnUpElement.addEventListener("click", function () {
//     slideShow();
// });


// //creating clear internal fuction and button to stop the show
// const clearShow = clearInterval
// const btnStop = document.querySelector(".stop");
// btnStop.addEventListener("click", function () {

//     clearInterval(timeShow);
// });



// // normal button function iwth going backwards on click
// const btnDownElement = document.querySelector(".btnDown");

// btnDownElement.addEventListener("click", function () {
//     wrapperElements[activeImage].classList.remove("inAction");

//     // go backwards
//     if (activeImage > 0) {
//         activeImage--;
//     } else {
//         activeImage = wrapperElements.length - 1;// to go to the last slide
//     }
//     wrapperElements[activeImage].classList.add("inAction");

// });
