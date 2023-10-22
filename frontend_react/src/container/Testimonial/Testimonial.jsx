import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client
      .fetch(query)
      .then((data) => {
        console.log(data); // Log the entire response
        setTestimonials(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    client.fetch(brandsQuery).then((data) => {
      console.log(data); // Log the data to the console
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex]

  return (
    <>
      {testimonials.length > 0 && test && test.imageurl && (
        <>
          <div className='app_testimonial-item app_flex'>
            <img
              src={urlFor(test.imageurl.asset._ref).toString()}
              alt='testimonials'
            />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);