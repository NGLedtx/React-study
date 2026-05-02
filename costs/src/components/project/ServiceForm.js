import { useState } from "react";
import SubmitButton from "../form/SubmitButton";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Nome do serviço"
        placeholder="Digite o nome do serviço..."
        name="name"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        placeholder="Digite o custo do serviço..."
        name="cost"
        handleOnChange={handleChange}
      />
      <TextArea
        type="textarea"
        text="Descrição do serviço"
        placeholder="Descreva o serviço..."
        name="description"
        handleOnChange={handleChange}
      />
      <div className="flex justify-center mt-5">
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default ServiceForm;
