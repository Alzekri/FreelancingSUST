<template>
    <div class="bg-danger">
        <div class="d-flex h-9 main" :class="[{bigC:notifications.length===0},'main']">
            <std-navbar></std-navbar>
            <div class="container w-75 wid">
                <div class="d-flex flex-column ">
                    <p class="fs-1 text-white fw-bold">Notifications</p>
                    <!-- NOTE notification  -->
                    <div v-if="notifications.length===0">
                        <div class="container text-center">
                            <h1 class="text-white fs-5 fw-bold">There is no toifications yet ^_^</h1>
                        </div>
                    </div>
                    <div v-else v-for="note in notifications" :key="note.id">
                        <div class="alert alert-primary"
                            role="alert">
                            <div class="row justify-content-between">
                                <div class="col-10 pe-0">
                                    {{ note.message }}
                                </div>
                                <div class="col ms-5 text-end">
                                    <button class="btn" @click="deleteEvent(note.id)">
                                    <FIcons :icon="['fas', 'circle-xmark']" class="fs-5 text-danger" /> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>

export default {
    
        computed:{
            notifications(){
                return this.$store.getters['Notification/gNoti']
            }
        },
    methods: {
        deleteEvent(noteID){
            const index = this.notifications.findIndex(item => item.id === noteID);
      if (index >= 0) {
        this.notifications.splice(index, 1);
      }
        }
    },
    mounted (){
        this.$store.dispatch("Notification/getNotification");
        console.log(this.$store.getters['Notification/gNoti'].length)
    }
}
</script>

<style scoped>
.main {

    background-color: #212121;
    height: 100vh;
}


.wid{
    margin-left: 20%;
}
#CardContainer {
    background: #1B1D1D;
    border-radius: 16px;
    height: 70px;
}
.bigC{
    background-color: #212121;
    height: 100vh;
    margin-left: 10%;
}
</style>