
import './depoiments.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';


function Depoiments() {

  const [perview, setPerview] = useState<number>(1);

  function handlePerview(value: number) {
    setPerview(value);
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      handlePerview(2);
    }
    if (window.innerWidth >= 1024) {
      handlePerview(3);
    }

    window.addEventListener('resize', () => handlePerview(2));

    return () => {
      window.removeEventListener('resize', () => handlePerview);
    }
  }, []);

  return (
    <section className="depoiments__container">
      <div className="depoiments">
        <h3>Confira os depoimentos de nossos alunos!</h3>
        <div className="swiper">
          <Swiper
            slidesPerView={perview}
            spaceBetween={30}
            loop={true}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
             }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <h4>Julia Senna</h4>
              <p><span>"</span>Ocurso é incrivel, ótima didática dos professores.<span>"</span></p>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Julia Senna</h4>
              <p><span>"</span>Ocurso é incrivel, ótima didática dos professores.<span>"</span></p>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Julia Senna</h4>
              <p><span>"</span>Ocurso é incrivel, ótima didática dos professores.<span>"</span></p>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Julia Senna</h4>
              <p><span>"</span>Ocurso é incrivel, ótima didática dos professores.<span>"</span></p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export { Depoiments }
