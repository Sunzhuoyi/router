import React, {Component} from 'react';

class PageOne extends Component {
    constructor(props) {
        super(props);
        console.log("pageOne constructor");
        // this.changeUrl = this.changeUrl.bind(this);
    }

    componentWillUnmount() {
        console.log("pageOne unmount");
    }

    render() {
        console.log("page one");
        return (
           <div>
               Page One
           </div>
        );
    }
}

export default PageOne;
