
import { Image } from "./Image"
import oneImageMobile from '../assets/images/mobile/image-gallery-mntn.jpg'
import oneImageDesktop from '../assets/images/desktop/image-gallery-mntn.jpg'
import twoImageMobile from '../assets/images/mobile/image-gallery-ruts.jpg'
import twoImageDesktop from '../assets/images/desktop/image-gallery-ruts.jpg'
import threeImageMobile from '../assets/images/mobile/image-gallery-air.jpg'
import threeImageDesktop from '../assets/images/desktop/image-gallery-air.jpg'
import fourImageMobile from '../assets/images/mobile/image-gallery-rusia.jpg'
import fourImageDesktop from '../assets/images/desktop/image-gallery-rusia.jpg'

export const Gallery = () => {
    return (
        <div className="grid grid-cols-2 sm:flex">
            <Image
            imgMobile={oneImageMobile}
            imgDesktop={oneImageDesktop}
            />
            <Image
            imgMobile={twoImageMobile}
            imgDesktop={twoImageDesktop}
            />
            <Image
            imgMobile={threeImageMobile}
            imgDesktop={threeImageDesktop}
            />
            <Image
            imgMobile={fourImageMobile}
            imgDesktop={fourImageDesktop}
            />
        </div>
    )
}