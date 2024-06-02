"use client"
import { useState, useEffect } from "react";
import Loader from "../components/loader"
import Card from "../components/card"
import FormFile from "../components/formfield"
import RenderCard from "../components/render-card";

const Home = () => {
const [loeading, setloading] = useState(false);
const [allPost, setAllPost] = useState(null)
const [searchText, setSearchText] = useState('abc')



  return (
   <section className="max-w-7xl mx-auto">
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]" >Comunidad</h1>
      <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">Imagenes:</p>
    </div>
    <div className="mt-16">
      <FormFile />
    </div>
    <div className="mt-10">
      {loeading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ): (
        <>
        {searchText &&(
          <h2 className="font-medium text-[#666e75] text-xl mb-3">
            Mostrar:<span className="text-[#222328]">
              {searchText}

            </span>
          </h2>
        )}
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
          {searchText ?(
            <RenderCard
             data={[]}
            title="no search result found1"
            />
          ): (
            <RenderCard 
            data={[]}
            title="No post found"
            />
          )}

        </div>
        </>
      )}

    </div>

   </section>
  )
}
  
  export default Home;