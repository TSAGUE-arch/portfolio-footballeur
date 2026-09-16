import React from 'react'

const Offensif = () => {
  return (
    <div id='Offensif'>
       <h1 className='text-2xl md:text-3xl font-bold text-center mt-3'> Autres jeux offensifs</h1>
       <div className=' flex-wrap md:flex  mt-3  gap-15 p-0.5'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/dribble.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Mes dribbles⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                L'appel de but, c'est son arme secrète.
                 Timing parfait, course tranchante ⚽⚽⚽⚽⚽⚽
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/frappes.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Frappe lointaine⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère et butteur execptionnel. 
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Offensif
