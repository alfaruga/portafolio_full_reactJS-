import React, { Component } from 'react';
import NavElem from './NavElem/NavElem';

class NavElements extends Component {
    state = {
        pages: ['Home', 'About me', 'My work', 'Contact me']
    }

    render() {
        let navLinks = this.state.pages.map((page, index) => {
            return (<NavElem
                key={index}
                link={page} />)
        })

        return (<nav>
            <ul>{navLinks}</ul>
        </nav>
        )
    }
}

export default NavElements;