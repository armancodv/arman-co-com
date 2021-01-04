import React from "react";
import './State.scss';
import {Spinner} from "react-bootstrap";
import {Variant} from "react-bootstrap/types";
import {FetchState} from "../../../redux/models_d";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

interface FetchStateProps extends React.HTMLAttributes<HTMLDivElement> {
    fetchState?: FetchState,
    variant?: Variant;
}

const State: React.FC<FetchStateProps> = (props) => {
    const showState = (fetchState: FetchState) => {
        switch (fetchState) {
            case FetchState.LOADING:
                return <Spinner animation="border" variant={props?.variant ?? 'primary'} size="sm"/>
            case FetchState.FAIL:
                return <FontAwesomeIcon icon={faExclamationTriangle} className={`text-${props?.variant ?? 'primary'}`} size="sm" />
            default:
                return null;
        }
    }
    return (
        <div {...props} className="state">
            {showState(props?.fetchState ?? FetchState.INIT)}
        </div>
    );
};

export default State;