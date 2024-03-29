const JoinForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch('http://localhost:3000/volunteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Formulario enviado \n Nos pondremos en contacto contigo pronto \n Muchas gracias!');
        e.target.reset();
      });
  };
  return (
    //form to join a volunteer
    <form className="text-center flex flex-col m-5 gap-6 lg:text-2xl" id="VolunteersForm" onSubmit={handleSubmit}>
      <h1 className="text-[#019F6C] text-xl lg:text-5xl">RELLENA ESTE FORMULARIO SI ESTÁS INTERESADO EN PARTICIPAR EN ALGÚN VOLUNTARIADO</h1>
      <h2 className="text-[#019F6C] text-xl lg:text-5xl">Nosotros te contactaremos</h2>
      <label htmlFor="name">Nombre y apellidos:</label>
      <input type="text" id="name" name="name" className="border-[#49A87C] border-2 sm:mx-[20%]" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" className="border-[#49A87C] border-2 sm:mx-[20%]" required />
      <label htmlFor="phone">Teléfono:</label>
      <input type="tel" id="phone" name="phone" className="border-[#49A87C] border-2 sm:mx-[20%]" required />
      <label htmlFor="volunteering">Indica el voluntariado en el que te gustaría participar:</label>
      <input type="text" name="volunteering" id="volunteering" className="border-[#49A87C] border-2 sm:mx-[20%]" required />
      <label htmlFor="comment">Comentario:</label>
      <textarea id="comment" name="comment" className="border-[#49A87C] border-2 resize-none sm:mx-[20%]" required />
      <input type="submit" value="Enviar" className='rounded-md bg-[#b9e2b6] w-fit p-1 self-center cursor-pointer hover:scale-110 duration-100' />
    </form>
  );
};

export default JoinForm;