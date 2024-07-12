import imgMobile from '../assets/images/mobile/image-header.jpg'
import imgDesktop from '../assets/images/desktop/image-header.jpg'

export const Main = () => {
    return (
        <section>
            <picture>
                <source media="(max-width: 639px)" srcSet={imgMobile} />
                <source media="(min-width: 640px)" srcSet={imgDesktop} />
                <img  src={imgMobile} alt="background header" />
            </picture>
            <p className='absolute top-[140px] left-[50%] translate-x-[-50%] font-fraunces  uppercase tracking-[0.2em] text-center font-bold text-4xl  text-white sm:text-5xl sm:tracking-[0.3em] sm:top-[200px]'>¡Exploremos el mundo juntos!</p>
        </section>
    )
}