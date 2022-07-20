import boxlogo from '../assets/logofooter.png'


export default function Steps() {
  return (

    // <!-- Section Hero -->
    <div className="bg-orange-100 py-14">
      <div className="flex m-5 mb-12 justify-center " >
        <img src={boxlogo} alt="boxlogo" />
        <div className="max-w-xl fontRaleway text-base" >
          <p className="m-3" >Provee regalos originales a través de experiencias y momentos inolvidables. Todas nuestras cajas regalo están repletas de emoción y quien la recibe podrá elegir la experiencia que desee.</p>
          <p className="ml-3" >¿Y por qué experiencias? <br /></p>
          <p className="m-3" > Porque los momentos de felicidad son los que recordaremos por siempre.</p>
          <p><strong>Boxbonny. La felicidad de regalar.</strong></p>
        </div>
      </div>

      <h1 className="mt-8 text-center text-5xl text-[#FF8E72] font-bold">¿Como funciona?</h1>

      {/* <!-- Box --> */}
      <div className="md:flex md:justify-center md:space-x-8 md:px-14">

        {/* <!-- box-1 --> */}
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
            <div className="mt-4 text-[#FF8E72] text-center">
              <h1 className="text-xl font-bold">Paso 1</h1>
              <p className="mt-4 text-[#393E41]">Seleccioná el pack que quieras y su presentación con packaging físico o digital.</p>
              {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500  transition duration-200">MORE</button> */}
            </div>
          </div>
        </div>

        {/* <!-- box-2 --> */}
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform  transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
            <div className="mt-4 text-[#FF8E72] text-center">
              <h1 className="text-xl font-bold">Paso 2</h1>
              <p className="mt-4 text-[#393E41]">Elegí una experiencia dentro de una amplia variedad de opciones.</p>
              {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500  transition duration-200">MORE</button> */}
            </div>
          </div>
        </div>

        {/* <!-- box-3 --> */}
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform  transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />

            <div className="mt-4 text-[#FF8E72] text-center">
              <h1 className="text-xl font-bold">Paso 3</h1>
              <p className="mt-4 text-[#393E41]">Disfrutá la experiencia presentando la tarjeta física o código E-Pack.</p>
              {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500 transition duration-200">MORE</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center" >
        <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500 transition duration-200	 ">ELEGÍ TU EXPERIENCIA</button>
      </div>
    </div>

  )
}