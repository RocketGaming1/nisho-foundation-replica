const TipEditors = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-6">TIP THE EDITORS</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Do you have a news tip, an idea, or something else you want to share? We would love to hear from you!
        </p>
        <p className="text-muted-foreground mb-2">Send us an email:</p>
        <a
          href="mailto:nishofoundation@gmail.com"
          className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
        >
          nishofoundation@gmail.com
        </a>
      </div>
    </section>
  );
};

export default TipEditors;
