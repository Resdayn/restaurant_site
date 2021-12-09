<template>
    <section>
        <div id="left">
            <img src="../../assets/farmer_pic.png">
        </div>
        <div id="right">
            <h1>What is the Meaning of Being a Vegan ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur aspernatur corporis suscipit nam! Quod esse, saepe laborum rerum est doloribus ratione ipsam rem suscipit.</p>
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    place-items: center;
    justify-content: center;
    padding-top: 2rem;
}
#left {
    width: 50vw;
}
h1 {
    margin-bottom: 4rem;
    color: #256C40;
    font-size: 40px;
}
#right {
    width: 50vw;
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: space-evenly;
    padding: 0 4rem 0 0;
}
img {
    height: 300px;
}

</style>