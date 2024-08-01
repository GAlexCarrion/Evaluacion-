import React from 'react';

interface Ejercicio1Props {
  mensaje: string;
}

const Ejercicio1: React.FC<Ejercicio1Props> = ({ mensaje }) => {
  return (
    <div>
      <h1>Bienvenidos</h1>
    </div>
  );
};

export default Ejercicio1;
