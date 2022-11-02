import React from 'react'
import InputBlock from './InputBlock'

const Word = () => {
    return (
        <section className="word cmn_block bg__darkblue dark_bg spacing1 ">
            <div className="sm_container">
                <ul className="grid_box">
                    <li className="left space">
                        <h2 className='text_3xl mb'>What word <br /><span className="b-i">sums you up?</span></h2>
                        <span className="text_lg">Grab it before someone else does, or it’ll be gone for good.</span>
                    </li>
                    <li className="right">
                        <p>“Hi, I’m Rob, my phone number is blah, blah, blah, my Insta is blah, blah, my… Zzzzzzzzzzzzzzzzzzzz”. Poor
                            Rob, he’s just sent another person to sleep. But if he’d registered FREE with Diktionary, listing all his
                            social usernames and contact details in one place, under a single word he’d chosen that was so him, all he’d
                            have to say in future when he met new people is, “Look me up in the Diktionary (with a ‘k’), I’m a
                            <span className="fw_bold">PINKMARSHMALLOW</span> ”. Yes, he’d get some strange looks, but that’s just Rob, he was getting those long before he
                            registered with us. But now he’s also getting a smile, he’ll be remembered and BAM, he’s made a new
                            connection.</p>
                        <span className="text_lg mt l-standard">What word sums you up? <br />Let’s see if it’s still available…</span>
                        <form action="" className="search_box sm_searchbox">
                            <div className="input-group">
                                <InputBlock placeholder="search" name="name" theme="lightblue_theme" imgSrc="https://workpreviews.com/vi/diktionary_img/right_arrow_white.svg" />
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Word