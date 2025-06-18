import './index.css'

const Footer = () => {

    return(
        <>
        <footer>
            <div className='container section'>
                <img src={`${import.meta.env.BASE_URL}White-Logo.png`} alt="" className='logo'/>
                <hr />

                <div className="flex-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <hr />

                <div className="bottom-container">
                    <p>Copyright ©2025 Ria Education</p>
                    <p>Copyright © IELTS Partners. IELTS Partners defined as The British Council, IELTS Australia Pty. Ltd. and Cambridge English (part of Cambridge University Press & Assessment)</p>
                    <div className="flex-container">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms of use</a>
                        
                    </div>
                </div>
            </div>
        </footer>
        </>
    )

}


export default Footer

