/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import MyContext from "./MyContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../FireBase/FireBaseconfig";

const MyState = (prop) => {
  const [mode, setMode] = useState("light");

  const [loading, isLoading] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProducts = async () => {
    if (
      products.title === null ||
      products.category === null ||
      products.description === null ||
      products.imageUrl === null ||
      products.price === null
    ) {
      toast.error("All fields are compulsory");
    }
  isLoading(true)
   try {
    const productref = collection(fireDB, "products")
    await addDoc(productref, products);
    toast.success("Product added Successfuly")
    isLoading(false)
   } catch (error) {
    console.log(error)
   }
  };
  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, isLoading }}>
      {prop.children}
    </MyContext.Provider>
  );
};

export default MyState;
