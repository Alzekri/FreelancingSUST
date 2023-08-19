import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
//LandingPage
import landingView from "../views/landingView.vue";
//ChooseUser
import chooseUser from "../views/loginAndSignup/chooseUser.vue";
//Admin
import loginviewAdmin from "../views/loginAndSignup/loginAndSignupAdmin.vue";
import loginFormAdmin from "../components/LoginAndSignup/Admin/loginFormAdmin.vue";
import adminView from "../views/adminDashboard.vue";
import bodyManagerAdmin from "../components/Admin/bodyManagerAdmin.vue";
import bodyDashboardAmdin from "../components/Admin/bodyDashboardAmdin.vue";
//Client
import loginviewClient from "../views/loginAndSignup/loginAndSignupClient.vue";
import loginFormClient from "../components/LoginAndSignup/Client/loginFormClient.vue";
import signupClient from "../components/LoginAndSignup/Client/signupClient.vue";
import clientView from "../views/clientView.vue";
import myProjects from "../components/Client/myProjects.vue";
import requestProject from "../components/Client/requestProject.vue";
import contactUs from "../components/Client/contactUs.vue";
import inboxMessege from "../components/Client/inboxMessege.vue";

//Manager
import loginviewManager from "../views/loginAndSignup/loginAndSignupManager.vue";
import loginFormManager from "../components/LoginAndSignup/Manager/loginFormManager.vue";
import managerView from "../views/managerView.vue";
import approvedProjects from "../components/Manager/ApprovedProjects/approvedProjects.vue";
import projectRequests from "../components/Manager/ProjectRequests/projectRequests.vue";
import rankInterview from "../components/Manager/RankInterview/rankInterview.vue";
import roadMaps from "../components/Manager/RoadMaps/roadMaps.vue";
import inboxesComponent from "../components/Manager/Inbox/inboxesComponent.vue";
import submittedTasks from "../components/Manager/SubmittedTasks/submittedTasks.vue";
import tasksComponent from "../components/Manager/Tasks/tasksComponent.vue";
import teamRequests from "../components/Manager/TeamRequests/teamRequests.vue";
//Student
import loginviewStudent from "../views/loginAndSignup/loginAndSignupStudent.vue";
import loginFormStudent from "../components/LoginAndSignup/Student/loginFormStudent.vue";
import signupStudent from "../components/LoginAndSignup/Student/signupStudent.vue";
import StudentView from "../views/StudentView.vue";
import Welcome from "../components/welcomePlayer/WelcomePlayer.vue";

import Overview from "../components/student/OverviewSide.vue";
import PlatformQuests from "../components/student/PlatformQuests/PlatformQuests.vue";
import RealQuests from "../components/student/RealQuests/RealQuests.vue";
import Notifications from "../components/student/StdNotifications.vue";
import Roadmaps from "../components/student/StdRoadmaps.vue";
import WebQuestDetails from "@/components/student/PlatformQuests/WebQuestDetails.vue";
import UiQuestDetails from "@/components/student/PlatformQuests/UiQuestDetails.vue";
import SecQuestDetails from "@/components/student/PlatformQuests/SecQuestDetails.vue";

import RWebQuestDetails from "@/components/student/RealQuests/RWebQuestDetails.vue";
import RUiQuestDetails from "@/components/student/RealQuests/RUiQuestDetails.vue";
import RSecQuestDetails from "@/components/student/RealQuests/RSecQuestDetails.vue";
import TeamsSection from "@/components/student/Teams/TeamSection.vue";

const routes = [
  //Landing
  {
    path: "/",
    name: "langingView",
    component: landingView,
  },

  //Choose User
  { path: "/choose", component: chooseUser },

  //Admin
  //1-authintication
  {
    path: "/admin",
    component: loginviewAdmin,
    children: [{ path: "login", component: loginFormAdmin }],
  },
  //2-routing

  {
    path: "/admin",
    component: adminView,
    meta: { requireAuth: true, isAdmin: true },
    children: [
      { path: "dashboard", component: bodyDashboardAmdin },
      { path: "manager", component: bodyManagerAdmin },
    ],
  },

  //Client
  //1-authintication
  {
    path: "/client",
    component: loginviewClient,
    children: [
      { path: "login", component: loginFormClient },
      { path: "signup", component: signupClient },
    ],
  },
  //2-routing
  {
    path: "/client",
    component: clientView,
    meta: { requireAuth: true, isClient: true },
    children: [
      { path: "projects", component: myProjects },
      { path: "request", component: requestProject },
      { path: "contact", component: contactUs },
      { path: "inbox", component: inboxMessege },
    ],
  },

  //Manager

  //1-authintication
  {
    path: "/manager",
    component: loginviewManager,
    children: [{ path: "login", component: loginFormManager }],
  },
  //2-routing
  {
    path: "/manager",
    component: managerView,
    children: [
      {
        path: "approvedprojects",
        component: approvedProjects,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "projectrequests",
        component: projectRequests,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "rank",
        component: rankInterview,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "roadmaps",
        component: roadMaps,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "roadmaps/teacher",
        component: roadMaps,
        meta: { requireAuth: true, isTeacher: true },
      },
      {
        path: "submittedtask",
        component: submittedTasks,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "tasks",
        component: tasksComponent,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "teamrequests",
        component: teamRequests,
        meta: { requireAuth: true, isManager: true },
      },
      {
        path: "inbox",
        component: inboxesComponent,
        meta: { requireAuth: true, isManager: true },
      },
    ],
  },

  //Student
  //1-authintication
  {
    path: "/student",

    component: loginviewStudent,
    children: [
      { path: "login", component: loginFormStudent },
      { path: "signup", component: signupStudent },
    ],
  },
  //2-routing
  {
    path: "/student",
    component: StudentView,
    // meta: { requireAuth: true },
    children: [
      { path: "welcome", component: Welcome },
      { path: "overview", component: Overview },
      { path: "platform-quests", component: PlatformQuests },
      { path: "teams-section", component: TeamsSection },

      {
        props: true,
        path: "platform-quests/Web/:wId",
        component: WebQuestDetails,
      },
      {
        props: true,
        path: "platform-quests/Ui_Ux/:uId",
        component: UiQuestDetails,
      },
      {
        props: true,
        path: "platform-quests/Secuirty/:sId",
        component: SecQuestDetails,
      },
      { path: "real-quests", component: RealQuests },
      {
        props: true,
        path: "real-quests/Web/:wId",
        component: RWebQuestDetails,
      },
      {
        props: true,
        path: "real-quests/Ui_Ux/:uId",
        component: RUiQuestDetails,
      },
      {
        props: true,
        path: "real-quests/Secuirty/:sId",
        component: RSecQuestDetails,
      },

      { path: "notifications", component: Notifications },
      { path: "roadmaps", component: Roadmaps },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/");
  } else if (to.meta.isClient && store.getters["auth/role"] != "client") {
    console.log("dosen't have clien permission");
    next("");
  } else if (to.meta.isAdmin && store.getters["auth/role"] != "admin") {
    console.log("dosen't have admin permission");
    next("");
  } else if (to.meta.isManager && store.getters["auth/role"] != "manager") {
    console.log("dosen't have admin permission");
    next("");
  } else if (to.meta.isTeacher && store.getters["auth/role"] != "teacher") {
    console.log("dosen't have admin permission");
    next("");
  } else {
    // console.log(from);
    // console.log(to);
    next();
  }
});
export default router;
