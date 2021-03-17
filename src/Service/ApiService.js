import axios from 'axios';


const USER_API_BASE_URL = 'http://localhost:8080/AllChemist';

class ApiService {

    

    signIn(details){

        return axios.post(USER_API_BASE_URL + '/signin',details);
    }

    
     fetchPatientById(id,token) {
      return axios.get(USER_API_BASE_URL+'/patient/details/'+id, {
       headers: {
         Authorization: "Bearer " + token
         }
      });
     }
     

     fetchHistory(userId,token) {
         return axios.get(USER_API_BASE_URL + '/hospital/get_history/' + userId, {
            headers: {
              Authorization: "Bearer " + token
              }
           });
     }

     updatePatient(patient,token) {
        return axios.put(USER_API_BASE_URL + '/update_details',patient,{
            headers: {
              Authorization: "Bearer " + token
              }
           });
     }
     fetchHistoryFromPatient(userId,token) {
      return axios.get(USER_API_BASE_URL + '/hospital/history/' + userId, {
         headers: {
           Authorization: "Bearer " + token
           }
        });
  }

    // addUser(user) {
    //     return axios.post(""+USER_API_BASE_URL, user);
    // }

    // editUser(user) {
    //     return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    // }

}

export default new ApiService();