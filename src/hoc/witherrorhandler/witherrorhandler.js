import React, { Component } from 'react';

import Modal from '../../components/layout/ui/modal/modal.js';
import Aux from '../auxiliary';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
componentWillMount () {

    this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
    });

    this.resInterceptor = axios.interceptors.response.use(res => res, error => {

                this.setState({error:error});
            });
        }

componentWillUnmount() {

axios.interceptors.request.eject(this.reqInterceptor);
axios.interceptors.request.eject(this.resInterceptor);

}

    errorConfirmedHandler = () => {
        this.setState({error: null})
    }
        render () {
            return (
          <Aux>
          <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
             {this.state.error ? this.state.error.message : null}
          </Modal>
      <WrappedComponent {...this.props} />
         </Aux>            
            );
        }
    }

}

export default withErrorHandler;