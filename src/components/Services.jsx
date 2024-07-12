import { Image } from './Image'
import { Text } from './Text'

import oneImageMobile from '../assets/images/mobile/image-transform.jpg'
import oneImageDesktop from '../assets/images/desktop/image-transform.jpg'
import twoImageMobile from '../assets/images/mobile/image-stand-out.jpg'
import twoImageDesktop from '../assets/images/desktop/image-stand-out.jpg'
import threeImageMobile from '../assets/images/mobile/image-stand-in.jpg'
import threeImageDesktop from '../assets/images/desktop/image-stand-in.jpg'

export const Services = () => {
    return (
        <section id='about' className='tablet:grid tablet:grid-cols-2'>
            <Image 
            order='order-2'
            imgMobile={oneImageMobile}
            imgDesktop={oneImageDesktop}
            />
            <Text 
            order='order-1'
            title={'Paquetes Todo Incluido'}
            paragraph={'Descubre la comodidad y el lujo con nuestros paquetes todo incluido. Disfruta de vuelos, alojamiento, comidas y actividades sin preocuparte por nada más.'}
            color={'bg-yellow'}
            />
            <Image
            order='order-3'
            imgMobile={twoImageMobile}
            imgDesktop={twoImageDesktop}
            />
            <Text 
            order='order-4'
            title={'Escapadas de Fin de Semana'}
            paragraph={'Aprovecha al máximo tu tiempo libre con nuestras escapadas de fin de semana. Ofrecemos una selección de destinos cercanos ideales para desconectar y recargar energías.'}
            color={'bg-softRed'}
            />
            <Image
            order='order-6'
            imgMobile={threeImageMobile}
            imgDesktop={threeImageDesktop}
            />
            <Text 
            order='order-5'
            title={'Viajes Personalizados'}
            paragraph={'Crea el viaje de tus sueños con nuestros servicios personalizados. Diseñamos itinerarios a medida basados en tus intereses y preferencias.'}
            color={'bg-darkDesaturatedCyan'}
            />

        </section>
    )
}