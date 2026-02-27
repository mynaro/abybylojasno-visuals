import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="gutter-padding py-20">
      <div className="relative rounded-lg overflow-hidden bg-card border border-border p-8 md:p-16 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="section-title text-foreground mb-4">
            Získejte přístup ke všem pořadům
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Pravda, kterou jinde neuslyšíte. Připojte se k tisícům předplatitelů, 
            kteří chtějí vidět svět bez filtrů.
          </p>
          <Link
            to="#"
            className="inline-block bg-primary text-primary-foreground font-sora font-bold px-8 py-4 rounded-lg text-lg cta-hover"
          >
            Chci předplatné
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
