
import portfolioData from "../data/portfolio.json";

const Header = () => {
  const { name, title, tagline, description, image } = portfolioData.header;

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
              {title}
            </h2>
            <p className="text-xl mb-6 text-foreground/80">{tagline}</p>
            <p className="mb-8 text-muted-foreground max-w-lg">
              {description}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/20">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
