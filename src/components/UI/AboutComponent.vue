<!-- This component will be rendered for the /about route -->
<template>
    <section>
        <div id="upperContainer">
            <h1 class="title">About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo quo inventore obcaecati molestiae amet.</p>
        </div>
        <div id="lowerContainer">
            <img src="../../assets/mosaic.png" alt="">
            <div>
                <h1 class="title">About Vegan</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, a magni ipsam corrupti beatae perspiciatis iure distinctio. Velit corrupti nesciunt quae ratione, quidem, dignissimos dicta praesentium accusantium adipisci assumenda itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aliquid magni excepturi tempore totam nemo a blanditiis temporibus recusandae natus! Quis dolor suscipit ea nesciunt dicta quod, error eligendi non.</p>
                <div id="numbersContainer">
                    <div >
                        <h1 class="coolNumber1">{{coolNumber1}}</h1>
                        <h2 class="coolNumber1">Cool Number</h2>
                    </div>
                    <div>
                        <h1 class="coolNumber2">{{coolNumber2}}</h1>
                        <h2 class="coolNumber2">Cool Number</h2>
                    </div>
                    <div>
                        <h1 class="coolNumber3">{{coolNumber3}}</h1>
                        <h2 class="coolNumber3">Cool Number</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            coolNumber1: 0,
            coolNumber2: 0,
            coolNumber3: 0
        }
    },
    methods: {
        async raiseNumber() {
            const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
            for (let i=1; i<101; i++){
                await sleepNow(30);
                this.coolNumber1++;
                this.coolNumber2++;
                this.coolNumber3++;
            }
        }
    },
    mounted() {
        this.raiseNumber();
    }
}
</script>

<style scoped>
section{
    margin-bottom: 3rem;
}
#upperContainer {
    margin: 3rem 0;
}
#lowerContainer {
    margin: 3rem 0;
    display: flex;
    place-items: center;
    justify-content: center;
}

#numbersContainer {
    display: flex;
    place-items: center;
    justify-content: center;
}
.title {
    color: #256C40;
    font-size: 48px;
}

.coolNumber1 {
    margin: 0.5rem 2rem;
    color: #256C40; 
}
.coolNumber2 {
    margin: 0.5rem 2rem;
    color: #4e9c6c; 
}
.coolNumber3 {
    margin: 0.5rem 2rem;
    color: #7bc598; 
}
</style>