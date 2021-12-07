import "./console.css";

export default function Console(){
    return(
        <div>
            <div className="console-flex justify-end">
                <div className="console-div">
                    <p className="console-title">Console</p>
                    <p className="console-description">The central dashboard for your Zerodha account with in-depth reporting and analytics on your trades and investments.</p>
                    <button className="console-button">Login to Console</button>
                </div>
                <img className="console-img1" src="https://zerodha.com/static/images/console-app.png" alt=""/>
            </div>

            <div className="console-flex flex-margin">
                <img className="console-images" src="https://zerodha.com/static/images/console-1.png" alt=""/>
                <div className="console-div1">
                    <p className="console-title">Analytics</p>
                    <p className="console-description">Multi-dimensional insights on your trades and portfolio presented as easy-to-understand visualisation</p>
                </div>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                    <p className="console-title">In-depth breakdowns</p>
                    <p className="console-description">Complete history break down of your stocks by the trade from the day of acquisition. Understand your trades better with per-trade charge breakdowns showing brokerage, STT etc.</p>
                </div>
                <img className="console-images" src="https://zerodha.com/static/images/console-2.png" alt="" />
            </div>

            <div className="console-flex justify-center">
                <p className="console-title">True P&L</p>
                <img className="image-width" src="https://zerodha.com/static/images/kite-pnl.png" alt=""/>
                <p className="console-description">Console crunches tens of billions of rows of historical trade breakdowns to keep track of corporate actions, splits, transfers, and more to compute the most accurate profit and loss statements (P&L) for your portfolio.</p>
            </div>

            <div className="console-flex flex-margin">
                <img className="console-images" src="https://zerodha.com/static/images/console-3.png" alt=""/>
                <div className="console-div1">
                    <p className="console-title">Tax-ready reports</p>
                    <p className="console-description">Tax-ready reports covering everything from capital gains to “grandfather” for a full financial year ready to be submitted to your Chartered Accountant.</p>
                </div>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                    <p className="console-title">Apply for IPOs using UPI</p>
                    <p className="console-description">Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app. Read more.</p>
                </div>
                <img className="console-images" src="https://zerodha.com/static/images/ipo-products.png" alt="" />
            </div>

            <div className="console-flex flex-margin">
                <img className="console-images" src="https://zerodha.com/static/images/stock-gift.png" alt=""/>
                <div className="console-div">
                    <p className="console-title">Stock gifting</p>
                    <p className="console-description">Now gift stocks & ETFs to your friends and loved ones. Read more.</p>
                </div>
            </div>

            <div className="console-flex flex-margin">
                <div className="console-div1">
                    <p className="console-title">Tag and track your trading progress</p>
                    <p className="console-description">Tag the reason for taking a trade in the P&L statement or on the holdings / positions page, acting as your trading journal that will also display your performance.</p>
                </div>
                <img className="console-images" src="https://zerodha.com/static/images/tags-products.png" alt="" />
            </div>
            
            <div className="console-flex justify-center">
                <p className="console-title">Open a Zerodha Account</p>
                <p className="console-description">Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.</p>
                <button className="console-button">Sign-Up Now</button>
            </div>
        </div>
    )
}