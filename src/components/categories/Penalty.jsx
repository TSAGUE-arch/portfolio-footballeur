import React from 'react'

const Penalty = () => {
  return (
    <div id='Penalty'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mt-3'> Mes Penaltys</h1>
       <div className=' flex-wrap md:flex  mt-3  gap-15 p-0.5'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/penalty1.mp4" controls className='h-[60vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Penalty 1⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                Un penalty est une tentative de tir depuis le point de penalty,
                il  affronte seul le gardien — précision, sang-froid et timing décident
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/penalty2.mp4" controls className='h-[60vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Penalty 2⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère. Face au gardien,
                 il ne tremble pas. Ses tirs au but sont une démonstration de calme et de maîtrise 
                 — placement étudié, élan contrôlé, 
                filet qui tremble. Un spécialiste qui transforme la pression en performance.
            </p>
          </div>
        </div>
      </div>
       <div className=' flex-wrap md:flex  mt-3 p-0.5 gap-15'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/penalty3.mp4" controls className='h-[60vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Penalty 3⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                Un penalty est une tentative de tir depuis le point de penalty,
                il  affronte seul le gardien — précision, sang-froid et timing décident
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">md:
            <figure>
                <video src="/video/penalty4.mp4" controls className='h-[60vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Penalty 4⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère,
                 il ne tremble pas. Ses tirs au but sont une démonstration de calme et de maîtrise  
                filet qui tremble. Un spécialiste qui transforme la pression en performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Penalty
