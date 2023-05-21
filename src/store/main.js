import axios from "../plugins/axios";
import { defineStore, storeToRefs } from 'pinia'
import { BASE_URL } from '../variables';
import { authStore } from './auth.js';
import { ref } from "vue";

export const mainStore = defineStore('main', {
  state: () => {
    let authStorage = storeToRefs(authStore());
    return { 
      income_production: [],
      outcome_production: [],
      storage_production: [],


      sales: [],
      
      
      clients_list: [],
      one_client: [],
      
      
      orders_list: [],
      
      
      employees: [],

      user: authStorage.user, 

      rules: [
        // {
        //   action: 'manage',
        //   subject: 'all',
        //   // section: 'sidebar'
        // },
        {
          action: ['read', 'update', 'delete'],
          subject: 'sidebar',
        },
      ],


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
    //                                 PRODUCTION START 
    // ================================================================================







    // ==================== GET_REQUESTS START ====================
    async GET_INCOME_PRODUCTION() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.income_production = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_OUTCOME_PRODUCTION() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.outcome_production = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_STORAGE_PRODUCTION() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.storage_production = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================





    // ==================== POST_REQUESTS START ====================
    async POST_FOAM_PRODUCE(payload) {
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
    //                                  PRODUCTION END 
    // ================================================================================







































    // ================================================================================
    //                                  SALES START 
    // ================================================================================





    // ==================== GET_REQUESTS START ====================
    async GET_SALES() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.sales = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ================================================================================
    //                                   SALES END 
    // ================================================================================






































    // ================================================================================
    //                                  CLIENTS START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_CLIENTS_LIST() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.clients_list = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    async GET_ONE_CLIENT() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.one_client = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================




    // ==================== POST_REQUESTS START ====================
    async POST_NEW_CLIENT(payload) {
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
    //                                   CLIENTS END 
    // ================================================================================


















    

    // ================================================================================
    //                                  ORDERS START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_ORDERS_LIST() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.orders_list = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // async GET_ONE_ORDER() {
    //   return await axios({
    //       method: "GET", 
    //       url: BASE_URL + `api/v1/department`,
    //     })
    //     .then((e) => {
    //       this.one_client = e.data;
    //       return e.data;
    //     })
    //     .catch((error) => {
    //       return error;
    //     })
    // },
    // ==================== GET_REQUESTS END ====================




    // ==================== POST_REQUESTS START ====================
    async POST_NEW_ORDER(payload) {
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
    //                                   ORDERS END 
    // ================================================================================

























    // ================================================================================
    //                                  EMPLOYEES START 
    // ================================================================================

      



    // ==================== GET_REQUESTS START ====================
    async GET_EMPLOYEES_LIST() {
      return await axios({
          method: "GET", 
          url: BASE_URL + `api/v1/department`,
        })
        .then((e) => {
          this.employees = e.data;
          return e.data;
        })
        .catch((error) => {
          return error;
        })
    },
    // ==================== GET_REQUESTS END ====================







    // ================================================================================
    //                                   EMPLOYEES END 
    // ================================================================================
    


    




  },
})