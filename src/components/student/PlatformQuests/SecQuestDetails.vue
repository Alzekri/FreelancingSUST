<template>
    <div class="m-0 colored">
        <div class="d-flex main">
            <!-- NOTE UI/UX Quest -->
            <div v-if="selectedSecQuest.level === 'easy'" class="container w-75 justify-content-center m-0"
                id="main-container">
                <div class="row gx-5 justify-content-center">
                    <div class="col justify-content-between px-5 mt-5 mb-5">
                        <div class="row justify-content-between ">
                            <div class="col-6">
                                <p class=" fs-2 fw-bold text-white">{{ selectedSecQuest.title }}
                                </p>
                                <p class="fs-5 text-white">Web secuirty ● <span class="text-success">EASY 🙂</span> ● {{
                                    selectedSecQuest.points }}
                                    Cubes</p>
                            </div>
                            <div class="col-2 text-end ">
                                <button class="btn" @click="goBack">
                                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                                </button>
                              </div>
                        </div>
                        <div class="container m-0 rounded mt-2 bg-black mb-2 mr-1 p-5 text-center" id="CardContainer">
                            <div class="col">
                                <p class="fs-4 text-white">{{ selectedSecQuest.description }}
                                </p>
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">CTF-link</label>
                                <input class="form-control form-control-lg" id="formControlReadonly" type="text"
                                    value="www.crv.com" aria-label="readonly input example" readonly />
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">Submit
                                    solution</label>
                                <input class="form-control form-control-lg" id="formControlReadonly"
                                    placeholder="Enter The flag here" type="text" aria-label="readonly input example" />
                                <button type="button" class="btn  btn-rounded mt-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selectedSecQuest.level === 'medium'" class="container w-75 justify-content-center m-0"
                id="main-container">
                <div class="row gx-5 justify-content-center">
                    <div class="col justify-content-between px-5 mt-5">
                        <div class="row justify-content-between ">
                            <div class="col-6">
                                <p class=" fs-2 fw-bold text-white"> {{ selectedSecQuest.title }} </p>
                                <p class="fs-5 text-white">Web secuirty ● <span class="text-primary">MID 😈</span> ● {{
                                    selectedSecQuest.points }} Cubes
                                </p>
                            </div>
                            <div class="col-2 text-end ">
                                <button class="btn" @click="goBack">
                                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                                </button>
                              </div>

                        </div>
                        <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5 text-center" id="CardContainer">
                            <div class="col">
                                <p class="fs-4 text-white">{{ selectedSecQuest.description }}
                                </p>
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">CTF-link</label>
                                <input class="form-control form-control-lg" id="formControlReadonly" type="text"
                                    value="www.crv.com" aria-label="readonly input example" readonly />
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">Submit
                                    solution</label>
                                <input class="form-control form-control-lg" id="formControlReadonly"
                                    placeholder="Enter The flag here" type="text" aria-label="readonly input example" />
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">Write down your
                                    report</label>
                                <textarea class="form-control form-control-lg" id="formControlReadonly" rows="4"
                                    placeholder="write the report here" aria-label="readonly input example" />
                                <button type="button" class="btn  btn-rounded mt-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selectedSecQuest.level === 'hard'" class="container w-75 justify-content-center m-0"
                id="main-container">
                <div class="row gx-5 justify-content-center">
                    <div class="col justify-content-between px-5 mt-5">
                        <div class="row justify-content-between">
                            <div class="col-6">
                                <p class=" fs-2 fw-bold text-white">{{ selectedSecQuest.title }}</p>
                                <p class="fs-5 text-white">Web secuirty ● <span class="text-danger">HARD 👿</span> ● {{
                                    selectedSecQuest.points }} Cubes</p>
                            </div>
                            <div class="col-2 text-end ">
                                <button class="btn" @click="goBack">
                                  <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                                </button>
                              </div>

                        </div>
                        <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5 text-center" id="CardContainer">
                            <div class="col">
                                <p class="fs-4 text-white"> {{ selectedSecQuest.description }}
                                </p>
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">CTF-link</label>
                                <input class="form-control form-control-lg" id="formControlReadonly" type="text"
                                    value="www.crv.com" aria-label="readonly input example" readonly />
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">Submit
                                    solution</label>
                                <input class="form-control form-control-lg" id="formControlReadonly"
                                    placeholder="Enter The flag here" type="text" aria-label="readonly input example" />
                                <label for="formFileLg" class="form-label text-white fs-3 fw-bold">Write down your
                                    report</label>
                                <textarea class="form-control form-control-lg" id="formControlReadonly" rows="4"
                                    placeholder="write the report here" aria-label="readonly input example" />
                                <button type="button" class="btn  btn-rounded mt-3">Submit</button>
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
    props: ['sId'],
    data() {
        return {
            selectedSecQuest: null,
        };
    },

    created() {
        const toNumm=parseInt(this.sId,10);
        this.selectedSecQuest = this.$store.getters['quests/secuirtyQuests'].find((quest) => quest.task_id === toNumm);
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>
<style scoped>
#main-container {
    padding-left: 20%;
    margin-bottom: 20%;
}

.main {

    background-color: #212121;
    height: auto
}

#CardContainer {
    background: #1B1D1D;
    border-radius: 16px;
}

.btn {
    background-color: #F28C18;
    color: white;
    border-color: #F28C18;
}

.btn:hover {
    background-color: #d28126;
    color: white;
    border-color: #F28C18;
}

.bi-arrow-return-left:hover {
    background-color: #323232;
    border-radius: 15px;
    padding: 5px;
}</style>