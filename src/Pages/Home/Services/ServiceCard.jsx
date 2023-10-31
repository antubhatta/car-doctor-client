

const ServiceCard = ({service}) => {
    const {title,img,price}=service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-[208px]" />
  </figure>
  <div className="card-body ">
    <h2 className="text-2xl font-bold text-[#444]">{title}</h2>
    <p className="text-xl text-orange-500">Price: ${price}</p>
    
  </div>
</div>
        </div>
    );
};

export default ServiceCard;