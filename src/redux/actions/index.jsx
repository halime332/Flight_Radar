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
          //apiden gelen dizi içerisindeki dizileri proje içerisinde kullanımının 
          //kolay olması için nesneye çevir
          const formatted = res.data.aircraft.map((item) =>({
                id:item[0],
                code:item[1],
                lat:item[2],
                lng:item[3]
          }));
          return formatted;
    }
);
    



export const getInfo = createAsyncThunk("info/getInfo",async (id) =>{
    //api'den uçuş detaylarını al
    const res= await api.get(`/flights/detail?flight=${id}`); 
     //aksiyonun payload'ını return et
     return res.data;
});