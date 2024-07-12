

export const Text = ({order, title, paragraph, color}) => {
    return (
        <div className={`${order} text-center p-10 flex flex-col justify-center gap-6 tablet:p-6 desktop:text-left desktop:p-10`}>
            <h2 className="font-fraunces text-[2rem] font-bold tablet:text-[1.25rem] lg:text-[2.5rem] desktop:text-[3rem]">{title}</h2>
            <p className="font-barlow text-darkGrayishBlue text-[1.125rem] leading-[1.875rem]tablet:text-[0.8em] tablet:leading-[1.5rem] lg:text-[20px]">{paragraph}</p>
            <div className="relative">
            <button className="uppercase font-fraunces font-bold lg:text-[1.125rem]">Leer más</button>
            <div className={`w-[105px] h-[4px] ${color} rounded-full absolute bottom-[5px] left-[50%] translate-x-[-50%] -z-10 bg-opacity-25 desktop:left-[60px]`}></div>
            </div>
        </div>
    )
}