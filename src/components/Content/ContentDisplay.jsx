import { trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ContentDisplay from './ContentD';

const TrackContentDisplay = trackWindowScroll(ContentDisplay);
export default TrackContentDisplay;
