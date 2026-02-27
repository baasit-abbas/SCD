import React from 'react'
import Link from 'next/link'

const Item = (probs) => {
  return (
    <div className="item w-80 h-40 rounded-md bg-white flex flex-col items-center py-3">
          <img className="w-25 h-25 rounded-full " src={probs.image} alt="" />
          <Link href={"/detail/"+probs.id}><p>{probs.name}</p></Link>
    </div>
  )
}

export default Item
