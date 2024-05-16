import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>¿Quiénes somos?
Somos empresa líder en argentina, dedicada a la nutrición, salud y bienestar. Ofrecemos la línea más completa de suplementos deportivos, con más de 100 formulaciones, que tienen como objetivo poder acompañar todos los niveles de entrenamiento de los diferentes consumidores, sin importar la actividad deportiva, el tipo de entrenamiento, la intensidad o la frecuencia con la que lo realizan.

Nuestra misión es apoyar el crecimiento de los atletas en todas las etapas de su vida deportiva.

¿Cómo lo hacemos?
Contamos con una planta equipada con tecnología de última generación, laboratorios de calidad y un equipo altamente capacitado, trabajando bajo las regulaciones de la Administración Nacional de Medicamentos, Alimentos y Tecnología Médica (ANMAT) para garantizar la seguridad de los productos al consumidor. Además, colaboramos estrechamente con instituciones deportivas, nutricionistas y clubes, fortaleciendo nuestro compromiso con la calidad y seguridad de nuestros productos.

Valores que guían nuestro trabajo:
CALIDAD:
Mantenemos acuerdos estratégicos con proveedores de largo plazo para poder contar con los últimos desarrollos en materias primas del mundo. Trabajamos con ARLA FOODS INGREDIENTS, líder mundial en proteínas certificadas por ISO9001 y FDA. Además, cada uno de nuestro producto tiene un código de seguimiento único para garantizar trazabilidad.

INNOVACIÓN:
Nos esforzamos por la mejora continua en formulación, procesos y comunicación, manteniéndonos a la vanguardia de la categoría.

DESARROLLO:
Potenciamos nuestros equipos, reinvertimos y constantemente buscamos la excelencia en el desarrollo de nuevos productos.

 

En SUPLEMENGOD, hacemos las cosas de una sola manera: de la manera correcta.

¡Únete a nosotros para alcanzar tus metas! #PERPARATEPARASUPERARTE"</p>
    </div>
  )
}

export default Nosotros