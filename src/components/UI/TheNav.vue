<!-- This component is the top bar that will be always visible.
    It includes the logo, the links (NavLink component) and the 2 buttons for 
    Login and Booking.
 -->
<template>
    <nav>
        <div>
            <img src="../../assets/restaurant_logo.png" alt="">
        </div>
        <div class="links-container">
            <nav-link linkTitle="Home">
                <section>
                    <router-link to="/">Home</router-link>
                </section>
            </nav-link>
            <nav-link linkTitle="About Us">
                <router-link to="/about">About Us</router-link>
            </nav-link>
            <nav-link linkTitle='Services'>
                <router-link to="/menu">Menu</router-link>   
            </nav-link>
            <nav-link linkTitle='Page'>
                <router-link to="/faq">FAQs</router-link>
                <router-link to="/gallery">Gallery</router-link>  
            </nav-link>
            <nav-link linkTitle='Contact Us'>
                <router-link to="/contact"> Contact Us</router-link>     
            </nav-link>
        </div>
        <div class="buttons-container">
            <base-button buttonTitle="Login" buttonType="flatButton"></base-button>
            <base-button buttonTitle="Booking" buttonType="wholeButton"></base-button>
        </div>
        
    </nav>
</template>

<script>
import BaseButton from '../Base/BaseButton.vue'
import NavLink from './NavLink.vue'
export default {
    components: {
        NavLink,
        BaseButton,
    }
    
}
</script>

<style scoped>
nav{
    display: flex;
    place-items: center;
    justify-content: space-between;
}

img {
    width: 120px;
    height: 60px;
}

.links-container{
    display: flex;
    place-items: center;
    justify-content: space-between;
    width: 40vw;
}

.buttons-container{
    display: flex;
    place-items: center;
    justify-content: space-between;
    width: 20%;
}

a {
    text-decoration: none;
    padding: 15px 35px;
    color: #30744A;
}
</style>