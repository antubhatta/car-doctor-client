import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('/Services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mb-24">
           <div className="text-center space-y-2">
           <h3 className="text-3xl text-center font-bold text-orange-600">Our Services</h3>
            <h2 className="text-4xl font-bold text-center">Our Services Area</h2>
            <p className="w-[717px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
           </div>
           <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {
                services.map(services=> <ServiceCard key={services.id} service={services}></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;