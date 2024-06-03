"use client"

import { getRamdomPrompt } from "@/utils";
import { useState } from "react";
import Formfield from "../components/formfield";

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

  const handleSupriseMe = {}

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
            placeholder="jhon"
            value={form.name}
            handleChange={handleChange}
          />

          <Formfield
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="jhon"
            value={form.prompt}
            handleChange={handleChange}
            isSupresieMe
            handleSupriseMe={handleSupriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
