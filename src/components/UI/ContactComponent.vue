<template>
    <section>
        <div id="upper">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae earum aliquid accusantium illo delectus sequi.</p>
        </div>
        <form @click.prevent>
            <input class="formInputBox" type="email" placeholder="Email">
            <input class="formInputBox" type="text" placeholder="Name">
            <textarea class="formInputBox" placeholder="Message"></textarea>
            <base-button buttonType="wholeButton" buttonTitle="Submit"></base-button> 
        </form>
    </section>
</template>

<style scoped>
#upper, form {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    margin: 3rem auto;
}

::placeholder {
    color: #98C290;
}
.formInputBox {
    border: 1px #98C290 solid;
    border-radius: 0px;
    width: 70vw;
    resize: vertical;
    margin: 1rem 0;
    padding: 0.5rem 0.3rem;
}



h1 {
    font-size: 48px;
    color: #256C40;
}
</style>