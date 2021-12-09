<!-- This component renders the FAQ section which includes an accordion menu for the faq itself -->
<template>
  <section>
    <div id="upperSection">
        <img id="basketImg" src="../../assets/vegetables_basket.png">
        <div id="description">
            <h1>FAQs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ab rem maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, similique?</p>
        </div>
    </div>
    <div class="accordion-body">
      <div class="accordion">
        <div class="container">
          <div class="label" @click="toggleActive(1)">Isn’t it expensive to be vegan?</div>
          <div :class="{content: !isOpened1}" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            amet debitis. Maiores laboriosam minus recusandae similique nostrum
            nihil pariatur quo iste omnis et vero enim suscipit inventore
            dignissimos, doloribus, tenetur voluptates, atque repudiandae?
            Voluptatem expedita sapiente, non voluptatibus similique soluta
            nihil veniam sed.
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="label" @click="toggleActive(2)">Why should we eat more Vegetables?</div>
          <div :class="{content: !isOpened2}">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            omnis harum deleniti et. Enim cumque odio dignissimos deleniti
            blanditiis iure rem quam numquam facilis?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus provident et ea!
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="label" @click="toggleActive(3)">Do vegans get enough protein?</div>
          <div :class="{content: !isOpened3}">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            reprehenderit neque illum at molestiae pariatur, cum alias culpa
            laudantium facere tempora quo voluptatibus consequuntur unde minima
            error quia harum aliquam asperiores quas. Excepturi consequuntur
            dolorum quisquam voluptatem corrupti, eveniet nesciunt ipsam,
            numquam placeat voluptate repellat earum deleniti eaque vero iste.
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="label" @click="toggleActive(4)">Aren’t humans designed to eat meat?</div>
          <div :class="{content: !isOpened4}">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa
            facilis illum veniam provident mollitia eos corrupti commodi
            reiciendis accusamus exercitationem amet iusto consequatur natus non
            quas in quod, magni laborum sunt assumenda deserunt dignissimos
            odit. In voluptatum, deserunt temporibus praesentium ea adipisci
            sapiente consequuntur. Ad.
          </div>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            isOpened1: false,
            isOpened2: false,
            isOpened3: false,
            isOpened4: false,
        }
    },
    methods: {
        toggleActive(labelNumber) {
            if (labelNumber === 1) {
                this.isOpened1 = !this.isOpened1;
                console.log(this.isOpened1)
            } else if (labelNumber === 2) {
                this.isOpened2 = !this.isOpened2;
            } else if (labelNumber === 3) {
                this.isOpened3 = !this.isOpened3;
            } else if (labelNumber === 4) {
                this.isOpened4 = !this.isOpened4;
            }
            
        }
    }
}
</script>

<style scoped>
#upperSection {
    display: flex;
    place-items: center;
    align-content: center;
    margin-bottom: 2rem;
}
#basketImg{
    width: 40vw;
}
#description{
    display: flex;
    flex-direction: column;
    place-items: center;
    align-content: center;
    flex: 1;
    padding-bottom: 6rem;
}
#description h1 {
    font-size: 48px;
    color: #256C40;
}
/* Accordion */
.accordion {
  width: 80vw;
  margin: 3rem auto;
  color: black;
  background-color: white;
  padding: 45px 45px;
}

.accordion .container {
  position: relative;
  margin: 10px 10px;
}

.accordion .label {
  position: relative;
  padding: 10px 0;
  font-size: 30px;
  color: #256C40;
  cursor: pointer;
}

.accordion .label::before {
  content: '+';
  color: black;
  position: absolute;
  top: 50%;
  left: -5px;
  font-size: 30px;
  transform: translateY(-50%);
}

.accordion .content {
  position: relative;
  background: white;
  height: 0;
  font-size: 20px;
  text-align: justify;
  width: 780px;
  overflow: hidden;
  transition: 0.5s;
}

.accordion hr {
  width: 100;
  margin-left: 0;
  border: 1px solid grey;
}



/* Changes from plus sign to negative sign once active */

.active .label::before {
  content: '-';
  font-size: 30px;
}
</style>