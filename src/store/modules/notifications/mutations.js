export default {
    setNotificitions(state,payload){
        const notiArr=Array.from(payload.noti);

        state.notifications=notiArr;
    }
}