import Card from "../card"

const RenderCars = ({data, title}:any) => {
    if(data?.length > 0){
       return data.map((post:any) => <Card  key={post._id} {...post}/>)}
        return(
          <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  
       )
   }

   export default RenderCars;