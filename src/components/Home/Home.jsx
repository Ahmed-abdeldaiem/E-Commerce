import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import { Button, Label, TextInput } from "flowbite-react";
import {  LoadingContext } from '../../Context/LoadingContext';
import axios from 'axios';
import { UserLoginContext } from '../../Context/UserLoginContext';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import useProducts from '../../Hooks/useProducts';
import Loder from '../Loder/Loder';
import { useQueryClient } from '@tanstack/react-query';





export default function Home() {



  let  {data ,isError , isLoading ,isFetching ,refetch} =useProducts('')

  const {Loading } = useContext(LoadingContext)
  
  function getBaseUrl(){
    const baseURL = `${window.location.protocol}//${window.location.host}`;
    localStorage.setItem('baseURL',baseURL)
    // console.log(baseURL);
  }

useEffect(() => {
  
  getBaseUrl()
 
}, [])


  return <>
{
  isLoading ? <Loder/> :<>
  <MainSlider/>
<CategorySlider/>
<Products/>
  </>
  
}


  </>
}
