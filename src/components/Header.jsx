import Sunny from 'assets/weather/sunny.svg'
import { v4 as uuidv4 } from 'uuid'
import { infoGroups } from 'data/infoGroups'

const Header = () => {
    return (
        <div className='px-4 max-w-5xl m-auto my-16 tracking-wide'>
            <header className="relative flex justify-center">
                <div className='absolute top-0 right-0 bottom-0 left-0 -z-10 bg-surface border-2 border-surfaceOutline rounded-xl' />
                <div className="w-full m-8 flex items-center justify-around">
                    {/* left header */}
                    <div className='flex items-center'>
                        <img src={Sunny} className='h-60 w-auto object-contain' data-current-icon />
                        <div className='flex'>
                            <span className='text-6xl ml-8' data-current-temp>31</span>&deg;
                        </div>
                    </div>

                    <div className='w-[2px] h-3/4 bg-white' />

                    {/* right header */}
                    <div className='grid grid-cols-3 grid-flow-row gap-4'>
                        {infoGroups.map((group) => {
                            return (
                                <div key={uuidv4()} className='flex flex-col items-center'>
                                    <div className='text-lg'>{group.label}</div>
                                    {group.value}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </header>
        </div>


    )
}

export default Header
