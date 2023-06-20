'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css"
import Image from "next/image";

interface propsSwiperSlides {
  props: {
    urlImage: string
  }
}

export const SwiperImage = ({ props }: propsSwiperSlides) => {
  const { urlImage } = props
  return <>
    <Image alt="galleryme" width={600} height={600} src={urlImage} />
  </>
}


export default function SwipperGallery() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246089/sinarasih/galeri/7CC0C2C8-4122-43B8-8B2F-43C4C9F21487_uyjehy.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246087/sinarasih/galeri/5710C918-B474-417A-84FA-FDACE7807683_yhxwdn.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246068/sinarasih/galeri/309D64CC-8C46-42B4-99AC-49CE786BEF15_nfjmp7.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246077/sinarasih/galeri/041FED1B-A516-4B6B-83B3-FD0C27D6F5D1_pqvluj.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246001/sinarasih/galeri/264FCBEB-7AA5-44B6-94A6-5122F1B1EE28_xgqncl.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687245980/sinarasih/galeri/0A7714D4-5DD1-4670-AF44-32C9633146D0_wwtusl.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246018/sinarasih/galeri/FCBAA672-8CFC-4D98-B99F-18FC5F6DC172_llagl5.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246009/sinarasih/galeri/FCB3F3AB-F7AE-4E49-A771-5518BCD4B236_gpfl2c.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246919/sinarasih/galeri/577B8D5B-C4F2-4844-ADF2-525F2240166F_zbfxse.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246915/sinarasih/galeri/3BA34BE2-303A-4184-BCDF-C5B927C4AD05_upyeks.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: " https://res.cloudinary.com/djsizjaee/image/upload/v1687246917/sinarasih/galeri/79E14102-2F9D-4171-A114-25679A775BC8_bp0ljy.jpg" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperImage props={{ urlImage: "https://res.cloudinary.com/djsizjaee/image/upload/v1687246915/sinarasih/galeri/FD8D24A3-140B-4674-ACF7-24374CE7F443_zzvmqa.jpg" }} />
        </SwiperSlide>

      </Swiper>

    </>
  )
}
