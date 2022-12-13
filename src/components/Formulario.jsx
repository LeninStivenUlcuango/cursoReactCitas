import { useState } from "react";

function Formulario() {

  const [nombre, setnombre] = useState('hook');

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento formulario</h1>
      <p className="text-lg mt-5 text-center mb-8">
        Agrega pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos </span>
      </p>
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota"
           className="block text-gray-700 uppercase font-bold">
            Nombre mascota</label>
          <input type="text"
            id="mascota"
            placeholder="Nombre mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario"
           className="block text-gray-700 uppercase font-bold">
            Nombre propietario</label>
          <input type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email"
           className="block text-gray-700 uppercase font-bold">
            Email</label>
          <input type="email"
            id="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fAlta"
           className="block text-gray-700 uppercase font-bold">
            Fecha de alta</label>
          <input type="date"
            id="fAlta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas"
           className="block text-gray-700 uppercase font-bold">
            Sintomas</label>
            <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" id="sintomas" cols="30" rows="10"
            placeholder="Describa los sintomas"/>
        </div>
        <input type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer" 
        value='Agregar paciente'/>
      </form>
    </div>
  )
}

export default Formulario;