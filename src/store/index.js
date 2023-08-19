import { createStore } from "vuex";

import authentication from "./modules/auth.js";
import clientModule from "./modules/client.js";
import adminModule from "./modules/admin.js";
import managerModule from "./modules/manager";

// NOTE DO NOT DELETE THE TWO FOLLWOING IMPORTS PLEASE 🥲
import RealQuestsModules from "./modules/real-quests/index.js";
import PlatformQuestsModules from "./modules/quests/index.js";
import studentModules from "./modules/student/index.js";
import stdRoadmaps from "./modules/stdRoadmaps/index.js";
import stdNoti from "./modules/notifications/index.js";

const store = createStore({
  modules: {
    auth: authentication,
    client: clientModule,
    admin: adminModule,
    manager: managerModule,
    // NOTE AND DO NOT TOUCH THIS TOO 🥲
    realQuests: RealQuestsModules,
    quests: PlatformQuestsModules,
    std:studentModules,
    theRoadmaps:stdRoadmaps,
    Notification:stdNoti
  },
});
export default store;
