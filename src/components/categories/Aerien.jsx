import React from 'react'

const Aerien = () => {
  return (
    <div id='Aerien'>
       <h1 className='text-2xl md:text-3xl font-bold text-center mt-3'> Jeu aerien</h1>
       <div className=' flex-wrap md:flex  mt-3 p-0.5  md:gap-15'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/jeutete.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">mon but sur un centre ⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                 Timing parfait, course tranchante ⚽⚽⚽⚽⚽⚽
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/opportunite.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title"> mon but sur une opportunite ⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère. il prend toujours le dessus sur sa défense.
                 Une seconde d'inattention et il est déjà derrière la ligne.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aerien
