import axios from "../plugins/axios";
import { defineStore, storeToRefs } from 'pinia'
import { BASE_URL } from '../variables';
import { authStore } from './auth.js';
import { ref } from "vue";

export const warehouseStore = defineStore('warehouse', {
  state: () => {
    let authStorage = storeToRefs(authStore());
    return { 
      income_raw_materials: [],
      outcome_raw_materials: [],
      storage_raw_materials: [],
      process_raw_materials: [],
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
    async POST_NEW_PRODUCT(payload) {
      return await axios({
          method: "POST", 
          url: BASE_URL + `api/v1/department`,  // Department qo'shish
          data: payload
        })
        .then((e) => {
          return e;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== POST_REQUESTS END ====================



    // ==================== UPDATE_REQUESTS START ====================

    // ==================== UPDATE_REQUESTS END ====================




    // ==================== DELETE_REQUESTS START ====================

    // ==================== DELETE_REQUESTS END ====================




    // ================================================================================
    //                               PRIMARY_ACTIONS END 
    // ================================================================================















    // ================================================================================
    //                               RAW_MATERIALS START 
    // ================================================================================







    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_RAW_MATERIALS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_RAW_MATERIALS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_RAW_MATERIALS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_PROCESS_RAW_MATERIALS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.process_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ================================================================================
    //                                RAW_MATERIALS END 
    // ================================================================================







































    // ================================================================================
    //                                  EQUIPMENTS START 
    // ================================================================================





    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_EQUIPMENTS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_EQUIPMENTS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_EQUIPMENTS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_PROCESS_EQUIPMENTS() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.process_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ================================================================================
    //                                   EQUIPMENTS END 
    // ================================================================================






































    // ================================================================================
    //                                  MACHINES START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_MACHINES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_MACHINES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_MACHINES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_PROCESS_MACHINES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.process_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ================================================================================
    //                                   MACHINES END 
    // ================================================================================



































    // ================================================================================
    //                                  ACCESSORIES START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_ACCESSORIES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_ACCESSORIES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_ACCESSORIES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_PROCESS_ACCESSORIES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.process_raw_materials = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ================================================================================
    //                                   ACCESSORIES END 
    // ================================================================================





  },
})