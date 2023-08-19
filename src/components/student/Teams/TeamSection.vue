<template>
    <div class="m-0 colored">
        <div class="d-flex main">
          <std-navbar class="w-auto"></std-navbar>
          <div class="d-flex gap-3" id="main-row">
            <div class="d-flex flex-column">
              <p class="fs-1 text-white fw-bold">Teams {{isEmpty}}</p>
            <div v-if="isEmpty" class="col-12 text-white text-center centering">
                <div class="d-flex gap-3">
                    <button type="button" class="btn btn-success btn-rounded mt-3" id="CreateTeam" data-bs-toggle="modal"
                    data-bs-target="#CreateTeamModal">Create Team</button>
                    <button type="button" class="btn btn-danger btn-rounded mt-3 custom"  id="JoinTeam" data-bs-toggle="modal"
                    data-bs-target="#JoinTeamModal">Join Team</button>
                </div>    
            </div>

            <!-- NOTE Modal Create Team -->
          <div class="modal fade " id="CreateTeamModal" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog ">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-white" id="exampleModalLabel">Create team</h5>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Enter Team Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="teamName">
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn text-white" @click="addTeam">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <!-- NOTE Modal Join Team -->
        <div class="modal fade " id="JoinTeamModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h5 class="modal-title text-white" id="exampleModalLabel">Create team</h5>
              <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label text-white">Enter Team Link</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="link" v-model="inviteLink">
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn  text-white custom"  @click="joinTeam" >Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <!-- NOTE TEAM ELEMENT -->
      <div v-if="!isEmpty" class="container m-0 rounded" id="CardContainer">
        <div class="d-flex  align-items-center gap-5">
            <div class="d-flex flex-colmun text-white">
                <FIcons :icon="['fas', 'people-group']" class="fs-5 colored" />
            </div>
            <div class="d-flex flex-colmun">
                <P class="text-white mt-3">{{teamInfo.teamName}}</P>
            </div>
            <div class="d-flex flex-colmun">
                <P class="text-warning mt-3" v-if="teamInfo.teamLeader">Invite Code:: <span class="text-danger">{{teamInfo.invLink }}</span></P>
            </div>
              <div class="d-flex flex-colmun">
                <FIcons v-if="teamInfo.teamLeader" :icon="['fas', 'circle-xmark']" class="fs-5 text-danger btn" id="DeleteTeam" data-bs-toggle="modal"
                data-bs-target="#DeleteTeamModal"  /> 
            </div>
            <div class="d-flex flex-colmun">
              <FIcons v-if="teamInfo.teamLeader" :icon="['fas', 'pen-to-square']" class="fs-5 text-primary btn" id="EditTeam" data-bs-toggle="modal"
              data-bs-target="#UpdateTeamModal"  /> 
          </div>
        </div>
      </div>
<!-- NOTE TEAM MEM ELEMENT -->
  <div v-for="(mem, index) in teamInfo.teamMembers" :key="index" v-show="teamInfo" class="container m-0 rounded ms-3 mt-2" id="CardContainerSm">
    <div class="d-flex  align-items-center gap-5">
        <div class="d-flex flex-colmun text-white">
            <FIcons :icon="['fas', 'user']" class="fs-5 colored" />
        </div>
        <div class="d-flex flex-colmun">
            <P class="text-warning mt-3">{{mem.username}}</P>
        </div>
        <div class="d-flex flex-colmun">
            <P class="text-white mt-3">Rank::{{mem.rank}}↑</P>
        </div>
        <div class="d-flex flex-colmun">
            <P class="text-white mt-3">Role::{{mem.role}}</P>
        </div>
          <div class="d-flex flex-colmun">
            <FIcons v-if="!mem.team_leader"  :icon="['fas', 'circle-xmark']" class="fs-5 text-danger btn" id="DeleteTeam" data-bs-toggle="modal"
            data-bs-target="#DeleteTeamModal" @click="deleteTeamMember(mem.student_id)"  /> 
            <FIcons v-if="mem.team_leader"  :icon="['fas', 'crown']" class="fs-5 text-warning btn" id="DeleteTeam" data-bs-toggle="modal"
            data-bs-target="#DeleteTeamModal" @click="deleteTeamMember(mem.student_id)"  /> 
        </div>
        
    </div>
  </div>


<!--NOTE DELETE MEM MODEL -->
<div class="modal fade " id="DeleteMemModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog ">
  <div class="modal-content bg-dark">
    <div class="modal-header">
      <h5 class="modal-title text-white" id="exampleModalLabel">Are you Sure</h5>
      <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p class="text-danger">Are you Sure You Want to Delete This Member</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn  text-white bg-danger">Yes</button>
    </div>
  </div>
</div>
</div>

<!--NOTE Delete Team  -->
<div class="modal fade " id="DeleteTeamModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog ">
  <div class="modal-content bg-dark">
    <div class="modal-header">
      <h5 class="modal-title text-white" id="exampleModalLabel">Are you Sure</h5>
      <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p class="text-danger fw-bold">Are You Sure You Want to Delete This Team</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn text-white bg-danger" @click="deleteTeam">Yes</button>
    </div>
  </div>
</div>
</div>

<!-- NOTE Edit -->
<div class="modal fade " id="UpdateTeamModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog ">
  <div class="modal-content bg-dark">
    <div class="modal-header">
      <h5 class="modal-title text-white" id="exampleModalLabel">Are you Sure</h5>
      <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label text-white">Enter New Team Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="teamNameUpdated">
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn text-white bg-danger" @click="updateTeamName">Yes</button>
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

    data (){
        return {

            teamName:'',
            isLeader:false,
            teamNameUpdated:'',
            showMe:true,
            inviteLink:''


        }
    },
    computed :{
        teamInfo(){
          return this.$store.getters['std/getTeamInfo'];
        },
        isEmpty(){
          return this.$store.getters['std/isTeamInfoIsEmpty'];
        },
       
        

    },
    async mounted(){
      
      await this.fetchTeam();
    },
    methods :{

      async addTeam(){
        try{
          await this.$store.dispatch('std/createTeam',{
              tName:this.teamName
            });
        }catch (e){
          console.log(e)
        }
        try{
          await this.$store.dispatch('std/getTeam');
        }catch (e){
          console.log(e)
        }
        },

        async fetchTeam(){
          try{
          await this.$store.dispatch('std/getTeam');
          
        }catch (e){
          console.log(e)
        }
        },
        // NOTE update team
        async updateTeamName(){
          const payload={
            newName:this.teamNameUpdated
            }
          try{
          await this.$store.dispatch('std/updateTeamName',payload);
        }catch (e){
          console.log(e)
        }
        this.fetchTeam();
        },
        
        // NOTE Delete Team
        async deleteTeam(){
          try{
            await this.$store.dispatch('std/deleteTeam');
          }catch (e){
            console.log(e);
          }
          this.fetchTeam();
        },
        async joinTeam(){
          const payload={
            inviteL:this.inviteLink
            }
          try{
            await this.$store.dispatch('std/joinTeam',payload);
          }catch (e){
            console.log(e);
          }
          this.fetchTeam();
        },
        async deleteTeamMember(stdId){
          const payload={
            stdId:stdId
            }
          try{
            await this.$store.dispatch('std/deleteTeamMember',payload);
          }catch (e){
            console.log(e);
          }
          this.fetchTeam();
        }
        
    },
     

}
</script>
<style>
.main {
    width: 100%;
    margin-right: 0px;
    height: 100vh;
  }
  
  #main-row {
    width: 75%;
    margin-left: 20%;
  }
  
  .colored {
    background-color: #212121;
  }
  
  #CardContainer {
    width: 100%;
    background: #1b1d1d;
    border-radius: 16px;
  }

  .centering{
    margin-top: 100%;
    margin-left: 200%;
  }

  #CardContainer {
    width: 100%;
    background: #1b1d1d;
    border-radius: 16px;
  }

  #CardContainerSm {
    width: auto;
    background: #1b1d1d;
    border-radius: 16px;
  }

</style>