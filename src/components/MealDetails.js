import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../containers/Navbar';

const MealDetails = (props) => {
  const { details } = props;
  const {
    name,
    img,
    country,
    type,
    recipe,
    youtube,
  } = details;
  // const ytsplit = youtube.split('');
  // const yt = ytsplit.reverse();
  // const ytID = yt.slice(0, 13).join('');
  return (
    <div className="mealDetails">
      <Navbar />
      <section className="mealDetails-section">
        <h2 className="mealDetails-title">{name}</h2>
        <p className="mealDetails-country">
          `Origin: $
          {country}
          `
        </p>
        <p className="mealDetails-type">{type}</p>
        <img src={img} alt={name} />
        <p className="mealDetails-recipe">{recipe}</p>
        <p className="mealDetails-youtube">{youtube}</p>
        {/* <iframe
          className="video-responsive"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${ytID}`}
          frameBorder="0"
          allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}
      </section>
    </div>
  );
};
MealDetails.propTypes = {
  // key: PropTypes.string.isRequired,
  details: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    country: PropTypes.string,
    type: PropTypes.string,
    recipe: PropTypes.string,
    youtube: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  details: state.details,
});
export default connect(mapStateToProps, null)(MealDetails);
