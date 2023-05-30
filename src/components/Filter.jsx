const Filter = ({ handleFilterChange, filterKey, filters }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center md:flex-row md:ml-5 md:gap-10 my-10 relative w-full">
      {filters?.map((filter, key) => (
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
