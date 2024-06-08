"use client";

import { getRamdomPrompt } from "@/utils";
import { useState } from "react";
import Formfield from "../components/formfield";
import preview from "@/assets/preview.png";
import Image from "next/image";
import Loader from "../components/loader";

const CreatePost = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);


  const generateImg = ()=>{

  }
  const handleSubmite = {};
  const handleChange = () => {};

  const handleSupriseMe = {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          Crear Imagenes:
        </p>
      </div>
      <form className="" onSubmit={handleSubmite}>
        <div className="flex flex-col gap-5">
          <Formfield
            labelName="your name"
            type="text"
            name="name"
            placeholder="jhondoe"
            value={form.name}
            handleChange={handleChange}
          />

          <Formfield
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSupresieMe
            handleSupriseMe={handleSupriseMe}
          />
          <div
            className="relative bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 justify-center items-center"
          >
            {form.photo ? (
              <Image
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
                height={1000}
                width={1000}
              />
            ) : (
              <Image
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
                width={1000}
                height={1000}
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgb(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button 
          type="button"
          onClick={generateImg}
          className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>

        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">Comparte tus imagenes generadas con la gente</p>
          <button type="submit" className="mt-3 text-white bg-[#6469ff] font-medium rounded-md 
          text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            {loading ? "sharing..." : "share with the comuniti"}</button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
