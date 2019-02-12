import { connect } from 'react-redux';
import Home from '../views/scenes/Home';
import {fetchT9api, doRequest} from "../modules/home/operations";
import {getLetters, geIsLoading, getValidationError, getFormValue} from "../modules/home/selectors";

const mapStateToProps = (state:any) => {
    return {
        letters: getLetters(state),
        isLoading: geIsLoading(state),
        validationError: getValidationError(state),
        formValue: getFormValue(state),
    };
};

const mapDispatchToProps =  {
        fetchApi:  fetchT9api,
        doRequest: doRequest,
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default HomeContainer;
