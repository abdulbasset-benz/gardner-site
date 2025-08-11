import garden from "../assets/garden2.jpg";

const CallToAction = () => {
  return (
    <section className="rounded-2xl overflow-hidden max-w-5xl mx-auto my-12 relative">
      {/* Background image */}
      <img 
        src={garden} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content overlay */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 py-12 sm:px-12 sm:py-16 z-10 ">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
          We're ready to start.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/80">
          Transform your home to zen garden
        </p>
        <button className="mt-6 bg-lime-400 hover:bg-lime-500 text-emerald-900 font-medium px-5 py-2 rounded-lg transition-colors text-sm sm:text-base">
          Make an Appointment
        </button>
      </div>
    </section>
  );
};

export default CallToAction;