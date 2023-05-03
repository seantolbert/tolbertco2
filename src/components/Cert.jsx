const Cert = ({ cert }) => {
  const { title, certURL, org, orgLogo, type } = cert;

  return (
    <article className="mb-10 p-5 rounded-lg flex items-center relative">
      <span className="text-xs uppercase p-2 text-slate-500 absolute top-0 right-0">{type}</span>
      <div className="w-1/2">
        <img src={certURL} alt={title} className="w-full" />
      </div>
      <div className="flex flex-col justify-evenly pl-5">
        <h3 className="text-2xl">{title}</h3>
        <div className="flex items-center">
          <div className="w-10">
            <img src={orgLogo} alt="organization" classsName="w-full" />
          </div>
          <p>{org}</p>
        </div>
      </div>
    </article>
  );
};

export default Cert;
