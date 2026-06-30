export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F2D52] to-[#183E6D] text-white px-6">

        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          <div>

            <p className="text-[#C8A34D] font-semibold mb-4">
              Your Gateway to Global Education
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Premium Academic
              Consultancy Services
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Helping students achieve their dreams of studying abroad
              with expert guidance, admissions support, and career solutions.
            </p>


            <div className="mt-8 flex gap-4">

              <button className="bg-[#C8A34D] text-black px-8 py-3 rounded-full font-semibold">
                Book Free Consultation
              </button>


              <button className="border border-white px-8 py-3 rounded-full">
                WhatsApp Us
              </button>

            </div>

          </div>


          <div className="flex justify-center">

            <div className="h-80 w-80 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center">

              <h2 className="text-6xl font-bold text-[#C8A34D]">
                PACS
              </h2>

            </div>

          </div>


        </div>

      </section>



      {/* Stats */}

      <section className="py-16 bg-[#F5F7FA]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">


          {[
            ["1000+","Students Guided"],
            ["20+","Countries"],
            ["95%","Success Rate"],
            ["24/7","Support"]
          ].map((item)=>(

            <div
            key={item[1]}
            className="bg-white shadow-lg rounded-2xl p-8 text-center">

              <h3 className="text-4xl font-bold text-[#0F2D52]">
                {item[0]}
              </h3>

              <p className="mt-2">
                {item[1]}
              </p>

            </div>

          ))}


        </div>

      </section>



    </main>
  )
}
