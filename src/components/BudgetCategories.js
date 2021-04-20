import BudgetCategory from "./BudgetCategory.js";

function BudgetCategories({ budgetCategories, onChange, remove }) {
  return (
    <div>
      {budgetCategories.map(({ Name, Budget }, i) => {
        return (
          <BudgetCategory
            name={Name}
            budget={Budget}
            key={i}
            onChange={onChange}
            id={i}
            remove={remove}
          />
        );
      })}
    </div>
  );
}

export default BudgetCategories;
