<template>
  <div class="background text-center">
    <card>
      <p class="fw-bold text-white">Select your avatar</p>
      <div class="col">
        <div class="container">
          <div class="row gap-2">
            <img v-for="(image, index) in firstAvtarRow" :key="index" class="col  " @click="selectFirstRImage(index)"
              :src="avatars(image.src)" alt="" srcset=""
              :class="{ 'selected': image.selected, 'disabled': anyFSelected && !image.selected }" />
          </div>
        </div>
        <br />
        <!-- <div class="container">
          <div class="d-flex gap-2">
            <img v-for="(image, index) in secAvtarRow" :key="index" class="col" @click="selectSecRImage(index)"
              :src="avatars(image.src)" :class="{ 'selected': image.selected, 'disabled': anySSelected && !image.selected }"
              alt="" srcset="" />
          </div>
        </div> -->
      </div>
      <br />
      <!-- role selction -->
      <P class="fw-bold text-white">Select your main role</P>
      <div class="container-sm">
        <div class="row gap-2 text-center">
          <fieldset id="switch" class="radio">
            <input name="switch" id="Backend" type="radio">
            <label for="Backend" @click="backSelected">Backend</label>
            <input name="switch" id="Forntend" type="radio">
            <label for="Forntend" @click="frontSelected">Forntend</label>
            <input name="switch" id="UI/UX" type="radio">
            <label for="UI/UX" @click="uiUxSelected">UI/UX</label>
            <input name="switch" id="Secuirty" @click="secuirtySelected" type="radio">
            <label for="Secuirty">Secuirty</label>
          </fieldset>
        </div>
      </div>
      <br />
        <button @click="startNow">
          S T A R T
          <div id="clip">
            <div id="leftTop" class="corner"></div>
            <div id="rightBottom" class="corner"></div>
            <div id="rightTop" class="corner"></div>
            <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
        </button>
    </card>
  </div>
</template>
<script>
import Card from "../UI/BaseCard.vue";
export default {
  components: {
    Card,

  },
  data() {
    return {
      role: '',
      firstAvtarRow: [
        { src: "icons8-jake_sm.svg", alt: "Image 1", selected: false },
        { src: "icons8-bmo_sm.svg", alt: "Image 2", selected: false },
        { src: "icons8-flame-princess.svg", alt: "Image 3", selected: false },
        { src: "icons8-gunter.svg", alt: "Image 1", selected: false },
        { src: "icons8-finn.svg", alt: "Image 2", selected: false },
        { src: "icons8-ice-king.svg", alt: "Image 3", selected: false }
      ],

      selected: false,
      avatarName:'',
      notSelected: true,
      avatars: (picName) => {
        return require('../../assets/' + picName)
      },
    };
  },
  methods: {
    frontSelected() {
      this.role = 'Frontend Developer'

     
    },
    backSelected() {
      this.role = 'Backend Developer'
    },
    uiUxSelected() {
      this.role = 'UiUx Designer'

    },
    secuirtySelected() {
      this.role = 'Secuirty Researcher'

    },

    selectFirstRImage(index) {
      if (this.firstAvtarRow[index].selected) {
        this.firstAvtarRow[index].selected = false;
      } else {
        this.firstAvtarRow.forEach(image => (image.selected = false));
        this.firstAvtarRow[index].selected = true;
      }
      this.avatarName=this.firstAvtarRow[index].src;
      console.log();

    },
  
    async startNow(){
      const pro={
        av:this.avatarName,
        role:this.role
      }
      console.log(pro)
      try{
        this.$store.dispatch("std/sendAvatar",pro);
      this.$router.replace("overview");

      }catch(e){
        console.log(e);
      }
     


    }

  },
  computed: {
    anyFSelected() {
      return this.firstAvtarRow.some(image => image.selected);
    },


    
  },
};
</script>
<style scoped>
.background {
  background-image: url("../../assets/background.svg");
  height: 100vh;
}

.disabled {
  opacity: 0.5;
}

.bot {
  background-color: #f28c18;
}

.selected {
  border: solid 10px;
  border-color: #f28c18;
}

/* Multiple Toggle Switch by Abu Shafiyya */

fieldset {
  border: 0;
}

/* Hide default radio */
.radio input[type="radio"] {
  position: absolute;
  visibility: hidden;
  display: none;
  opacity: 0;
  z-index: -1;
}

/* Customizing label */
.radio label {
  position: relative;
  padding: 10px 20px 10px 25px;
  cursor: pointer;
  border-radius: 20px;
  color: #f28c18;
  margin: 0px 5px;
  font-weight: 600;
  text-transform: uppercase;
}

.radio label,
.radio label::before {
  -webkit-transition: .25s all ease;
  transition: .25s all ease;
}

.radio label::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: " ";
  position: absolute;
  top: 30%;
  left: 0;
  width: 1em;
  height: 1em;
  border: 2px solid #f28c18;
}

.radio input[type="radio"]+label::before {
  border-radius: 1em;
}

.disabled {
  background-color: gray;
}

/* Checked toggle */
.radio input[type="radio"]:checked+label {
  color: #fff;
  background: #f28c18;
  z-index: 1;
}

.radio input[type="radio"]:checked+label {
  padding: 10px 20px 10px 20px;
}

.radio input[type="radio"]:checked+label::before {
  top: 4px;
  width: 100%;
  height: 2em;
  z-index: -1;
}

.radio:hover input[type="radio"]:checked+label {
  -webkit-box-shadow: #ff9f317c 0px 0px 0px 25px;
  box-shadow: #ff9f317c 0px 0px 0px 25px;
}

.background {
  background-image: url("../../assets/background.svg");
  height: 100vh;
}

img {
  height: 7rem;
  width: 7rem;
  margin-left: auto;
}

button {
  position: relative;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: #ddebf0;
}

#clip {
  --color: #2761c3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 90%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -13.5%;
}

#rightArrow {
  left: 98%;
}

button:hover #rightArrow {
  background-color: #27c39f;
  left: -10%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
  background-color: #27c39f;
  left: 95%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -1.98em;
  left: 91%;
}

#leftTop {
  top: -1.96em;
  left: -3em;
}

#leftBottom {
  top: 2.1em;
  left: -2.15em;
}

#rightBottom {
  top: 45%;
  left: 88%;
}

button:hover #leftTop {
  animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
  animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
  animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
  animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}

@keyframes changeColor8 {
  from {
    background-color: #2781c3;
  }

  to {
    background-color: #27c39f;
  }
}

@keyframes lightEffect8 {
  from {
    box-shadow: 1px 1px 5px #27c39f;
  }

  to {
    box-shadow: 0 0 2px #27c39f;
  }
}

@keyframes greenLight8 {
  from {}

  to {
    box-shadow: inset 0px 0px 32px #27c39f;
  }
}

@keyframes leftArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(10px);
  }
}

@keyframes rightArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(-10px);
  }
}</style>
