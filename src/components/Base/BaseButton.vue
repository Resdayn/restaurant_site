<template>
    <button :class="buttonType">{{buttonTitle}}</button>
</template>

<script>
export default {
    props: ['buttonType', 'buttonTitle'],
}
</script>

<style scoped>
.wholeButton {
    background-color: #256C40;
    color: white;
    border-radius: 25% 0 25% 0;
    border: none;  
    padding: 15px 30px;
}

.flatButton {
    background: transparent;
    border-color: #256C40;
    color: #256C40;
    border-radius: 25% 0 25% 0;
    padding: 15px 30px;
}

.wholeButton:hover{
    animation: shrinkOnHover;
    animation-duration: 1s;
} 
.flatButton:hover {
    animation: shrinkOnHover;
    animation-duration: 1s;
}

@keyframes shrinkOnHover {
    from {transform: scale(1);}
    to {transform: scale(0.7);}
}
</style>