const Test = ({ testItem }) => {
  return (
    <div className="p-5 md:p-2 w-full md:w-1/2 lg:w-1/3 filter-item">
      <h1>{testItem.title}</h1>
    </div>
  );
};

export default Test;
