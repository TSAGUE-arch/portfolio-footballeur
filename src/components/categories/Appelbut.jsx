import React from 'react'

const Appelbut = () => {
  return (
    <div id='Appelbut'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mt-3'> Appel de but</h1>
       <div className=' flex-wrap md:flex  mt-3 p-0.5 gap-15'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/appelbut.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Appel 1⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                L'appel de but, c'est son arme secrète.
                 Timing parfait, course tranchante ⚽⚽⚽⚽⚽⚽
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/appelbut1.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Appel 2⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère. il prend toujours le dessus sur sa défense.
                 Une seconde d'inattention et il est déjà derrière la ligne.
            </p>
          </div>
        </div>
      </div>
       <div className=' flex-wrap md:flex  mt-3 p-0.5 gap-15'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/appelbut2.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Appel 3⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                L'appel de but, c'est son arme secrète.
                 Timing parfait, course tranchante ⚽⚽⚽⚽⚽⚽
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/appelbut3.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Appel 4⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère. il prend toujours le dessus sur sa défense.
                 Une seconde d'inattention et il est déjà derrière la ligne.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appelbut
