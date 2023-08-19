<template>
    <div class="m-0 colored">
        <div class="d-flex main">
            <!-- NOTE UI/UX Quest -->
            <div v-if="selectedUxQuest.level === 'easy'" class="container w-75 justify-content-center m-0"
                id="main-container">
                <div class="row gx-5 justify-content-center">
                    <div class="col justify-content-between px-5 mt-5">
                        <div class="row justify-content-between ">
                            <div class="col-6">
                                <p class=" fs-2 fw-bold text-white">{{ selectedUxQuest.title }}</p>
                                <p class="fs-5 text-white">UI/UX ● <span class="text-success">EASY 🙂</span> ● {{
                                    selectedUxQuest.points }}
                                    Cubes</p>
                            </div>

                            <div class="col-2 text-end ">
                                <button class="btn" @click="goBack">
                                    <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                                </button>
                            </div>

                        </div>
                        <div class="container m-0 rounded mt-2  mb-2 mr-1 p-5 text-center" id="CardContainer">
                            <div class="col">
                                <p class="fs-4 text-white">{{ selectedUxQuest.description }}
                                </p>
                                <label class="ms-3 fw-bold mt-3 mb-2" for="customFile">Upload File</label>
                                <input type="file" class="form-control w-50 ms-4" id="customFile"
                                    @change="handleFileUpload" />
                                <button type="button" class="btn btn-rounded mt-3"
                                    @click="submitFile(selectedUxQuest.task_id)">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selectedUxQuest.level === 'medium'" class="container w-75 justify-content-center m-0"
                id="main-container">
                <div class="row gx-5 justify-content-center">
                    <div class="col justify-content-between px-5 mt-5">
                        <div class="row justify-content-between">
                            <div class="col-6">
                                <p class=" fs-2 fw-bold text-white">{{ selectedUxQuest.title }}</p>
                                <p class="fs-5 text-white">UI/UX ● <span class="text-primary">MID 😈</span> ● {{
                                    selectedUxQuest.points }}
                                    Cubes</p>
                            </div>

                            <div class="col-2 text-end ">
                                <button class="btn" @click="goBack">
                                    <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                                </button>
                            </div>

                        </div>
                        <div class="container m-0 rounded mt-2  mb-2 mr-1 p-5 text-center" id="CardContainer">
                            <div class="col">
                                <p class="fs-4 text-white">{{ selectedUxQuest.description }}
                                </p>
                                <label for="formFileLg" class="form-label text-success fs-3 fw-bold">Upload
                                    solution</label>
                                <input class="form-control form-control-lg" id="formFileLg" type="file" />
                                <button type="button" class="btn btn-rounded mt-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selectedUxQuest.level === 'hard'" class="container w-75 justify-content-center m-0"
                id="main-container">
                <div class="row gx-5 justify-content-center">
                    <div class="col justify-content-between px-5 mt-5">
                        <div class="row justify-content-between">
                            <div class="col-6">
                                <p class=" fs-2 fw-bold text-white">{{ selectedUxQuest.title }}</p>
                                <p class="fs-5 text-white">UI/UX ● <span class="text-danger">HARD 👿</span> ● {{
                                    selectedUxQuest.points }}
                                    Cubes</p>
                            </div>

                            <div class="col-2 text-end ">
                                <button class="btn" @click="goBack">
                                    <FIcons :icon="['fas', 'arrow-left']" class="fs-5 text-white" />
                                </button>
                            </div>

                        </div>
                        <div class="container m-0 rounded mt-2  mb-2 mr-1 p-5 text-center" id="CardContainer">
                            <div class="col">
                                <p class="fs-4 text-white">{{ selectedUxQuest.description }}
                                </p>
                                <label for="formFileLg" class="form-label text-success fs-3 fw-bold">Upload
                                    solution</label>
                                <input class="form-control form-control-lg" id="formFileLg" type="file" />
                                <button type="button" class="btn btn-rounded mt-3">Submit</button>
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
    props: ['uId'],
    data() {
        return {
            selectedUxQuest: [],
            solutionFile: "",
        };
    },

    mounted() {
        this.getTaks();
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        getTaks() {
            const toNumm = parseInt(this.uId, 10);
            this.selectedUxQuest = this.$store.getters['quests/ui_uxQuests'].find((quest) => quest.task_id === toNumm);
        },
        async submitFile(taskId) {
            const toNumm2 = parseInt(taskId, 10);
            try {
                await this.$store.dispatch('quests/submitFileQuest', {
                    taskId: toNumm2,
                    file_uplaod: this.solutionFile,
                });
            } catch (e) {
                console.log(e)
            }
            console.log(this.getRes)
        },
        handleFileUpload(event) {
            console.log(this.solutionFile)
            this.solutionFile = event.target.files[0];
            console.log(this.solutionFile)

        },
    }
};
</script>
<style scoped>
#main-container {
    padding-left: 20%;
}

.main {

    background-color: #212121;
    height: 100vh;
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
}
</style>