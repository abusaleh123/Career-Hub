import image from '../../assets/assets/images/bg1.png'
import image2 from '../../assets/assets/images/bg2.png'

const Head = () => {
    return (
        <div className='flex justify-between'>
            <img src={image} alt="" />
            <img src={image2} alt="" />
        </div>
    );
};

export default Head;