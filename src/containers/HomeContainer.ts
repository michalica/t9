import { connect } from 'react-redux';
import Home from '../views/scenes/Home';
import {fetchT9api} from "../modules/home/operations";
import {getLetters, geIsLoading, getValidationError} from "../modules/home/selectors";

const mapStateToProps = (state:any) => {
    return {
        letters: getLetters(state),
        isLoading: geIsLoading(state),
        validationError: getValidationError(state),
    };
};

const mapDispatchToProps =  {
        fetchApi:  fetchT9api,
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default HomeContainer;
