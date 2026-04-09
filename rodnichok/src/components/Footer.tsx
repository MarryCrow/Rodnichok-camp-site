import footer_background from "@/assets/img/Common_components/footer_background.png"

function Footer() {

    return(
        <div>
            <img
                src = {footer_background}
                alt = "footer background"
                className="w-full h-auto"
            />
        </div>
    );
}

export default Footer;