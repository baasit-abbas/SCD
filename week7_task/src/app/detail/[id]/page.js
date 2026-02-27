import React from "react";

const page = async ({params}) => {
    params = await params
    const data = await fetch(`https://dummyjson.com/recipes/${params.id}`)
    const res = await data.json()
  return (
    <div className=" min-h-screen bg-white text-black">
      <header className="w-full h-60">
        <img className="w-full h-full" src={res.image} alt="" />
      </header>
      <div className="flex justify-between px-10 py-4">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl">{res.name}</h1>
          <div>
            <h2 className="font-bold text-md">Ingrediants</h2>
            <ul className="px-10 text-sm">
            {res.ingredients.map((item) => {
                return <li key= {item} className="list-disc">{item}</li>
            })}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-md">Intrunctions</h2>
            <ul className="px-10 text-sm">
              {res.instructions.map((item) => {
                return <li key={item} className="list-disc">{item}</li>
            })}
            </ul>
          </div>
        </div>
        <div>
            <button className="px-4 py-2 bg-green-600 cursor-pointer text-white rounded-md">Go back</button>
        </div>
      </div>
    </div>
  );
};

export default page;
