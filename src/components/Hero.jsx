import React from 'react'
import '../styles/Hero.css'
const Hero = () => {
    return (
        <div>
            <main className='details'>
                <div className="content">
                    <h1>your feet deserve the best</h1>
                    <p id='para'>
                        A shoe is a type of footwear. It is an item of clothing.
                        You can wear them outside. Shoes come in pairs, with one shoe for each foot.
                        People usually wear shoes in public.
                    </p>
                </div>
                <img src="/Images/shoes.jpg" alt="" />
            </main>
            <div className="ckeck-btn">
                <button className='shop'>Shop Now</button>
                <button className='category'>Category</button>
            </div>
            <div className="para1">Also Available On</div>
            <div className="logo">
                <div id="flip-logo">
                    <img src="/Images/flipkart.jpg" alt="" width='72px' />
                </div>
                <div id="amazon-logo">
                    <img src="/Images/amazon.png" alt=""width='72px' />
                </div>
            </div>
        </div>
    )
}

export default Hero
