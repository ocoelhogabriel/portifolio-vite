export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contato</h1>
      <ul className="space-y-2 text-lg md:text-xl text-center">
        <li><b>Telefone:</b> (19) 99735-7450</li>
        <li><b>Email:</b> <a href="mailto:gabriel.coelho.hgc@outlook.com.br" className="text-primary underline">gabriel.coelho.hgc@outlook.com.br</a></li>
        <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/ocoelhogabriel" target="_blank" rel="noopener noreferrer" className="text-primary underline">linkedin.com/in/ocoelhogabriel</a></li>
        <li><b>GitHub:</b> <a href="https://github.com/ocoelhogabriel" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com/ocoelhogabriel</a></li>
      </ul>
    </section>
  );
}
