import React, {Component} from 'react';
import {Button} from 'reactstrap';

class Home extends Component {
	

    render() {
        return(
            <div>
                <h1>Hello World!</h1>
				<Button color="danger">COUNT UP</Button>
            </div>
        );
    }
}

export default Home;