import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';
import Background from '../../assets/signup-bg_643a694e.jpg';

const styles = StyleSheet.create({
    container: {
        maxWidth: '1176px',
        width: '100%',
        margin: '0 auto'
    },
    bgImage: {
        backgroundImage: `url(${Background})`
    },
    featuredHeading: {
        padding: '154px 0px'
    },
    mainheadingStyle: {
        fontSize: '45px'
    }
});

export default styles;