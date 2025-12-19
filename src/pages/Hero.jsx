export default function Hero() {
    return (
        <section
            className="relative text-white py-32 px-10 bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url(/hero-salon.webp)" }}
        >
            <div className="bg-black/70  rounded-lg p-10 max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl text-shadow-2xs md:text-6xl font-bold mb-4">
                    Where Confidence Meets Hair Art
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Your beauty, My passion. Rebonding, coloring, curls & more!
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-white text-gray-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    Contact me
                </a>
            </div>
            
        </section>
    );
}
