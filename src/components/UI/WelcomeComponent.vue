<template>
    <section>
        <div id="welcome-left">
            <img src="../../assets/table.jpg">
        </div>
        <div id="welcome-right">
            <h1>Welcome to the Vegan Restaurant</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nam ut, assumenda velit repellat consequatur quis fugiat corporis necessitatibus commodi!</p>
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    justify-content: center;
    height: 400px;
}

img {
    max-height: 400px;
    margin: auto;
    margin-right: -5rem;

}
#welcome-right{
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: space-evenly;
    width: 50vw;
    background: #256C40;
    color: white;
    height: 100%;
}

#welcome-left{
    width:50 vw;
    overflow: hidden;
}


</style>