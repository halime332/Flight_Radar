import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/index";


export const getFlights = createAsyncThunk("flight/getFlights",
    async() =>{
        //parametre belirle
        const params ={
            bl_lat: '34.710287',
            bl_lng: '25.703175',
            tr_lat: '44.190027',
            tr_lng: '48.090677',
             limit: '300'
        
    };

         //api isteğini at      
          const res = await 
          api.get("/flights/list-in-boundary",{params});
          console.log(res.aircraft);
    }
);
    