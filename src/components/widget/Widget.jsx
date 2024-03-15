import './widget.scss'
import image from '../../assets/eth.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Widget() {
    // тут пропсы
    return (
        <div className="widget">
            <img src={image} alt="" />
            <div className="text">
                <div className="header">
                    ETH $23,000
                </div>
                <div className="time">
                    <span className="up"><TrendingUpIcon />45%</span>
                    last week
                </div>
            </div>
        </div>
    )
}