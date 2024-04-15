const AboutBanner = () => {
  return (
    <>

      <section
        className="relative bg-[url(https://th.bing.com/th/id/R.04222d812c87a183ef8f2c99ceaa961d?rik=ocFpIFg6iex%2f9Q&riu=http%3a%2f%2fhome.messagexchange.com%2fwp-content%2fuploads%2f2016%2f03%2fbanner-opaquebg-colladium.jpg&ehk=2XUXbKLD38wSA95PHgfDnidfR%2bWvNhXBiJYCqUtEeIo%3d&risl=&pid=ImgRaw&r=0)] h-96 bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Redefining Online Education

              <strong className="block font-extrabold text-primary"> NextGen Courses. </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Browse through and get access to latest and greatest of technologies and be ready to embrace the future with us!
            </p>
          </div>
          <div className="hidden sm:block md:block lg:ml-40 lg:relative lg:block">
            <img
              src="https://www.pngplay.com/wp-content/uploads/1/Men-In-Suit-Royalty-Free-PNG-Photo.png"
              alt="banner"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold text-center mt-10">About Us</h2>
      <div className="bg-white mt-5 p-4">
          We are a team of professional industry experts who are passionate about teaching and sharing our knowledge with the world. We have been in the industry for over 10 years and have worked with some of the biggest companies in the world. Our goal is to provide you with the best online courses that will help you learn new skills and advance your career. We are committed to helping you succeed and achieve your goals. We believe that everyone should have access to quality education, and we are here to make that happen. We are constantly improving ourselves and hope you will support us too. Join us today and start learning with us!
      </div>

      <h2 className="text-2xl font-bold text-center mt-10"> Our Motto</h2>
      <div className="bg-white mt-5 p-4">
          Our motto is to provide quality education to everyone, regardless of their background or location. We believe that education is the key to success and that everyone should have the opportunity to learn and grow. We are committed to providing you with the best online courses that will help you achieve your goals and advance your career. We are passionate about teaching and sharing our knowledge with the world, and we are here to help you succeed. Join us today and start learning with us!
      </div>
       
      <h2 className="text-2xl font-bold text-center mt-10"> Our Partners</h2> 
      <div className="bg-white mt-5 p-4 sm:flex block">
         We have partnered with top universities of world to provide flexible and affordable online courses that will help you learn new skills and advance your career. Our courses are designed by industry experts and cover a wide range of topics, from business and technology to health and wellness. We are committed to providing you with the best online learning experience and are here to help you succeed.
        <div>
          <img src="/image.png" className="w-[2000px] h-[300px]"/>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-10">Our Story </h2>
      <div className="bg-white mt-5 p-4">
          NextGen Courses was founded by Subham Banerjee in 2024. Subham has got many years of experience in the industry and has worked with some of the biggest companies in the world. He is passionate about teaching and sharing his knowledge with the world. He believes that everyone should have access to quality education and is committed to making that happen. Subham started NextGen Courses with the goal of providing the best online courses that will help you learn new skills and advance your career. He is dedicated to helping you succeed and achieve your goals.
      </div>
    </>
  )
}

export default AboutBanner
