import { connect } from 'react-redux';
import Home from '../views/scenes/Home';
import {fetchT9api} from "../modules/home/operations";
import {getLetters} from "../modules/home/selectors";

const mapStateToProps = (state:any) => {
    return {
        letters: getLetters(state)
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchApi: (values:string) => dispatch(fetchT9api(values)),
    };
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
