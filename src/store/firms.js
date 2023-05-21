import axios from "../plugins/axios";
import { defineStore, storeToRefs } from 'pinia'
import { BASE_URL } from '../variables';
import { authStore } from './auth.js';
import { ref } from "vue";

export const firmsStore = defineStore('firms', {
  state: () => {
    let authStorage = storeToRefs(authStore());
    return { 

      income_matrasses: [],
      outcome_matrasses: [],
      storage_matrasses: [],
      ready_matrasses: [],
 
 
 
 
      income_pillows: [],
      outcome_pillows: [],
      storage_pillows: [],
      ready_pillows: [],
      
      
      
      
      income_sponges: [],
      outcome_sponges: [],
      storage_sponges: [],
      ready_sponges: [],
      




      income_curly_cuttings: [],
      outcome_curly_cuttings: [],
      storage_curly_cuttings: [],
      ready_curly_cuttings: [],






      user: authStorage.user, 
    };
  },
  getters: {

  },
  actions: {
    // ================================================================================
    //                               PRIMARY_ACTIONS START 
    // ================================================================================




    // ==================== GET_REQUESTS START ====================
    
    // ==================== GET_REQUESTS END ====================



    // ==================== POST_REQUESTS START ====================
   
    // ==================== POST_REQUESTS END ====================



    // ==================== UPDATE_REQUESTS START ====================

    // ==================== UPDATE_REQUESTS END ====================




    // ==================== DELETE_REQUESTS START ====================

    // ==================== DELETE_REQUESTS END ====================




    // ================================================================================
    //                               PRIMARY_ACTIONS END 
    // ================================================================================















    // ================================================================================
    //                               MATRASSES START 
    // ================================================================================







    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_MATRASSES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_matrasses = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_MATRASSES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_matrasses = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_MATRASSES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_matrasses = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_READY_MATRASSES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.ready_matrasses = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================





    // ==================== POST_REQUESTS START ====================
    async POST_MATRAS_PRODUCE(payload) {
      return await axios({
          method: "POST", 
          url: BASE_URL + `api/v1/department`,
          data: payload
        })
        .then((e) => {
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== POST_REQUESTS END ====================
    







    // ================================================================================
    //                                MATRASSES END 
    // ================================================================================







































    // ================================================================================
    //                                  PILLOWS START 
    // ================================================================================





    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_PILLOWS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_pillows = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_PILLOWS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_pillows = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_PILLOWS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_pillows = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_READY_PILLOWS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.ready_pillows = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================





     // ==================== POST_REQUESTS START ====================
     async POST_PILLOW_PRODUCE(payload) {
      return await axios({
          method: "POST", 
          url: BASE_URL + `api/v1/department`,
          data: payload
        })
        .then((e) => {
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== POST_REQUESTS END ====================





    // ================================================================================
    //                                   PILLOWS END 
    // ================================================================================






































    // ================================================================================
    //                                  SPONGES START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_SPONGES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_sponges = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_SPONGES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_sponges = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_SPONGES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_sponges = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_READY_SPONGES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.ready_sponges = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ==================== POST_REQUESTS START ====================
     async POST_SPONGES_PRODUCE(payload) {
      return await axios({
          method: "POST", 
          url: BASE_URL + `api/v1/department`,
          data: payload
        })
        .then((e) => {
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== POST_REQUESTS END ====================






    // ================================================================================
    //                                   SPONGES END 
    // ================================================================================



































    // ================================================================================
    //                                  CURLY_CUTTINGS START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_CURLY_CUTTINGS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_curly_cuttings = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_CURLY_CUTTINGS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_curly_cuttings = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_CURLY_CUTTINGS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_curly_cuttings = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_READY_CURLY_CUTTINGS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.ready_curly_cuttings = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ==================== POST_REQUESTS START ====================
     async POST_CURLY_CUTTINGS_PRODUCE(payload) {
      return await axios({
          method: "POST", 
          url: BASE_URL + `api/v1/department`,
          data: payload
        })
        .then((e) => {
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== POST_REQUESTS END ====================







    // ================================================================================
    //                                   CURLY_CUTTINGS END 
    // ================================================================================











  },
  

})