import { filters } from "../data/filterCategories";

const Filter = ({ handleFilterChange, filterKey }) => {
  return (
    <div className="flex flex-col gap-5 items-center md:flex-row md:ml-5 md:gap-10 mb-10 relative py-3 w-full">
      {filters.map((filter, key) => (
        <div
          key={key}
          onClick={handleFilterChange(filter.category)}
          className={`uppercase text-md tracking-[5px] transition-colors duration-300 cursor-pointer ${
            filterKey === filter.category ? "text-slate-100" : "text-slate-500"
          } `}
        >
          {filter.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;
