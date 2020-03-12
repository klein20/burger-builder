import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxuliary from '../Auxliliary/Auxiliary';
import useHttpErrorHandler from '../hooks/http-error-handler';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);
            return (
                <Auxuliary>
                    <Modal
                        show={error}
                        modalClosed={clearError}>
                        {error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...props} />
                </Auxuliary>
            );
    }
}

export default withErrorHandler;