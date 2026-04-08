function ProjectForm() {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Nome do projeto:</label>
                <input type="text" id="name" placeholder="Digite o nome do projeto" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="budget">Orçamento total:</label>
                <input type="number" id="budget" placeholder="Digite o orçamento total" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="category_id">Selecione a categoria:</label>
                <select id="category_id" name="category_id">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
        </form>
    )
}
export default ProjectForm;