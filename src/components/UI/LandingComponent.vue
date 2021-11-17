<template>
    <section>
        <div id="landing-left">
            <h1>Healty Food For The Good Life</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, nobis!</p>
            <div>
                <base-button class="button" buttonTitle="Learn More" buttonType='wholeButton'></base-button>
                <base-button class="button" buttonTitle="Order Now" buttonType='paleButton'></base-button>
            </div>
        </div>
        <div id="landing-right">
            <img src="../../assets/chef.png">
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    place-content: center;
    justify-content: space-between;
    padding: 0 3rem;
}

#landing-left{
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
}
h1 {
    color: #256C40;
    font-size: 3rem;
    margin: 0
}

.button {
    margin: 0 2rem;
}

img {
    height: 400px;
    width: auto;
}
</style>

