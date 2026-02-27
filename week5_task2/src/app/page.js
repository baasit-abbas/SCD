import Item from "@/Components/Item";

export default function Home() {
  const data = [
    {
      id:1,
      img:'img1.jpg',
      titel:'Programming for everything',
      date:'May 21, 2021',
      desc:'Semester 25'
    },
    {
      id:2,
      img:'img2.jpg',
      titel:'Networking for Introverts',
      date:'May 30, 2022',
      desc:'Semester 25'
    },
    {
      id:3,
      img:'img3.jpg',
      titel:'Networking for Extroverts',
      date:'April 10, 2022',
      desc:'My street'
    }
    
]
  return (
    <div className="h-screen bg-gray-300 py-15">
        <div className="w-[60%] mx-auto flex flex-col gap-4">
          {data.map((e) => {
            return (
              <Item key={e.id} id={e.id} img={e.img} title={e.titel} date={e.date} desc={e.desc} />
            )
          })}
        </div>
      </div>
  );
}
