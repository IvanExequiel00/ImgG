import { surpriseMePrompts } from "@/constants";

export function getRamdomPrompt(promt:string){
    const randomIndex = Math.floor(Math.random() *
  surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];


if (randomPrompt === promt) return getRamdomPrompt(promt)
  
return randomPrompt;
}