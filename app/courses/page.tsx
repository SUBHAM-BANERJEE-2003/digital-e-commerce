import ProductCard from "../_components/ProductCard"

const page = () => {
  return (
    <div>
    <h1 className="flex items-center justify-center text-4xl font-semibold mt-5">Browse Courses</h1>
    <div className="mt-12 grid lg:grid-cols-3 gap-4">
      <ProductCard 
            title={"FullStack Development with NextJS"} 
            imgpath={"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"}
            price={"$14.99"}
            />
         <ProductCard 
            title={"Backend development with Spring Boot and Java"} 
            imgpath={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg"}
            price={"$20.99"}
            />
            <ProductCard 
            title={"Data Science and Machine Learning with Python"} 
            imgpath={"https://unicatlearning.com/wp-content/uploads/2019/10/data-science-with-python-300x179.png"}
            price={"$19.99"}
            />
            <ProductCard
            title={"Frontend Development with React"}
            imgpath={"https://www.ecured.cu/images/thumb/a/a6/React-logo.png/1200px-React-logo.png"}
            price={"$9.99"}
            />
            <ProductCard
            title={"FullStack Development with Angular"}
            imgpath={"https://th.bing.com/th/id/OIP.liYbsPpCk8BCLhNs9R9Z4wHaE8?rs=1&pid=ImgDetMain"}
            price={"$20.99"}
            />
            <ProductCard
            title={"Mobile Development with React Native"}
            imgpath={"https://th.bing.com/th/id/OIP.cD9AtjXi8m6O8ORBuFib5QAAAA?rs=1&pid=ImgDetMain"}
            price={"$14.99"}
            />
            <ProductCard
            title={"Mobile Development with Flutter"}
            imgpath={"https://i2.wp.com/softwareengineeringdaily.com/wp-content/uploads/2018/10/flutter.jpg?fit=1570,1500&ssl=1"}
            price={"$14.99"}
            />
            <ProductCard
            title={"Cybersecurity and Ethical Hacking"}
            imgpath={"https://th.bing.com/th/id/OIP.N9b3tKfxmVabOnIacgO6fAHaE8?rs=1&pid=ImgDetMain"}
            price={"$14.99"}
            />
    </div>
    </div>
  )
}

export default page
