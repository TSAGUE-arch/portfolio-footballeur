import React from 'react'

const Rapport = () => {
  return (
    <div id='Rapport'>
      <h1 className='text-2xl md:text-4xl font-bold text-center mt-6'> Mon rapport de match</h1>
       <div className=' flex-wrap md:flex  mt-3 md:gap-15 p-0.5'>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/herovid.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Mon rapport apres le match⚽⚽⚽⚽⚽⚽ </h2>
            <p>
                ⚽⚽⚽Le terrain ne ment jamais ⚽⚽⚽
            </p>
          </div>
        </div>
         <div className="card bg-base-100 w-90 shadow-sm flex-1  mb-3">
            <figure>
                <video src="/video/recap.mp4" controls className='h-[70vh] w-[100%] object-cover' ></video>
            </figure>
          <div className="card-body">
            <h2 className="card-title">Attaquant prometteur ⚽⚽⚽⚽⚽⚽</h2>
            <p>Sang-froid, précision, caractère. il prend toujours le dessus sur sa défense.
                 Une seconde d'inattention et il est déjà derrière la ligne.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rapport
