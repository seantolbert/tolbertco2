const Cert = ({ cert }) => {
  const { title, certURL, org, orgLogo } = cert;

  return (
    <article
      className="p-5 md:p-2 w-full md:w-1/2 lg:w-1/3 filter-item"
      id="certification"

    >
      <div className="rounded-2xl p-2 flex items-center relative border-b border-r border-gray-600 transition duration-500 hover:shadow-neu hover:scale-[1.01]">
        <span className="text-xs uppercase p-2 text-slate-500 absolute top-0 right-0">
          cert
        </span>
        <div className="w-1/2">
          <img src={certURL} alt={title} className="w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-1 justify-evenly pl-5 w-1/2">
          <h3 className="text-sm font-bold uppercase">{title}</h3>
          <div className="flex items-center">
            <div className="w-10">
              <img src={orgLogo} alt="organization" className="w-full" />
            </div>
            <p>{org}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cert;
