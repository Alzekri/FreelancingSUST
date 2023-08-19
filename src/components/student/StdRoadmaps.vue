<template>
    <div class="m-0 colored">
        <div class="d-flex">
            <std-navbar></std-navbar>
            <div class="container w-75 wid ">
                <div class="d-flex flex-column">
                    <p class="fs-1 text-white fw-bold">Roadmaps</p>
                    <!-- NOTE Roadmap 1 -->
                    <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5 text-black" id="CardContainer" v-for="roadmap in roadmaps" :key="roadmap.id">
                        <div class="d-flex flex-column">
                            <div class="d-flex gap-2 align-items-center">
                                <img src="../../assets/icons8-futurama-bender-96.svg"
                                    class="rounded" style="width: 20%;" alt="Avatar" />
                                <div class="d-flex flex-column">
                                    <p class="text-white fs-3 fw-bold">{{roadmap.title}}</p>
                                    <p class="fs-6 text-secondary">{{ roadmap.first_name }} {{ roadmap.last_name }}</p>
                                    <p class="fs-6 genere">{{roadmap.category}}</p>
                                </div>
                            </div>
                            <p class="text-white fs-4 mt-3 Pc">{{ roadmap.description  }} </p>
                        </div>
                    </div>

    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed :{
       roadmaps(){
        return this.$store.getters['theRoadmaps/roadmaps'];
       }
     },

     mounted (){
      this.$store.dispatch("theRoadmaps/getRoadmaps");
      const tt=  this.$store.getters['theRoadmaps/hasroadmaps']

        console.log(tt)
     }
    
}
</script>
<style scoped>
html{
    background-color: #212121;
}
.Pc {
    text-align: justify;
    letter-spacing: 3px;
}
img{
    margin: 0;
    width: auto;
    height: auto;
}

.genere {
    color: #F28C18;
}

.main {
    background-color: #212121;
    height: auto;
  
}
.wid{
    margin-left: 20%;
}

#CardContainer {
    background: #1B1D1D;
    border-radius: 16px;
}
.bigC{
    background-color: #212121;
    height: 100vh;
    margin-left: 10%;
}
</style>