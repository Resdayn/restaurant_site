<template>
    <nav>
        <h1>LOGO HERE</h1>
        <nav-link menuTitle="Home">
            <section>
                <a href="#">Home</a>
            </section>
        </nav-link>
        <nav-link menuTitle="About Us">
            <section>
                <a href="#">About Us</a>
                <a href="#">Team</a>
            </section>
        </nav-link>
        <nav-link menuTitle='Services'>
            <section>
                <a href="#">Services</a>
                <a href="#">Menu</a>    
            </section>
        </nav-link>
        <nav-link menuTitle='Page'>
            <section>
                <a href="#">FAQs</a>
                <a href="#">Gallery</a>
                <a href="#">Blog</a> 
                <a href="#">Product Category</a>     
            </section>
        </nav-link>
        <nav-link menuTitle='Contact Us'>
            <section>
                <a href="#">Contact Us</a>     
            </section>
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