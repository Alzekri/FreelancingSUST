import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  namespaced: true,
  state() {
    return {
      projectsRequests: [],
      projectsApproveds: [],
      projectsReady: [],
      teamRequests: [],
      studentRequests: [],
      tasks: [],
      interviewRequests: [],
      acceptedInterviewRequests: [],
      roadmaps: [],
      contactUs: [],
      submittedWeb:[],
      submittedSecurity:[],
      submittedDesign:[],
    };
  },
  mutations: { 
   setProjectsRequests(state, payload) {
      state.projectsRequests = payload;
    },
    setProjectsApproveds(state, payload) {
      state.projectsApproveds = payload;
    },
    setProjectsReady(state, payload) {
      state.projectsReady = payload;
    },
    setStudentRequests(state, payload) {
      state.studentRequests = payload;
    },
    setTasks(state, payload) {
      state.tasks = payload;
    },
    setInterviewRequests(state, payload) {
      state.interviewRequests = payload;
    },
    setAcceptedInterviewRequests(state, payload) {
      state.acceptedInterviewRequests = payload;
    },
    setRoadmaps(state, payload) {
      state.roadmaps = payload;
    },
    setTeamRequests(state, payload) {
      state.teamRequests = payload;
    },
    setContactUs(state, payload) {
      state.contactUs = payload;
    },
    setSubmittedWeb(state, payload) {
      state.submittedWeb = payload;
    },
    setSubmittedSecurity(state, payload) {
      state.submittedSecurity = payload;
    },
    setSubmittedDesign(state, payload) {
      state.submittedDesign = payload;
    },
  },
  getters: {
    projectsRequests(state) {
      return state.projectsRequests;
    },
    projectsApproveds(state) {
      return state.projectsApproveds;
    },
    projectsReady(state) {
      return state.projectsReady;
    },
    studentRequests(state) {
      return state.studentRequests;
    },
    tasks(state) {
      return state.tasks;
    },
    interviewRequests(state) {
      return state.interviewRequests;
    },
    acceptedInterviewRequests(state) {
      return state.acceptedInterviewRequests;
    },
    roadmaps(state) {
      return state.roadmaps;
    },
    teamRequests(state) {
      return state.teamRequests;
    },
    contactUs(state) {
      return state.contactUs;
    },
    submittedWeb(state) {
      return state.submittedWeb;
    },
    submittedSecurity(state) {
      return state.submittedSecurity;
    },
    submittedDesign(state) {
      return state.submittedDesign;
    },
    
  },
  actions: {
    //1-Requests
    async fetchProjectsRequests(context) {
      const url = "http://127.0.0.1:8000/api/manager/Projects_requests";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const projectsRequestsdata = response.data.data;
      const projectsRequests = [];
      console.log(projectsRequestsdata);
      for (const object of projectsRequestsdata) {
        const project = object;
        projectsRequests.push(project);
      }

      context.commit("setProjectsRequests", projectsRequests);
    },
    async acceptProject(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/project_request/accept";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },

    async rejectProject(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/project_request/reject";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          reject: payload.reject,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //2-Approveds
    async fetchProjectsApproveds(context) {
      const url = "http://127.0.0.1:8000/api/manager/Approved_projects";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });

      //projectsAproved
      const projectsApprovedsdata = response.data["approved projects"];
      const projectsApproveds = [];
      for (const object of projectsApprovedsdata) {
        const project = object;
        projectsApproveds.push(project);
      }
      context.commit("setProjectsApproveds", projectsApproveds);

      //projectsReady
      const projectsReadydata = response.data["Ready clients projects"];
      const projectsReady = [];
      for (const object of projectsReadydata) {
        const project = object;
        projectsReady.push(project);
      }
      context.commit("setProjectsReady", projectsReady);
    },
    //phplishProject
    async publishProject(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/publish";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          client_id: payload.client_id,
          title: payload.title,
          category: payload.category,
          description: payload.description,
          deadline: payload.deadline,
          rank: payload.rank,
          frontend: payload.frontend,
          backend: payload.backend,
          ui_ux: payload.ui_ux,
          web_security: payload.web_security,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //cancel
    async cancelProject(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/publish/cancel";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          client_id: payload.client_id,
          cancel: payload.cancel,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //update state
    async updateStatus(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/update_status";
      const Authorization = localStorage.getItem("Authorization");
      await axios.put(
        url,
        {
          id: payload.id,
          status: payload.status,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },

    //3- TASKS
    //fetchTasks
    async fetchTasks(context) {
      const url = "http://127.0.0.1:8000/api/manager/Tasks";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
      const tasksdata = response.data.Tasks;
      const tsaks = [];
      for (const object of tasksdata) {
        const task = object;
        tsaks.push(task);
      }

      context.commit("setTasks", tsaks);
    },
    //deleteTask
    async deleteTask(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/task/delete";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //addTask
    async addTask(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/task/add";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          title: payload.title,
          level: payload.level,
          description: payload.description,
          rank: payload.rank,
          category: payload.category,
          solution: payload.solution,
          file_path:payload.file_path,
          points: payload.points,
        },
        {
          headers: {
            'Content-type':'multipart/form-data',

            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //Update Task
    async updateTask(context, payload) {
      const url = 'http://127.0.0.1:8000/api/manager/task/update';
      const Authorization = localStorage.getItem("Authorization");
      const response = await axios.put(
        url,
        {
          id: payload.id,
          title: payload.title,
          level: payload.level,
          description: payload.description,
          rank: payload.rank,
          category: payload.category,
          solution: payload.solution,
          file_path:payload.file_path,
          points: payload.points,
        },

        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
      console.log(response);
    },
 
    //4 Rank
    //fetchRank
    async fetchRank(context) {
      const url = "http://127.0.0.1:8000/api/manager/Rank_interview";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });

      //Rank
      const InterviewRequestsdata = response.data.interview_requests;
      const interviewRequests = [];
      for (const object of InterviewRequestsdata) {
        const rank = object;
        interviewRequests.push(rank);
      }
      context.commit("setInterviewRequests", interviewRequests);

      //projectsReady
      const acceptedInterviewRequestsdata =
        response.data.accepted_interview_requests;
      const acceptedInterviewRequests = [];
      for (const object of acceptedInterviewRequestsdata) {
        const ranka = object;
        acceptedInterviewRequests.push(ranka);
      }
      context.commit("setAcceptedInterviewRequests", acceptedInterviewRequests);
    },
    //acceptRank
    async acceptRank(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/rank_interview/accept";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          student_id: payload.student_id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //rejectRank
    async rejectRank(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/rank_interview/reject";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          student_id: payload.student_id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //updateRank 

    async acceptUpgrade(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/rank/update";
      const Authorization = localStorage.getItem("Authorization");
      await axios.put(
        url,
        {
          id: payload.id,
          student_id: payload.student_id,
          rank: payload.nextRank,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //CancelUpdat
    async cancelUpgrade(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/rank/update/cancel";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          student_id: payload.student_id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },

    //ROADMAPS
    //fetchRoadmaps
    async fetchRoadmaps(context) {
      const url = "http://127.0.0.1:8000/api/Roadmaps";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });

      //roadmaps
      const roadmapsdata = response.data.roadmaps;
      const roadmaps = [];
      for (const object of roadmapsdata) {
        const road = object;
        roadmaps.push(road);
      }
      context.commit("setRoadmaps", roadmaps);
    },
    //add Roamaps
    async addRoamap(context, payload) {
      const url = "http://127.0.0.1:8000/api/addRoadmap";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          title: payload.title,
          category: payload.category,
          description: payload.description,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //delete Roadmap
    async deleteRoadmap(context, payload) {
      const url = "http://127.0.0.1:8000/api/roadmaps/delete";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //Update Roamaps
    async updateRoadmap(context, payload) {
      const url = "http://127.0.0.1:8000/api/roadmaps/update";
      const Authorization = localStorage.getItem("Authorization");
      await axios.put(
        url,
        {
          id:payload.id,
          title: payload.title,
          category: payload.category,
          description: payload.description,
        },
        { 
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //TEAM REQUESTS
    async fetchJoinRequests(context) {
      const url = "http://127.0.0.1:8000/api/manager/join_project_requests";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });

      //team_requests
      const TeamRequestsdata = response.data.all_requests;
      const teamRequests = [];
      for (const object of TeamRequestsdata) {
        const team = object;
        teamRequests.push(team);
      }
      context.commit("setTeamRequests", teamRequests);
    },
    //acceptstudentRequest
    async acceptStudent(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/add_student_to_project";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          project_id: payload.project_id,
          student_id: payload.student_id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //acceptteamRequest
    async acceptTeam(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/add_team_to_project";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
          project_id: payload.project_id,
          team_id: payload.team_id,
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    },
    //rejectStudent
    async rejectStudent(context, payload) {
      const url = "http://127.0.0.1:8000/api/manager/student_to_project/reject";
      const Authorization = localStorage.getItem("Authorization");
      await axios.post(
        url,
        {
          id: payload.id,
    
        },
        {
          headers: {
            Authorization: `${Authorization}`,
          },
        }
      );
    }, 
      //rejectTeam
      async rejectTeam(context, payload) {
        const url = "http://127.0.0.1:8000/api/manager/team_to_project/reject";
        const Authorization = localStorage.getItem("Authorization");
        await axios.post(
          url,
          {
            id: payload.id,
      
          },
          {
            headers: {
              Authorization: `${Authorization}`,
            },
          }
        );
      }, 
    //INBOX
    //FetchConactUs
    async fetchContactUs(context) {
      const url = "http://127.0.0.1:8000/api/manager/show_contact_us";
      const Authorization = localStorage.getItem("Authorization");

      const response = await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });

      //contactUsdata
      const contactUsdata = response.data.conutact_us;
      const contactUs = [];
      for (const object of contactUsdata) {
        const contact = object;
        contactUs.push(contact);
      }
      context.commit("setContactUs", contactUs);
    },

    //SUBMITTED TASK
 //fetchsubmittedWeb
 async fetchSubmittedWeb(context) {
  const url = "http://127.0.0.1:8000/api/manager/submitted_web";
  const Authorization = localStorage.getItem("Authorization");

  const response = await axios.get(url, {
    headers: {
      Authorization: `${Authorization}`,
    },
  });
 //task
 const submittedwebdata = response.data.tasks;
 const submittedWeb = [];
 for (const object of submittedwebdata) {
   const task = object;
   submittedWeb.push(task);
 }
 context.commit("setSubmittedWeb", submittedWeb);
console.log(context.state.submittedWeb)
},
 //fetchsubmittedSecurity
 async fetchSubmittedSecurity(context) {
  const url = "http://127.0.0.1:8000/api/manager/submitted_security";
  const Authorization = localStorage.getItem("Authorization");

  const response = await axios.get(url, {
    headers: {
      Authorization: `${Authorization}`,
    },
  });
 //task
 const submittedsecuritydata = response.data.tasks;
 const submittedSecurity = [];
 for (const object of submittedsecuritydata) {
   const task = object;
   submittedSecurity.push(task);
 }
 context.commit("setSubmittedSecurity", submittedSecurity);
},
 //fetchsubmittedDesign
 async fetchsubmittedDesign(context) {
  const url = "http://127.0.0.1:8000/api/manager/submitted_design";
  const Authorization = localStorage.getItem("Authorization");

  const response = await axios.get(url, {
    headers: {
      Authorization: `${Authorization}`,
    },
  });
//Rank
 const submitteddesigndata = response.data.tasks;
 const submittedDesign= [];
 for (const object of submitteddesigndata) {
   const task = object;
   submittedDesign.push(task);
 }
 context.commit("setSubmittedDesign", submittedDesign);
console.log(context.state.submittedDesign)
},
//Full Pionts
async fullPoints(context, payload) {
  const url = "http://127.0.0.1:8000/api/manager/full_points";
  const Authorization = localStorage.getItem("Authorization");
  await axios.put(
    url,
    {
      id:payload.id,
      student_id: payload.student_id,
      task_id: payload.task_id,
    },
    {
      headers: {
        Authorization: `${Authorization}`,
      },
    }
  );
},

//custom Pionts
async customPoints(context, payload) {
  const url = "http://127.0.0.1:8000/api/manager/custom_points";
  const Authorization = localStorage.getItem("Authorization");
  await axios.put(
    url,
    {
      id:payload.id,
      student_id: payload.student_id,
      task_id: payload.task_id,
      custom_points:payload.custom_points
    },
    {
      headers: {
        Authorization: `${Authorization}`,
      },
    }
  );
},


    //LOGOUT
    
    async logout() {
      const url = "http://127.0.0.1:8000/api/manager/logout";
      const Authorization = localStorage.getItem("Authorization");
      await axios.get(url, {
        headers: {
          Authorization: `${Authorization}`,
        },
      });
    },  
  },
};
