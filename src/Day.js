
export const Day = (props) => {

        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return (
            <div 
            className= 'DayTemplate  h-[20vh] py-10 w-[20vh] h-1/2 backdrop-blur-lg rounded-xl shadow-2xl h-min-screen'>
                <h1 className='text-white'>{weekdays[props.day]}</h1>
                <img className=' h-[10vh] content-center mx-auto' alt='sunny' src={`https://openweathermap.org/img/wn/${props.code}@2x.png`}/>
                <h2 className='text-white'>{props?.date}</h2>
                <h2 className='text-white'>Temperature: {props?.temp} ℃</h2>
                
            </div>
        );
};