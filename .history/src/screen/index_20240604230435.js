import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Faq from '../component/faq'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import heroImg from '../img/image 6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import SpecialityCard from '../component/specialityCard';
import FeedbackCard from '../component/feedbackCard';
import ServicesCard from '../component/servicesCard';
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { HiOutlineTruck } from "react-icons/hi2";
import { TbGrave2, TbTruck } from "react-icons/tb";
import { FaHandcuffs } from "react-icons/fa6";
import { RiParentLine } from "react-icons/ri";
import { GiScales } from "react-icons/gi";

function Index() {
    useEffect(() => {
        document.title = "Marcelo Tomé | Advogado";
        window.scrollTo(0, 0);
        AOS.init();
    });

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
        className='slide-items-clients'
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500 }}
        navigation
        pagination={{ clickable: true }}
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
                speciality="Família e Direitos:"
                description="Ações de alimentos, cobrança de pensão atrasada, guarda e visitas em casos familiares."
            />
        </SwiperSlide>
        <SwiperSlide>
            <SpecialityCard
                speciality="Consumidor bancário:"
                description="Contratações indevidas, indenizações, golpes e fraudes financeiras envolvendo bancos."
            />
        </SwiperSlide>

        <SwiperSlide>
            <SpecialityCard
                speciality="Assessoria jurídica:"
                description="Consultoria empresarial, orientação em contratos e gestão de riscos trabalhistas e tributários."
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
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <FeedbackCard
                                        name="Pessoa"
                                        job="Trabalho"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
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
                        <p>Você é empresário ou empreendedor e não tem suporte jurídico para seu negócio? Então você está correndo um grande perigo, existem diversos riscos trabalhista, tributário, contratuais etc., que podem se tornar um passivo judicial se não forem bem orientados.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow data-aos="flip-up" data-aos-offset="150" className='services-cards-holder'>
                    <MDBRow className='services-cards' >
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<IoBriefcaseOutline />
                                service="Contratações indevidas"
                                description="Já deu uma olhada no seu extrato bancário hoje? Notou desconto de taxas, serviços, cobranças ou empréstimos que você não contratou? Entre em contato agora e descubra como eu posso te ajudar."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<BiBuildings />
                                service="Indenizações"
                                description="Foi vítima de fraude ou golpe bancário? Você pode ser indenizado pelo banco, caso este tenha cometido alguma falha na segurança do serviço oferecido. Entre em contato agora para saber mais."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<TbTruck />
                                service="Golpes e fraudes"
                                description="Foi vítima de fraude ou golpe bancário? Você pode ser indenizado pelo banco, caso este tenha cometido alguma falha na segurança do serviço oferecido. Entre em contato agora para saber mais."
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='services-cards' >
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<TbGrave2 />
                                service="Consultoria empresarial"
                                description="Empresário ou empreendedor, a consultoria jurídica é fundamental para proteger seu negócio e garantir que você esteja dentro da legalidade em todas as suas operações."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<FaHandcuffs />
                                service="Orientação em contratos"
                                description="Evite problemas futuros, tenha sempre um advogado para revisar seus contratos e garantir que todas as cláusulas estejam claras e justas para todas as partes envolvidas."
                            />
                        </MDBCol>
                        <MDBCol md={4}>
                            <ServicesCard
                                icon=<RiParentLine />
                                service="Gestão de riscos trabalhistas e tributários"
                                description="A gestão de riscos é essencial para evitar passivos judiciais que podem comprometer a saúde financeira da sua empresa. Entre em contato e saiba como posso ajudar."
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
            <MDBContainer id='contato' fluid className='contact-container'>
                <MDBContainer data-aos="flip-up" data-aos-offset="150">
                    <MDBRow>
                        <MDBCol md={5} className='contact-text'>
                            <h2>Entre em contato para uma consulta jurídica personalizada.</h2>
                            <p>Estou aqui para ajudar você a resolver suas questões jurídicas com eficiência e agilidade.</p>
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
                            <p>Em breve, mais informações e artigos sobre as áreas de atuação jurídica e novidades do setor.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <Faq />
            <Footer />
        </div >
    );
}

export default Index;
