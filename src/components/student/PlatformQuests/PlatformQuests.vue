<template>
    <div class="m-0 colored">
        <div v-if="dataLoded===false" class="loding">
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
        </div>
        <div v-if="dataLoded" class="d-flex main p-0">
            <std-navbar></std-navbar>
            <div class="container w-75  wid ">
                <div class="d-flex flex-column">
                    <p class="fs-1 text-white fw-bold">Platform Quests</p>
                    <div class="container ">
                        <div class="row mb-2 fixed-top">
                            <div class="container navBtns">
                                <div class="col">
                                    <div class="col-4 mb-3">
                                        <a href="#WebSection">
                                            <button class="cta">
                                                <span class="span">Web</span>
                                                <span class="second">
                                                    <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <g id="arrow" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <path class="one"
                                                                d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                            <path class="two"
                                                                d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                            <path class="three"
                                                                d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                    <div class="col-4 mb-3">
                                        <a href="#Ui/UxSection">
                                            <button class="cta">
                                                <span class="span">UI/UX</span>
                                                <span class="second">
                                                    <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <g id="arrow" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <path class="one"
                                                                d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                            <path class="two"
                                                                d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                            <path class="three"
                                                                d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                    <div class="col-4 mb-3">
                                        <a href="#SecuirtySection">
                                            <button class="cta">
                                                <span class="span">Security</span>
                                                <span class="second">
                                                    <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <g id="arrow" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <path class="one"
                                                                d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                            <path class="two"
                                                                d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                            <path class="three"
                                                                d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                                                fill="#FFFFFF"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="WebSection">
                        <div class="container m-0 rounded mt-2 mb-2  p-5 text-black" id="CardContainer">
                            <div class="d-flex flex-column">
                                <p class="text-white fs-5 fw-bold">Web Development Quests</p>
                               <!-- NOTE here Web quests -->
                               <QuestItem v-for="web in webQuests" :key=web.id :id=web.task_id :title="web.title" :level="web.level" :rank="web.rank" :points="web.points" :ro="web.category"/>
                            </div>
                        </div>
                    </div>
                    <div id="Ui/UxSection">
                        <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5 text-black" id="CardContainer">
                            <div class="d-flex flex-column">
                                <p class="text-white fs-5 fw-bold">UI/UX design Quests</p>
                                <QuestItem v-for="ux in ui_uxQuests" :key=ux.id :id=ux.task_id :title="ux.title" :level="ux.level" :rank="ux.rank" :points="ux.points" :ro="ux.category"/>
                            </div>
                        </div>
                    </div>
                    <div id="SecuirtySection">
                        <div class="container m-0 rounded mt-2 mb-2 mr-1 p-5 text-black" id="CardContainer">
                            <div class="d-flex flex-column">
                                <p class="text-white fs-5 fw-bold">Web Secuirty Quests</p>
                                <QuestItem v-for="sec in secuirtyQuests" :key=sec.id :id=sec.task_id :title="sec.title" :level="sec.level" :rank="sec.rank" :points="sec.points" :ro="sec.category" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuestItem from './QuestItem.vue';

export default {
    components :{
        QuestItem,
      
    },
    computed :{
        webQuests(){
            return this.$store.getters['quests/webQuests'];
        },
        ui_uxQuests(){
            return this.$store.getters['quests/ui_uxQuests'];
        },
        secuirtyQuests(){
            return this.$store.getters['quests/secuirtyQuests'];
        },
        dataLoded(){
            return this.$store.getters['quests/hasWebQuests']&&this.$store.getters['quests/hasui_uxQuests']&&this.$store.getters['quests/hasui_uxQuests']
        }
    },
    mounted (){
        this.$store.dispatch("quests/getTasks");
        console.log( this.$store.getters['quests/webQuests']);
    }
   
}
</script>

<style scoped>
.navBtns{
    width: min-content;
    height: min-content;
}
.fixed-top {
    position: fixed;
    margin-top: 3%;
    margin-left: 85%;
}



a {
    color: white;
}

a:hover {
    color: white;
}

.main {
    margin-left: 0%;
    background-color: #212121;
    height: auto;
}
.loding{
    width: 100%;
    height: 100vh; 
    padding-left: 50%;
    padding-top: 20%;
}
.wid{
    margin-left: 20%;
}

#CardContainer {
    background: #1B1D1D;
    border-radius: 16px;
}

.cta {
    display: flex;
    padding: 5px 20px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: white;
    background: #582F7F;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    border: none;
}

.cta:focus {
    outline: none;
}

.cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #FBC638;
}

.cta .second {
    transition: 0.5s;
    margin-right: 0px;
}

.cta:hover .second {
    transition: 0.5s;
    margin-right: 45px;
}

.span {
    transform: skewX(15deg)
}

.second {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
}

.one {
    transition: 0.4s;
    transform: translateX(-60%);
}

.two {
    transition: 0.5s;
    transform: translateX(-30%);
}

.cta:hover .three {
    animation: color_anim 1s infinite 0.2s;
}

.cta:hover .one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
}

.cta:hover .two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
}

@keyframes color_anim {
    0% {
        fill: white;
    }

    50% {
        fill: #FBC638;
    }

    100% {
        fill: white;
    }
}

.spinner {
    width: 44px;
    height: 44px;
    animation: spinner-y0fdc1 2s infinite ease;
    transform-style: preserve-3d;
   }
   
   .spinner > div {
    background-color: rgba(0,77,255,0.2);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid #004dff;
   }
   
   .spinner div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
   }
   
   .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
   }
   
   .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
   }
   
   .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
   }
   
   .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
   }
   
   .spinner div:nth-of-type(6) {
    transform: translateZ(22px);
   }
   
   @keyframes spinner-y0fdc1 {
    0% {
     transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }
   
    50% {
     transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }
   
    100% {
     transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
   }
</style>