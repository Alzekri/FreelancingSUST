<template>
    <div class="container" >
        <div class="row align-items-start">
            <div class="col-4">
                <div class="row ">
                    <div class="col">
                        <img src="../../../assets/Group3073.svg" alt="" class="questImg" />
                    </div>
                    <div class="col">
                        <P class="text-white mt-3">{{ title }}</P>
                    </div>
                </div>
            </div>
            <div class="col">
                <p class="mt-3 text-uppercase"
                    :class="{ 'text-danger': level === 'hard', 'text-primary': level === 'medium', 'text-success': level === 'easy', }">
                    LEVEL:{{ level }}</p>
            </div>
            <div class="col">
                <P class="text-warning mt-3">RANK:{{rank}}↑</P>    
            </div>
            <div class="col">
                <div class="row">
                    <div class="col align-items-center">
                        <img src="../../../assets/Shape-73-ex-small.svg" class="questcubImg"
                            alt="" />
                    </div>
                    <div class="col">
                        <P class="text-white mt-3 fs-5">{{ points }}</P>
                    </div>
                    <div class="col">
                            <router-link :to="questDetailsLink">
                                <button @click="test" class="btn text-white" id="enter-btn" >
                                    <FIcons :icon="['fas', 'square-up-right']" />
                                </button>
                            </router-link>
                    </div>
                </div>

            </div>
        </div>
        <hr class="line mt-0" />
    </div>
</template>

<script>
export default {
    props :['id','title','level','rank','points','ro'],
    computed :{
       questDetailsLink() {
        console.log(this.ro); 
            if(this.ro=== 'web_development'){
                return this.$route.path + '/Web/' + this.id; 
                // 
            }else if(this.ro=== 'ui_ux'){
                return this.$route.path + '/Ui_ux/' + this.id; // 
            }
            return this.$route.path + '/Secuirty/' + this.id; 
                     
    }
    },
    mounted (){
     
    }
    
}
</script>

<style scoped>
#enter-btn {
    background-color: #582F7F;
    margin-top: 20%;
}

.questImg {
    margin-left: 0;
    width: 40%;
    height: auto;
    margin-top: 8%;

}

.questcubImg {
    width: 2.5rem;
    height: auto;
    margin-top: 20%;
}
hr.line {
    border-top: 2px solid #bbb;
}

</style>