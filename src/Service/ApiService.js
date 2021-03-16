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
        return axios.put(USER_API_BASE_URL + '/patient/update_details/',patient,{
            headers: {
              Authorization: "Bearer " + token
              }
           });
     }

     fetchHistoryFromPatient(userId,token) {
      return axios.get(USER_API_BASE_URL + '/patient/history/' + userId, {
         headers: {
           Authorization: "Bearer " + token
           }
        });
  }

     createPrescription(prescription,token){
        return axios.post(USER_API_BASE_URL + '/hospital/create', prescription, {
         headers: {
           Authorization: "Bearer " + token
           }
        });
     }

     addPatient(patient,token) {
      return axios.post(USER_API_BASE_URL + '/hospital/create/patient', patient, {
        headers: {
          Authorization: "Bearer " + token
          }
       });
     }

     viewPrescription(userId,token) {
      return axios.get(USER_API_BASE_URL + '/pharmacy/view_prescription/' + userId, {
         headers: {
           Authorization: "Bearer " + token
           }
        });
  }

}

export default new ApiService();