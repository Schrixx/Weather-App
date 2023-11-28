import Sunny from 'assets/weather/sunny.svg'

const Header = () => {
    return (
        <header className="flex justify-center w-full tracking-wide">
            <div className="rounded-lg max-w-5xl m-8 flex items-center bg-panel">
                {/* left header */}
                <div className='flex flex-col items-center bg-panel backdrop-blur-lg rounded-xl'>
                    <img src={Sunny} className='h-32 w-32 object-contain' data-current-icon />
                    <div>
                        <span data-current-temp>31</span>&deg;
                    </div>
                </div>

                <span className='mx-5 w-[2px] h-3/4 bg-white' />

                {/* right header */}
                <div className='relative w-full flex justify-center items-center'>
                    <div className='rounded-xl'>
                        <div>
                            <div>HIGH</div>
                            <div><span>32</span>&deg;</div>
                        </div>
                        <div>
                            <div>FL HIGH</div>
                            <div><span>27</span>&deg;</div>
                        </div>
                        <div>
                            <div>WIND</div>
                            <div><span>9</span><span className="text-base">mph</span></div>
                        </div>
                        <div>
                            <div>LOW</div>
                            <div><span>19</span>&deg;</div>
                        </div>
                        <div>
                            <div>FL LOW</div>
                            <div><span>12</span>&deg;</div>
                        </div>
                        <div>
                            <div>PRECIP</div>
                            <div><span>0.1</span><span className="text-base">in</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
