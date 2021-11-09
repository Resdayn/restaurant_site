<template>
    <section>
        <a href="#" ref="menu" @mouseover="openDropdown" @mouseleave="closeDropdown">{{menuTitle}}</a>

        <section v-if="isOpen">
            <slot></slot>
        </section>

    </section>
</template>

<script>
export default {
    props: ["menuTitle"],
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

</style>