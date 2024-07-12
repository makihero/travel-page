import { Testimonial } from './Testimonial'
import emilyPhoto from '../assets/images/image-emily.jpg'
import thomasPhoto from '../assets/images/image-thomas.jpg'
import jenniePhoto from '../assets/images/image-jennie.jpg'

export const TestimonialContainer = () => {
    return (
        <section className='pt-10'>
            
                <h2 className='uppercase mb-4 font-fraunces text-grayishBlue font-bold text-center'>Testimonios de clientes</h2>

            <div className='lg:grid lg:grid-cols-3'>    
                <Testimonial 
                img={emilyPhoto}
                testimonial="Vacaciones perfectas en Europa. Nos encantaron los detalles personalizados del itinerario y las recomendaciones locales que nos hicieron sentir como en casa."
                name="Emily R."
                position="Ejecutiva"
                />
                <Testimonial 
                img={thomasPhoto}
                testimonial="Decidí reservar una escapada de fin de semana y no podría estar más contenta con mi elección. Todo fue impecable, desde la reserva hasta el alojamiento."
                name="Ruben C."
                position="Desarrollador Frontend"
                />
                <Testimonial 
                img={jenniePhoto}
                testimonial="Mi experiencia fue increíble. El equipo se encargó de todo, desde los vuelos hasta las actividades, y pude relajarme y disfrutar de mi luna de miel en las Maldivas sin preocupaciones. "
                name="Jennie F."
                position="Arquitecta"
                />
            </div>
        </section>
    )
}