<template>
    <section>
        <div id="welcome-left">
            <img src="../../assets/table.jpg">
        </div>
        <div id="welcome-right">
            <h1>Welcome to the Vegan Restaurant</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nam ut, assumenda velit repellat consequatur quis fugiat corporis necessitatibus commodi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint in ipsum itaque consectetur earum ipsam, voluptatibus blanditiis vero tempore sit ea soluta, dolore minima sequi nostrum ducimus molestias quod placeat.</p>
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    justify-content: stretch ;
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
    width: 50%;
    background: #256C40;
    color: white;
    height: 100%;
    padding: 0 7rem;
}

#welcome-left{
    width:50 vw;
    overflow: hidden;
}


</style>