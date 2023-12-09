import React from 'react';
import '../Scss/main.scss';
import '../Scss/chatboat.scss';
import chat from '../Images/chat.png';
import chatboat from '../Images/chat-logo.png';
import fileattcher from '../Images/file-attachment.png';




const Chatboat = () => {
    let modlehidebtn = () => {

        document.querySelector(".chatboat-link").style.display = "none";
    }
    let dispchatmodal = () => {
        document.querySelector(".chatboat-link").style.display = "block";
      window.confirm("Are you sure want to cancel the chat ?");
     
    }
    return (
        <>

            <section className="chatboat-wrapper">
                <div className="chatboat-contents">
                    <a href='#chatboat-modal' className='chatboat-link' onClick={modlehidebtn} data-bs-toggle="modal" data-bs-target="" role='button'>
                        <img src={chat} alt='Chat' />
                    </a>

                    <div class="modal right fade" id="chatboat-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">



                                <div class="modal-body">

                                    <div className="chat-body-wrapper">
                                        <button type="button" class="btn-close" onClick={dispchatmodal} data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="chat-body-top-section">
                                            <div className="chat-body-top-section-title"></div>
                                            <div className="chat-body-top-section-img">
                                                <img src={chatboat} alt="Chatbot" />
                                            </div>

                                        </div>
                                        <div className="chat-body-bottom-section">
                                            <div className="chat-field-section">

                                                <div className="recieved-chat-field">
                                                    <p className="chat-text">Hello,My name is mukesh ,Howm may i help you ? </p>
                                                    <span className="time">12:41 PM</span>
                                                </div>

                                                <div className="send-chat-field">
                                                    <p className="chat-text">
                                                        My issue is related to recent products , Whose order id is OR04125896.
                                                    </p>
                                                    <span className="time">12:42 PM</span>
                                                </div>

                                                <div className="recieved-chat-field">
                                                    <p className="chat-text">May i know your date of birth for verification purpose ?</p>
                                                    <span className="time">12:42 PM</span>
                                                </div>

                                                <div className="send-chat-field">
                                                    <p className="chat-text">
                                                        My DOB is 01-01-1993
                                                    </p>
                                                    <span className="time">12:43 PM</span>
                                                </div>

                                                <div className="recieved-chat-field">
                                                    <p className="chat-text">Thank you for verification. Can you elaborate your issue in brief ?  </p>
                                                    <span className="time">12:44 PM</span>
                                                </div>

                                                <div className="send-chat-field">
                                                    <p className="chat-text">
                                                        Sure , I place this order on 01-12-2023 but still it's not dispatched while at the time of order placed delivery timing was within 4 days but its more than a week. i want my products on priority basis.
                                                    </p>
                                                    <span className="time">12:46 PM</span>
                                                </div>

                                                <div className="recieved-chat-field">
                                                    <p className="chat-text">Sure sir i will help you on this, i have to check with seller it will take around 1-2 min, may i have your time for 2 min sir ?</p>
                                                    <span className="time">12:47 PM</span>
                                                </div>

                                                <div className="send-chat-field">
                                                    <p className="chat-text">
                                                        Sure
                                                    </p>
                                                    <span className="time">12:48 PM</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="chat-body-footer">
                                            <div className='input-field'>
                                                <input type='text' className='chat-input' placeholder='type here.....' required />
                                                <a type='file' href='#' className="icon-box">
                                                    <img src={fileattcher} alt="file Attachment" />
                                                </a>
                                            </div>
                                            <button className='send-btn'> Send </button>


                                        </div>


                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Chatboat