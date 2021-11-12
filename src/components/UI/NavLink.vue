<!-- This component represent the link in the navbar that routes to other sections of the site
    it has the functionality to create a dropdown menu with more links to other sections -->
<template>
    <section>
        <a href="#" ref="link" @mouseenter="openDropdown" @mouseleave="closeDropdown">{{linkTitle}}
            <section class="dropdown" v-if="isOpen">
                <slot></slot>
            </section>    
        </a>

        

    </section>
</template>

<script>
export default {
    props: ["linkTitle"],
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        openDropdown() {
            this.isOpen = true;
        },
        closeDropdown(event) {
            console.log(event.target)
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
    a {
        color: #30744A;
        text-decoration: none;
    }

    .dropdown{
        position: absolute;
        display: flex;
        flex-direction:column;
        place-items: center;
        background-color: white;
        box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
        animation: dropDownEffect 0.3s ease forwards;
    }
    .dropdown a {
        text-decoration: none;
        padding: 15px 35px;
    }

    @keyframes dropDownEffect {
    from { transform: translate3d( 0, 5px ,0 ) }
    to { transform: translate3d( 0, 10px ,0 ) }
  }

</style>