function Contact() {
  return (
    <div className="p-8 max-w-5xl mx-auto flex-grow">
      <h1 className="text-2xl font-bold mb-8 text-center">Contato</h1>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* INFO */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Fale conosco</h2>

          <p className="mb-2">
            📧 Email:{" "}
            <a
              href="mailto:contato@costs.com"
              className="text-blue-600 hover:underline"
            >
              contato@costs.com
            </a>
          </p>

          <p className="mb-2">
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/company/costs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/company/costs
            </a>
          </p>

          <p className="text-gray-600 mt-4">
            Respondemos em até 24 horas úteis.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Mensagem</label>
              <textarea
                placeholder="Digite sua mensagem"
                className="w-full p-2 border border-gray-300 rounded-md h-28 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0b1120] text-white py-2 px-4 rounded-md hover:bg-[#1e293b] transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
export default Contact;