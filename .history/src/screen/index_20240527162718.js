import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Children, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import heroImg from '../img/image 6.png'
import Logo from '../logo/Tome - Logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import SpecialityCard from '../component/specialityCard';
import FeedbackCard from '../component/feedbackCard';
import ServicesCard from '../component/servicesCard';
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiBuildings, BiLeftArrow } from "react-icons/bi";
import { HiOutlineTruck } from "react-icons/hi2";
import { TbGrave2, TbTruck } from "react-icons/tb";
import { FaHandcuffs } from "react-icons/fa6";
import { RiParentLine } from "react-icons/ri";
import { GiScales } from "react-icons/gi";

function Index() {
    useEffect(() => {
        document.title = "Marcelo Tomé | Advogado"
        window.scrollTo(0, 0);
        AOS.init();
    })

    return (
        <div>
            <Navbar />
            <MDBContainer data-aos="fade-down" data-aos-offset="150" fluid className='hero-container'>
                <MDBRow>
                    <MDBCol md={6} className='hero-left'>
                        <MDBRow>
                            <h4>
                                Oi, aqui é Marcelo Tomé, sou advogado e agradeço seu contato!
                            </h4>
                        </MDBRow>
                        <MDBRow className='hero-left-description'>
                            <MDBCol md={9} >
                                <p>
                                    assim que possível eu retorno para falarmos. Um forte abraço!
                                </p>
                            </MDBCol>
                            <MDBBtn className='hero-contact-button' style={{ backgroundColor: '#25425290', boxShadow: 'none' }} >Entrar em contato</MDBBtn>
                            <MDBBtn style={{ backgroundColor: '#0000', boxShadow: 'none' }}>Conhecer Mais</MDBBtn>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={6} className='hero-right'>
                        <MDBRow className='hero-glass'>
                            <MDBCol className='hero-glass-icon'>
                                <GiScales />
                            </MDBCol>
                            <MDBCol>
                                <p>Trabalhando em prol da</p>
                                <h3>JUSTIÇA</h3>
                            </MDBCol>
                        </MDBRow>
                        <img src={heroImg}></img>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer id='especialidades' className='speciality-container'>
                <MDBContainer data-aos="flip-up" data-aos-offset="150">
                    <MDBRow>
                        <MDBCol md={3} className='speciality-text' >
                            <h4>Especialidade</h4>
                            <p>Nesta seção, apresento minhas especialidades jurídicas, oferecendo uma visão detalhada das áreas em que atuo como advogado. Convido você a conhecer mais sobre meus serviços e como posso ajudá-lo.</p>
                        </MDBCol>
                        <MDBCol md={9}>
                            <Swiper
                                // Instala os módulos que você vai utilizar
                                className='slide-items-clients'
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 2500 }} // Autoplay e delay em milissegundos
                                navigation // Habilita navegação (setas)
                                pagination={{ clickable: true }} // Habilita paginação e torna-a clicável
                                spaceBetween={50}
                                onSwiper={(swiper) => console.log(swiper)}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 50,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <SpecialityCard
                                        speciality="Família:"
                                        description="Ações de alimentos, Cobrança de Pensão Atrasada, guarda e visitas."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SpecialityCard
                                        speciality="Consumidor bancário:"
                                        description="Contratações indevidas, indenizações, golpes e fraldes"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <SpecialityCard
                                        speciality="Assessoria jurídica para empresas:"
                                        description="Seu direito, simples, rápido e sob medida."
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer id='depoimentos' fluid className='feedback-container'>
                <MDBContainer data-aos="flip-up" data-aos-offset="150">
                    <h4>Depoimentos</h4>
                    <MDBRow>
                        <MDBCol md={12} >
                            <Swiper
                                // Instala os módulos que você vai utilizar
                                className='slide-items-clients'
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 2500 }} // Autoplay e delay em milissegundos
                                navigation // Habilita navegação (setas)
                                spaceBetween={50}
                                pagination={{ clickable: true }} // Habilita paginação e torna-a clicável
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 50,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 25,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 25,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable."
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer id='atuacao' className='work-areas-container'>
                <MDBRow data-aos="flip-up" data-aos-offset="150" className='work-areas-title'>
                    <MDBCol>
                        <h4>Áreas de Atuação</h4>
                    </MDBCol>
                    <MDBCol style={{ borderLeft: '1px solid #6B8BA4' }}>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir randomised workds which don't look even slightly believable.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow data-aos="flip-up" data-aos-offset="150" className='services-cards-holder'>
                    <MDBRow className='services-cards' >
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<IoBriefcaseOutline />
                                service="Lorem Ipsum"
                                description="There are many variations of passages of Lorem Ipsum available, but majority going to use a passage."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<BiBuildings />
                                service="Lorem Ipsum"
                                description="There are many variations of passages of Lorem Ipsum available, but majority going to use a passage."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<TbTruck />
                                service="Lorem Ipsum"
                                description="There are many variations of passages of Lorem Ipsum available, but majority going to use a passage."
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='services-cards' >
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<TbGrave2 />
                                service="Lorem Ipsum"
                                description="There are many variations of passages of Lorem Ipsum available, but majority going to use a passage."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<FaHandcuffs />
                                service="Lorem Ipsum"
                                description="There are many variations of passages of Lorem Ipsum available, but majority going to use a passage."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<RiParentLine />
                                service="Lorem Ipsum"
                                description="There are many variations of passages of Lorem Ipsum available, but majority going to use a passage."
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
            <MDBContainer id='contato' fluid className='contact-container'>
                <MDBContainer data-aos="flip-up" data-aos-offset="150">
                    <MDBRow>
                        <MDBCol md={5} className='contact-text'>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <p>There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected oir  which don't look even slightly believable.</p>
                        </MDBCol>
                        <MDBCol md={1}>

                        </MDBCol>
                        <MDBCol md={6} className='contact-buttons'>
                            <h4>Entre em Contato!</h4>
                            <p>Nos ligue ou mande uma mensagem!</p> 
                            <MDBBtn className='contact-tel'>Telefone - 00 0000 0000</MDBBtn>
                            <MDBBtn className='contact-wpp'>Whatsapp - 00 00000 0000</MDBBtn>
                            <p>Ou se preferir</p>
                            <MDBBtn className='contact-mail'>E-mail - e-mail@exemplo.com</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer className='blog-container'>
                <MDBContainer data-aos="flip-up" data-aos-offset="150">
                    <h4>Blog</h4>
                    <MDBRow>
                        <MDBCol>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <Footer />
        </div >
    )
}

export default Index