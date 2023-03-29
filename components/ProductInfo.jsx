function ProductInfo({ title, description }) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg">{description}</p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        Rp,20000
      </div>
    </div>
  );
}

export default ProductInfo;
