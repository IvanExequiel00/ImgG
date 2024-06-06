"use client";

import { getRamdomPrompt } from "@/utils";
import { useState } from "react";
import Formfield from "../components/formfield";
import preview from "@/assets/preview.png"
import Image from "next/image";

const CreatePost = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

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
          <div className="relative bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 justify-center items-center">
            {form.photo ? (
              <Image
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain" 
              height={1000}
              width={1000}
              />
            ): (
              <Image
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
              width={1000}
              height={1000}
            />
            )}
           </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
