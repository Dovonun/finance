export default function BudgetCategory({ name, budget, onChange, id, remove }) {
  return (
    <div>
      <button onClick={() => remove(id)}>x</button>
      <input
        type="text"
        placeholder="Budget Name"
        value={name}
        onChange={(e) => onChange(e.target.value, id, "Name")}
      />
      <input
        type="Number"
        placeholder="Ammount"
        value={budget}
        onChange={(e) => onChange(e.target.value, id, "Budget")}
      />
    </div>
  );
}
