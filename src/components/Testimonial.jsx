

export const Testimonial = ({img, testimonial, name, position}) => {
    return (
        <div id="testimonial" className="text-center flex flex-col items-center p-4 mb-16">
            <img className="rounded-full w-[70px] h-[70px]" src={img} alt="photo" />
            <p className="text-veryDarkGrayishBlue font-barlow max-w-[350px] my-8">{testimonial}</p>
            <h3 className="font-fraunces text-veryDarkDesaturatedBlue font-bold text-[18px]">{name}</h3>
            <p className="text-grayishBlue font-barlow text-[14px]">{position}</p>
        </div>
    )
}