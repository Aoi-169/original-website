new Swiper(".photo-container",{
    loop:true,
    speed: 1000,
    autoplay:{
        delay:3000,
    disableOnInteraction: false,
},
effect:"fade",})

new Swiper(".video-container",{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})