<!-- This component is the top bar that will be always visible.
    It includes the logo, the links (NavLink component) and the 2 buttons for 
    Login and Booking.
 -->
<template>
    <nav>
        <h1>LOGO HERE</h1>
        <nav-link linkTitle="Home">
            <section>
                <a href="#">Home</a>
            </section>
        </nav-link>
        <nav-link linkTitle="About Us">
            <a href="#">About Us</a>
            <a href="#">Team</a>
        </nav-link>
        <nav-link linkTitle='Services'>
            <a href="#">Services</a>
            <a href="#">Menu</a>    
        </nav-link>
        <nav-link linkTitle='Page'>
            <a href="#">FAQs</a>
            <a href="#">Gallery</a>
            <a href="#">Blog</a> 
            <a href="#">Product Category</a>     
        </nav-link>
        <nav-link linkTitle='Contact Us'>
            <a href="#">Contact Us</a>     
        </nav-link>
        <button>Login</button>
        <button>Booking</button>
    </nav>
</template>

<script>
import NavLink from './NavLink.vue'
export default {
    components: {
        NavLink,
    }
    
}
</script>

<style scoped>
nav {
    display: flex;
    place-items: center;
    justify-content: space-evenly;
}

h1 {
    margin-right: 500px;
}
</style>