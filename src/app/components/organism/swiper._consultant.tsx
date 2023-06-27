'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useEffect, useRef } from 'react';
import Consultans from '../moleculs/consultants';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useDispatch } from 'react-redux';
import { getDataKaryawan } from '@/app/utility/redux/feature/consultant_data';
import GlobalState from '@/app/utility/global_state/admin';

export default function SwiperConsultans() {
    let swiperRef = useRef();
    const dispatch = useDispatch<any>()
    const {loading_karyawan,response_karyawan, reject_karyawan} = GlobalState()


    useEffect(() => {
      dispatch(getDataKaryawan())
    },[dispatch])

     return (
    <>
    <h1 className="text-center text-4xl uppercase font-bold text-dark">Anggota Perusahaan</h1>
          <p className="text-center font-light py-1">Konsultan Produk dan Sales Promosi </p>
      
          <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={200}
           slidesPerView={1}
           
           pagination={{
            clickable: true,
          }}
           scrollbar={{ draggable: true}}
           onSwiper={(swiper) => (swiperRef as any).current = swiper}
           onSlideChange={() => ''}
           className="mySwiper"
          >
           
           {response_karyawan && response_karyawan.map((m : any,i : any) => {
           
            return <section key={i}>
            <SwiperSlide key={i}>
                <Consultans props={{
                  swiperRef,
                  img_consult : m.image,
                  name_consult : m.nama,
                  position : `${m.posisi} Consultant`,
                  deskripsi : m.deskripsi,
                  instagram : m.ig
                  }}/>
            </SwiperSlide>
                  {/* <SwiperSlide>
                      <Consultans props={{
                        swiperRef,
                        img_consult:'before:bg-erlangga ',
                        name_consult : "Erlangga Hidayatullah",
                        position : "Gadget Consultant Problem"
                      }}
                        />
                  </SwiperSlide>
                        <SwiperSlide>
                            <Consultans props={{
                              swiperRef,
                              img_consult:'before:bg-haszrul',
                              name_consult : "Haszrul Montana",
                              position : "Samsung Consultant"
                            }}
                              />
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <Consultans props={{
                              swiperRef,
                              img_consult:'before:bg-dede',
                              name_consult : "Dede Adipraja",
                              position : "Realme Consultant"
                            }}
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Consultans props={{
                              swiperRef,
                              img_consult:'before:bg-rini',
                              name_consult : "Rini Andrianty",
                              position : "Vivo Consultant"

                            }}
                              />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Consultans props={{
                              swiperRef,
                              img_consult:'before:bg-dawok',
                              name_consult : "Rizki Dawok",
                              position : "Vivo Consultant"
                            }}
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Consultans props={{
                              swiperRef,
                              img_consult:'before:bg-santi before:bg-left',
                              name_consult : "Santi Haryanti",
                              position : "FrontLiner & PC/Laptop Consultant"

                            }}
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Consultans props={{
                              swiperRef,
                              img_consult:'before:bg-sinta ',
                              name_consult : "Sinta Haryanti",
                              position : "FrontLiner & PC/Laptop Consultant"
                            }}
                              />
                        </SwiperSlide> */}
                        </section>

            })}
                        
          </Swiper>
          
    </>
  )
}
