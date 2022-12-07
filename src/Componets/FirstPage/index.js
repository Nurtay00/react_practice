import './styles.css'

const FirstPage = ()=>{
    const menuList=['Home','Products','Pricing','Contact']


    return(
        <div className='wrapper'>
            <div className='header'>
                <div className="icon"></div>
                <div className="menuList">
                    {}
                </div>
                <div className="btns">
                    <div>login</div>
                    <div>Become a member</div>
                </div>
            </div>
            <div className="body">

            </div>
        </div>


    )
}

export default FirstPage;