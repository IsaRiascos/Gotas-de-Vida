import React, { useState } from 'react';

const Cube3D = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const faces = [
    {
      title: "Perfil",
      content: "El agua es esencial para la vida, pero enfrenta desafíos como la escasez y la contaminación.",
      color: "bg-blue-500"
    },
    {
      content: "¿Sabías que...?",
      content: "Estos problemas afectan tanto a los ecosistemas acuáticos como a las poblaciones humanas que dependen de este recurso esencial. Siendo este impactado por diversas actividades humanas como los son las actividades industriales, el uso excesivo de pesticidas y fertilizanntes la gestion inadecuada de residuos y los procesos agricolas por lo tanto, cada dia que pasa, mas fuentes de agua se encuentran contaminadas.",
      color: "bg-blue-400"
    },
    {
      title: "Impacto Humano",
      content: "Las actividades humanas como la contaminación y el uso excesivo de recursos están afectando la calidad del agua.",
      color: "bg-blue-600"
    },
    {
      title: "Problemas",
      content: <>Algunos de los principales problemas medioambientales relacionados con el agua incluyen:<br />
      1. Contaminación de agua <br />
      2. Escasez de agua <br />
      3. Acidificación de los océanos
    </> 
    
    },
    {
      title: "Soluciones",
      content: "Tecnologías para el ahorro y reutilización del agua, y educación ambiental.",
      color: "bg-blue-700"
    },
    {
      title: "Actúa",
      content: "Cada acción cuenta: conserva el agua, reduce el desperdicio y promueve la educación ambiental.",
      color: "bg-blue-800"
    }
  ];

  const handleClick = () => {
    setRotateY(rotateY + 90);
  };

  const containerStyle = {
    perspective: '1000px',
    width: '600px',
    height: '600px',
    margin: '50px auto'
  };

  const cubeStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 1s'
  };

  const faceStyle = (transform) => ({
    position: 'absolute',
    width: '600px',
    height: '600px',
    transform,
    backfaceVisibility: 'hidden',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    boxSizing: 'border-box'
  });

  return (
    <div style={containerStyle}>
      <div style={cubeStyle} onClick={handleClick}>
        {/* Front */}
        <div style={faceStyle('translateZ(300px)')} className={`${faces[0].color} p-6`}>
          <h2 className="text-3xl font-bold text-black mb-4">{faces[0].title}</h2>
          <p className="text-black text-xl">{faces[0].content}</p>
        </div>
        
        {/* Back */}
        <div style={faceStyle('translateZ(-300px) rotateY(180deg)')} className={`${faces[1].color} p-6`}>
          <h2 className="text-3xl font-bold text-black mb-4">{faces[1].title}</h2>
          <p className="text-black text-xl">{faces[1].content}</p>
        </div>
        
        {/* Right */}
        <div style={faceStyle('translateX(300px) rotateY(90deg)')} className={`${faces[2].color} p-6`}>
          <h2 className="text-3xl font-bold text-black mb-4">{faces[2].title}</h2>
          <p className="text-black text-xl">{faces[2].content}</p>
        </div>
        
        {/* Left */}
        <div style={faceStyle('translateX(-300px) rotateY(-90deg)')} className={`${faces[3].color} p-6`}>
          <h2 className="text-3xl font-bold text-black mb-4">{faces[3].title}</h2>
          <p className="text-black text-xl">{faces[3].content}</p>
        </div>
        
        {/* Top */}
        <div style={faceStyle('translateY(-300px) rotateX(90deg)')} className={`${faces[4].color} p-6`}>
          <h2 className="text-3xl font-bold text-black mb-4">{faces[4].title}</h2>
          <p className="text-black text-xl">{faces[4].content}</p>
        </div>
        
        {/* Bottom */}
        <div style={faceStyle('translateY(300px) rotateX(-90deg)')} className={`${faces[5].color} p-6`}>
          <h2 className="text-3xl font-bold text-black mb-4">{faces[5].title}</h2>
          <p className="text-black text-xl">{faces[5].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;
