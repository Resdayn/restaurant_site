<template>
    <section>
        <img id="logo" src="../../assets/restaurant_logo.png">
        <p id="logo-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus soluta assumenda dolores repudiandae odio.</p>
        <div id="navigation">
            <h2>Navigation</h2>
            <h3>Home</h3>
            <h3>Pages</h3>
            <h3>About Us</h3>
            <h3>Services</h3>
        </div>
        <div id="quickLink">
            <h2>Contact Us</h2>
            <h3>FAQs</h3>
            <h3>Booking</h3>
            <h3>Pages</h3>
        </div>
        <div id="services">
            <h2>Home</h2>
            <h3>Contact</h3>
            <h3>Blog</h3>
        </div>
        <p>London Eye, London, United Kingdom</p>
        <p>088-777-666-85</p>
        <p>contact@vegan.com</p>
        <p>ICONS</p>
    </section>
    <div>
        <hr>
        <p>Built by Juan González Palma based on the Vegan Restaurant theme on ThemeForest</p>
    </div>
    
 
</template>

<style scoped>
* {
    margin: 0;
}
section{
    display: grid;
    grid-template-areas: 
    "logo navigation quickLink services"
    "logo-text navigation quickLink services"
    ". . . ."
    "address telephone email icons";
    background-color: #95C18D;
    color: black;
}

#logo {
    grid-area: logo;
    width: 120px;
    height: 60px;
    margin: auto;
}
#logo-text {
    grid-area: logo-text;
    width: 40vw;
    margin: auto;
}
#navigation{
    grid-area: navigation;
}
#quickLink{
    grid-area: quickLink;
}
#services{
    grid-area: services;
}
h2 {
    font-weight: 300;
}
h3 {
    font-weight: 100;
}
div {
    background-color: #95C18D;
}
</style>