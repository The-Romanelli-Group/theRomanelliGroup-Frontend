
import { useNavigate } from 'react-router-dom';

const Talk = () => {
  const navigate = useNavigate();

  const handleScheduleCall = () => {
    navigate('/contact-us');
  };
  return (
    <>
    <section className="text-white lg:px-24 px-0  body-font bg-backgroundColor">
      <div className="container  mx-auto">
        <div className="text-center py-20 bg-red-600">
          <h1 className="sm:text-xl text-lg font-medium text-center title-font mb-4">Let’s Talk!</h1>
          <p className="sm:text-5xl text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto px-2">Ready to make your next move? Let’s schedule a call now!</p>
          <button onClick={handleScheduleCall} className="flex mx-auto mt-8 text-black bg-white border-0 py-2 px-8 focus:outline-none  rounded text-lg">Contact Us</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Talk