import {Icon} from '@/components/ui/icons/Icon'

import footer_background_main from "@/assets/img/Footer/footer_background_main.png"
import footer_background_mobile from "@/assets/img/Footer/footer_background_mobile.png"
import logo_VK from "@/assets/img/Footer/vk_logo.png"


function Footer() {

    return (
        <div className="relative w-full h-auto">
            <div className="relative w-full hidden md:block overflow-hidden rounded-t-[40px] h-[300px]">
                <img
                    src={footer_background_main}
                    alt="footer background main"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>
            <div className="relative w-full overflow-hidden rounded-t-[40px] h-auto tn:h-[450px] md:hidden">
                <img
                    src={footer_background_mobile}
                    alt="footer background mobile"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>
            <section className="absolute inset-x-0 bottom-8">
                <div className="w-full text-[15px] lg:text-[18px] relative flex flex-col md:flex-row-reverse md:justify-end gap-3 tn:gap-5 md:gap-20 pt-5 pl-5 md:pl-20 footer__strip">
                    <div>
                        <p className="hidden md:block comfortaa-400 text-[20px] lg:text-[24px] mb-3">Наши соцсети:</p>
                        <a
                            href="https://vk.com/club518984"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit"
                        >
                            <img
                                src={logo_VK}
                                alt="logo VK"
                                className="relative w-12 lg:w-16 aspect-square z-1 rounded-full"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-3 tn:gap-5">
                        <p className="comfortaa-300 flex gap-1">
                            <Icon name="location_svg" className="w-6 h-auto [&_*]:stroke-[1]"/>
                            462243, Оренбургская область, <br/>г. Кувандык, ул. Орджоникидзе, д. 50
                        </p>
                        <a href="tel:+73512592107" className="comfortaa-300 flex gap-1">
                            <Icon name="telephone_svg" className="w-6 h-auto [&_*]:stroke-[1]"/>
                            +7 (351) 259-21-07
                        </a>
                        <a href="mailto:dss-74@mail.ru" className="comfortaa-300 flex gap-1">
                            <Icon name="Email_svg" className="w-6 h-auto [&_*]:stroke-[2]"/>
                            <p className="underline">dss-74@mail.ru</p>
                        </a>
                    </div>
                </div>

                <div className="w-full flex justify-start md:justify-center px-5 mt-4">
                    <div className="w-[60%] md:w-[80%] h-[2px] bg-[#F7F7F7]" />
                </div>

                <div className="relative flex flex-col
                md:grid md:grid-cols-3 md:items-center md:gap-0
                text-gray-600 gap-3 pt-5 px-5 md:px-20 text-[12px]
                tn:pt-8 tn:text-[15px] tn:gap-4">
                    <p className="md:text-start">© «Родничок», 2026</p>
                    <a className="md:text-center">Политика конфиденциальности</a>
                    <p className="md:text-right">Разработано И.П. WxSanyok</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;