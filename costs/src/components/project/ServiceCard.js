import { BsFillTrashFill } from "react-icons/bs";
function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <div className="flex border rounded-md justify-between items-center p-5 bg-white shadow-md mb-5">
      <div className="flex flex-col gap-2">
        <label>
          <b>Nome:</b> {name}
        </label>
        <label>
          <b>Orçamento:</b> R$ {cost},00
        </label>
        <label>
          <b>Descrição:</b> {description}
        </label>
      </div>
      <div>
        <button onClick={remove} className="text-red-600">
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}
export default ServiceCard;
