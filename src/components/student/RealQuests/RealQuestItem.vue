<template>
    <div class="container" >
        <div class="row align-items-start">
            <div class="col">
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
                <P class="text-warning mt-3">⭐⭐⭐</P>
            </div>
            
            <div class="col text-end">
                <router-link :to="questDetailsLink">
                <button class="btn text-white mt-2" id="enter-btn">
                    <FIcons :icon="['fas', 'square-up-right']" />
                </button>
            </router-link>
            </div>
    
        </div>
        <hr class="line mt-0" />
    </div>
</template>

<script>
export default {
    props :['id','title','front-end','back-end','ui-ux','web_security','ro'],
    computed :{
       questDetailsLink() {
            if(this.ro==='web_development'){
                return this.$route.path + '/Web/' + this.id; // 
            }else if(this.ro=== 'ui_ux'){
                return this.$route.path + '/Ui_Ux/' + this.id; // 
            }
            return this.$route.path + '/Secuirty/' + this.id; 
            
    }
    },
   
    
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