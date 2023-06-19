import React from 'react'

export default function Main2Card() {
  return (
    <>
     <section className="flex flex-wrap xl:flex-nowrap  justify-center flex-col md:flex-row gap-3 px-4 sm:px-0">
          <div className={"card1 w-full  relative before:bg-cover before:w-full before:h-full before:absolute before:bg-card1  before:hover:grayscale-0 cursor-text"}>
            <div className="areadesc p-8">
              <h1 className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow " style={{lineHeight:"6rem"}}>New <span className="text-2xl">{new Date().getFullYear()}</span> <br /> <span className="bg-dark px-2 mr-2 rounded">Pro</span>duct!</h1>
              <div className="mt-6">
                <p className="text-sm drop-shadow my-1 text-dark p-3 bg-white w-full sm:w-[370px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum quisquam exercitationem sed animi consequuntur adipisci sint ipsam numquam dolorum a eveniet, </p>
                <p className="text-sm drop-shadow my-1 sm:mx-16 text-dark p-3 bg-white w-full sm:w-[370px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum quisquam exercitationem sed animi consequuntur adipisci sint ipsam numquam dolorum a eveniet, </p>
              </div>
            </div>
          </div>

          <div className="card2 w-full bg-cover relative before:bg-cover before:w-full before:h-full before:absolute before:bg-card2  before:hover:grayscale-0 cursor-text">
            <div className="areadesc p-8">
              <h1 className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow" style={{lineHeight:"6rem"}}
              >Service <span className="text-sm sm:text-xl">Computer</span> <br /> Lap<span className="bg-dark px-2 ml-2 rounded">top</span>!</h1>
              <div className="mt-6">
                <p className="text-sm drop-shadow my-1 sm:mx-16 text-dark p-3 bg-white w-full sm:w-[370px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum quisquam exercitationem sed animi consequuntur adipisci sint ipsam numquam dolorum a eveniet, </p>
                <p className="text-sm drop-shadow my-1  text-dark p-3 bg-white w-full sm:w-[370px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum quisquam exercitationem sed animi consequuntur adipisci sint ipsam numquam dolorum a eveniet, </p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
