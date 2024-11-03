
import image from '../../assets/assets/images/bg1.png'
import image2 from '../../assets/assets/images/bg2.png'
const Head2 = () => {
    return (
        <div className= '  bg-purple-50 h-56 '>

<div className='flex '>
<h1 className='text-center text-4xl font-bold mt-16 w-full'>Job Details</h1>
<img className='absolute top-18 z-10 '  src={image} alt="" />
<img className='absolute right-0 top-0 ' src={image2} alt="" />
</div>
            
        </div>
    );
};

export default Head2;