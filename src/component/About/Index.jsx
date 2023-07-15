import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            Welcome to our e-commerce website! We are a trusted online
            destination dedicated to providing you with a seamless shopping
            experience. With a wide range of high-quality products, competitive
            prices, and exceptional customer service, we strive to meet your
            every need. Our platform is designed to make your shopping journey
            effortless, offering user-friendly navigation and secure payment
            options. Whether you're searching for trendy fashion, cutting-edge
            electronics, or unique home decor, we've got you covered. Shop with
            confidence and discover the convenience of online shopping at its
            best.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            From a shared passion for innovation, we embarked on a
            mission to redefine online shopping. Starting in a humble garage,
            our team envisioned an extraordinary experience driven by
            technology. Through meticulous curation, we assembled a diverse
            range of quality products, fostering a vibrant community of engaged
            shoppers. Today, we are proud to be a trusted global destination,
            committed to exceeding expectations and shaping the future of
            e-commerce. Join us on our journey and discover a new way to shop.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
