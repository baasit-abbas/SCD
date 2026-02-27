import Item from "@/Component/Item";
import Image from "next/image";

export default async function Home() {
  const data = await fetch('https://dummyjson.com/recipes')
  const res = await data.json()
  console.log(res.recipes);
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" text-black p-4 grid grid-cols-3 gap-6">
          {res.recipes.map((item) => {
              return <Item key={item.id} id={item.id} name = {item.name} image = {item.image}/>
          })}
      </div>
    </div>
  );
}
