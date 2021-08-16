import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './Hand.css';

const Images = {
    rock: rockImg,
    paper: paperImg,
    scissor: scissorImg,
};

function HandIcon({ value, className="Hand" }) {
    const src = Images[value];  
    
    return (
    <div className={className}>
        <img src={src} alt={value} className={`${className}-icon`} />
    </div>  
    );
}

export default HandIcon;
