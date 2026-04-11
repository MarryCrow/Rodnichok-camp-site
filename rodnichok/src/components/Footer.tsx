import footer_background_main from "@/assets/img/Common_components/footer_background_main.png"
import footer_background_figure from "@/assets/img/Common_components/footer_background_figure.png"

function Footer() {

    return (
        <div className="relative w-full h-auto">
            <img
                src={footer_background_main}
                alt="footer background main"
                className="w-full h-auto hidden"
            />
            <img
                src={footer_background_figure}
                alt="footer background figure"
                className="absolute bottom-[3.82vw] w-full h-auto hidden_element"
            />
        </div>
    );
}

export default Footer;