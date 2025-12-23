export default function Home() {
  const tableData = [
    { position: 4, nombre: "erikagonzalez@habi.co", cierres: 2 },
    { position: 5, nombre: "natalyramirez@habi.co", cierres: 2 },
    { position: 6, nombre: "lizarojas@habi.co", cierres: 2 },
    { position: 7, nombre: "yessicasanchez@habi.co", cierres: 1 },
    { position: 8, nombre: "paolatenorio@habi.co", cierres: 1 },
    { position: 9, nombre: "nancycadavid@habi.co", cierres: 1 },
    { position: 10, nombre: "leidygomez@habi.co", cierres: 1 },
    { position: 11, nombre: "khaterinecanon@habi.co", cierres: 1 },
    { position: 12, nombre: "juanvanegas@habi.co", cierres: 1 },
    { position: 13, nombre: "juanrincon@habi.co", cierres: 1 },
    { position: 14, nombre: "joserios@habi.co", cierres: 1 },
    { position: 15, nombre: "jeferssonromero@habi.co", cierres: 1 },
    { position: 16, nombre: "ingriddiaz@habi.co", cierres: 1 },
    { position: 17, nombre: "geffreyramos@habi.co", cierres: 1 },
    { position: 18, nombre: "danithmartinez@habi.co", cierres: 1 },
    { position: 19, nombre: "alexandramurillo@habi.co", cierres: 1 },
    { position: 20, nombre: "alexanderhernandez@habi.co", cierres: 1 },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#e8f4f4" }}>
      
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#7b5cd6]" />
      <div className="absolute top-32 right-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-[#7b5cd6]" />
      <div className="absolute top-20 right-40 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#7b5cd6]" />
      <div className="absolute bottom-40 left-20 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#7b5cd6]" />
      <div className="absolute bottom-20 right-32 w-0 h-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#7b5cd6]" />
      
      {/* Splatter shapes */}
      <div className="absolute top-16 left-1/4 w-32 h-24 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] rotate-12" style={{ backgroundColor: "#7ed6c2" }} />
      <div className="absolute top-40 right-10 w-28 h-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" style={{ backgroundColor: "#7ed6c2" }} />
      <div className="absolute bottom-32 left-16 w-20 h-16 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] -rotate-12" style={{ backgroundColor: "#7ed6c2" }} />
      <div className="absolute bottom-16 right-1/4 w-36 h-28 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] rotate-6" style={{ backgroundColor: "#7b5cd6", opacity: 0.8 }} />
      
      {/* Wavy lines */}
      <svg className="absolute top-48 left-8 w-16 h-16 text-[#7b5cd6]" viewBox="0 0 50 50">
        <path d="M5 25 Q 15 10, 25 25 T 45 25" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      <svg className="absolute bottom-48 right-8 w-20 h-20 text-[#7b5cd6]" viewBox="0 0 50 50">
        <path d="M5 25 Q 15 10, 25 25 T 45 25" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      
      {/* Dots pattern */}
      <div className="absolute top-28 left-1/3 grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7ed6c2" }} />
        ))}
      </div>
      <div className="absolute bottom-24 left-1/2 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7b5cd6" }} />
        ))}
      </div>
      
      {/* Small decorative elements */}
      <div className="absolute top-60 left-12 w-8 h-2" style={{ backgroundColor: "#7b5cd6" }} />
      <div className="absolute top-64 left-10 w-8 h-2" style={{ backgroundColor: "#7b5cd6" }} />
      <div className="absolute top-[272px] left-8 w-8 h-2" style={{ backgroundColor: "#7b5cd6" }} />

      {/* Content */}
      <div className="relative z-10 p-7 min-h-screen flex items-center justify-center">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.3fr] gap-10 max-w-7xl w-full items-stretch px-8 py-4">
          
          {/* Left Grid - Image */}
          <div className="relative w-full flex items-start self-start">
            <div 
              className="rounded-lg overflow-hidden w-full"
              style={{ 
                backgroundColor: "#fff",
                border: "4px solid #7b5cd6",
                boxShadow: "8px 8px 0 #7ed6c2"
              }}
            >
              {/* Container for image composition */}
              <div className="relative w-full">
                {/* Base image */}
                <img 
                  src="/Gemini_Generated_Image_tzk8mjtzk8mjtzk8.png" 
                  alt="Top BNPL" 
                  className="w-full h-auto block"
                  style={{ maxHeight: "92vh", objectFit: "contain" }}
                />
                
                {/* Puesto 4 - Centro (erikagonzalez) */}
                <div
                  className="absolute"
                  style={{
                    top: "5%",
                    left: "35%",
                    width: "28%"
                  }}
                >
                  <img 
                    src="/top1.png" 
                    alt="Puesto 4 - erikagonzalez"
                    className="relative w-full h-auto"
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                      aspectRatio: "3/4"
                    }}
                  />
                  <span 
                    className="absolute inline-flex items-center justify-center rounded-full font-bold text-white"
                    style={{
                      backgroundColor: "#cd7f32",
                      width: "clamp(24px, 6vw, 32px)",
                      height: "clamp(24px, 6vw, 32px)",
                      fontSize: "clamp(11px, 2.5vw, 14px)",
                      top: "-4%",
                      right: "-4%",
                      border: "2px solid #fff"
                    }}
                  >
                    4
                  </span>
                </div>
                
                {/* Puesto 5 - Derecha (natalyramirez) */}
                <div
                  className="absolute"
                  style={{
                    top: "5%",
                    right: "5%",
                    width: "28%"
                  }}
                >
                  <img 
                    src="/3.png" 
                    alt="Puesto 5 - natalyramirez"
                    className="relative w-full h-auto"
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                      aspectRatio: "3/4"
                    }}
                  />
                  <span 
                    className="absolute inline-flex items-center justify-center rounded-full font-bold text-white"
                    style={{
                      backgroundColor: "#cd7f32",
                      width: "clamp(24px, 6vw, 32px)",
                      height: "clamp(24px, 6vw, 32px)",
                      fontSize: "clamp(11px, 2.5vw, 14px)",
                      top: "-4%",
                      right: "-4%",
                      border: "2px solid #fff"
                    }}
                  >
                    5
                  </span>
                </div>
                
                {/* Puesto 6 - Arriba izquierda (lizarojas) */}
                <div
                  className="absolute"
                  style={{
                    top: "15%",
                    left: "8%",
                    width: "22%"
                  }}
                >
                  <img 
                    src="/image (1).png" 
                    alt="Puesto 6 - lizarojas"
                    className="relative w-full h-auto"
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                      aspectRatio: "120/170"
                    }}
                  />
                  <span 
                    className="absolute inline-flex items-center justify-center rounded-full font-bold text-white"
                    style={{
                      backgroundColor: "#cd7f32",
                      width: "clamp(24px, 6vw, 32px)",
                      height: "clamp(24px, 6vw, 32px)",
                      fontSize: "clamp(11px, 2.5vw, 14px)",
                      top: "-4%",
                      right: "-4%",
                      border: "2px solid #fff"
                    }}
                  >
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - Table and Button */}
          <div className="flex flex-col gap-6 self-start" style={{ width: "100%" }}>
            {/* Top Grid - Table */}
            <div 
              className="rounded-lg p-6 flex flex-col overflow-hidden"
              style={{ 
                backgroundColor: "#fff",
                border: "4px solid #7ed6c2",
                boxShadow: "8px 8px 0 #7b5cd6",
                maxHeight: "92vh"
              }}
            >
              <h2 
                className="text-2xl font-bold mb-6 tracking-wide"
                style={{ color: "#7b5cd6" }}
              >
                RANKING
              </h2>
              
              <div className="overflow-y-auto overflow-x-auto" style={{ maxHeight: "calc(92vh - 180px)" }}>
                <table className="w-full">
                  <thead style={{ position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10 }}>
                    <tr style={{ borderBottom: "3px solid #7b5cd6" }}>
                      <th className="py-3 px-3 text-left text-sm font-bold" style={{ color: "#7b5cd6" }}>
                        TOP
                      </th>
                      <th className="py-3 px-3 text-left text-sm font-bold" style={{ color: "#7b5cd6" }}>
                        NOMBRE
                      </th>
                      <th className="py-3 px-3 text-center text-sm font-bold" style={{ color: "#7b5cd6" }}>
                        CIERRES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr 
                        key={`${row.position}-${row.nombre}`}
                        style={{ 
                          backgroundColor: index % 2 === 0 ? "#f5fafa" : "#fff",
                          borderBottom: "2px solid #e0f0f0"
                        }}
                      >
                        <td className="py-4 px-3">
                          <span 
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-white"
                            style={{ 
                              backgroundColor: "#7b5cd6"
                            }}
                          >
                            {row.position}
                          </span>
                        </td>
                        <td className="py-4 px-3" style={{ color: "#333" }}>
                          {row.nombre}
                        </td>
                        <td className="py-4 px-3 text-center">
                          <span 
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg"
                            style={{ 
                              backgroundColor: "#7ed6c2",
                              color: "#fff"
                            }}
                          >
                            {row.cierres}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Disclaimer */}
              <div 
                className="mt-4 pt-4 text-sm text-center"
                style={{ 
                  borderTop: "2px dashed #7ed6c2",
                  color: "#7b5cd6"
                }}
              >
                * Estos cierres corresponden a quienes utilizaron la landing
              </div>
        </div>

            {/* Bottom Grid - Button */}
            <div 
              className="rounded-lg p-6 flex flex-col items-center justify-center gap-4"
              style={{ 
                backgroundColor: "#fff",
                border: "4px solid #7ed6c2",
                boxShadow: "8px 8px 0 #7b5cd6",
                minHeight: "150px"
              }}
            >
              <div className="text-center mb-2">
                <p 
                  className="text-base font-medium mb-1"
                  style={{ color: "#7b5cd6" }}
                >
                  ¿Tienes un negocio que no aparece en el ranking?
                </p>
                <p 
                  className="text-sm"
                  style={{ color: "#333" }}
                >
                  Sube la evidencia y lo agregaremos
                </p>
              </div>
              <a
                href="https://forms.gle/TjnQ9nEadPZ3YLxE9"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-block px-10 py-5 font-bold text-xl tracking-wider transition-transform hover:scale-105"
                style={{
                  backgroundColor: "#7b5cd6",
                  color: "#fff",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "6px 6px 0 #7ed6c2",
                  border: "3px solid #fff"
                }}
              >
                📤 SUBIR EVIDENCIA
              </a>
            </div>
          </div>
        </div>
        </div>
      </main>
  );
}
