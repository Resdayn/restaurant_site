<!-- This component represent the link in the navbar that routes to other sections of the site
    it has the functionality to create a dropdown menu with more links to other sections -->
<template>
    <section>
        <a href="#" ref="link" @click="openDropdown">{{linkTitle}}</a>

        <section class="dropdown" v-if="isOpen">
            <slot></slot>
        </section>

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
        closeDropdown() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
    a {
        color: #30744A;
    }

    .dropdown{
        position: relative;
        top: 5px;
        display: flex;
        flex-direction:column-reverse;
        place-items: center;
        background-color: red;
    }

</style>