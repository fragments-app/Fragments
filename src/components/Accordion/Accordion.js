import './Accordion.scss';
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
class Accordion extends Component {


    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }

    toggle() {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <div class={`accordion-item ${this.state.active ? 'active' : ''}`}>
                <h4 class="accordion-item-trigger heading-4" onClick={() => {this.toggle()}}>
                    {this.props.question}
                    </h4>
                <div class={`accordion-item-content common-text-light`} dangerouslySetInnerHTML={{__html:this.props.answer}} />
                <span class="accordion-icon heading-6" onClick={() => {this.toggle()}}>{this.state.active ? 'Collapse' : 'Expand'}</span>
            </div>
        )
    }

}

export default Accordion;