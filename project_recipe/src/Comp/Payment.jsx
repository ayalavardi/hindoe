import React from 'react';
import '../Style/Payment.css'

const Payment = () => {
    return <>
        {/* <div className="apartment-payment-container">

            <div className="divider"></div>
            <div className="dates">
                <div className="check-in">תאריך צ'ק-אין: 5/15/2024</div>
                <div className="check-out">תאריך צ'ק-אוט: 5/20/2024</div>
            </div>
            <div className="divider"></div>
            <div className="guests">אורחים: 1 אדם</div>
            <div className="price">
                <div className="price-details">
                    <div>₪578 x 5 לילות</div>
                    <div>₪2,890</div>
                    <div>דמי ניקיון</div>
                    <div>₪408</div>
                </div>
                <div className="total">סה"כ: ₪3,298</div>
            </div>
            <button className="continue-button">המשך</button>
        </div> */}
        <div className="apartment-payment-container">
            <div className="total">יעלה וראה</div>
            <div className="divider"></div>
            <div className="dates">
                <div className="check-in">תאריך צ'ק-אין: 5/15/2024</div>
                <div className="check-out">תאריך צ'ק-אוט: 5/20/2024</div>
            </div>
            <div className="divider"></div><br />
            <div className="guests">אורחים: 1 אדם</div>
            <div className="divider"></div>
            <button className="continue-button">המשך</button><br /><br />
            <div className="price-details">
                <div>₪2,654  ________________ ₪578 x 5 לילות</div>
                <div>דמי ניקיון--------------      ₪164</div>
                <div>דמי שירות של-------------     ₪398 </div>
            </div>
            <div className="divider"></div>
            <div className="total">סה"כ: ₪3,216</div>
            {/* </div> */}
            <div className="divider"></div>

        </div>
    </>
};

export default Payment;
