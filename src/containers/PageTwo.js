import React, {Component} from 'react';

class PageTwo extends Component {
    constructor(props) {
        super(props);
        console.log("pageTwo constructor");
        // this.changeUrl = this.changeUrl.bind(this);
    }

    componentWillUnmount() {
        console.log("pageTwo unmount");
    }
    render() {
        console.log("page two");
        return (
            <div>
                Page Two
            </div>
        );
    }
}

export default PageTwo;
