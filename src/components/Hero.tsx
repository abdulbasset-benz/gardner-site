import Logo from "../assets/logo.svg";
const Hero = () => {
  return (
    <div className=" bg-amber-300 flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center text-white mt-40">
        <img src={Logo} alt="" className="size-20"/>
        <h1 className="text-4xl font-bold text-primary font-inter mt-4">Des espaces verts qui respirent la vie</h1>
        <p>Confiez-nous votre jardin : nous allions savoir-faire, respect de la nature et services personnalisés pour un résultat harmonieux et durable.</p>
    </div>
  )
}

export default Hero