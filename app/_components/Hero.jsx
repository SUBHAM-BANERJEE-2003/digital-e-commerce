import { AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineGlobal, AiOutlineTeam, AiOutlineUnorderedList } from "react-icons/ai"

const Hero = () => {
    const perks = [
        {
            title: "Unlimited Access",
            description:
                "Get unlimited access to 1000+ courses, hands-on projects and certificates.",
            icon: <AiOutlineUnorderedList className="text-4xl text-blue-600" />,
            },
            {
            title: "Expert Instruction",
            description:
                "Learn from industry experts who are passionate about teaching.",
            icon: <AiOutlineTeam className="text-4xl text-blue-600" />,
            },
            {
            title: "Learn Anywhere",
            description:
                "Switch between your computer, tablet or mobile device.",
            icon: <AiOutlineGlobal className="text-4xl text-blue-600" />,
            },
            {
            title: "Earn Certificates",
            description:
                "Earn industry-recognized certificates and badges.",
            icon: <AiOutlineCheckCircle className="text-4xl text-blue-600" />,
        }
    ]
  return (
<section className="text-black">
  <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Learn, Code and Build with Us.

        <span className="sm:block"> Buy the plus subscription. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Get Unlimited access to 1000+ world-class courses, hands-on projects and certificates - all available in one subscription!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-700 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/login"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/courses"
        >
          Learn More <AiOutlineArrowRight className="inline-block"/>
        </a>
      </div>
  <div className="mx-auto max-w-screen-xl px-4 mt-20">
        <h2 className="text-3xl font-bold text-center text-green-500">Why Choose Us?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600">Our platform is designed to meet your learning needs. With our subscription, you get access to unlimited courses, hands-on projects and certificates.</p>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-white rounded-full shadow-lg">
                        {perk.icon}
                    </div>
                    <h3 className="text-xl font-bold text-green-500">
                      {perk.title}
                    </h3>
                    <p className="text-center text-gray-600">{perk.description}</p>
                </div>
            ))}
        </div>        
    </div>
    </div>
    </div>
</section>
  )
            }
export default Hero
