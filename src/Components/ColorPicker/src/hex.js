import * as React from 'react';

class HEX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: props.selectedColor,
            isDropd: false,
        }
    }
    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (e.target.className !== 'HEX dropdown' &&
                e.target.className !== 'HEX dropbtn' &&
                e.target.className !== 'dropdown-elem' &&
                e.target.className !== 'color-preview') {
                this.setState({
                    isDropd: false
                });
            }
        }, false);
    }
    onClick() {
        this.setState({
            isDropd: !this.state.isDropd
        });
    }
    onSelectColor(e) {
        const newColor = e.currentTarget.getAttribute('data-color');
        this.props.setColorHex(newColor);
        this.onClick();
    }
    render() {
        const { colorList, selectedColor } = this.props;
        return (
            <div className="HEX dropdown">
                <span
                    style={{
                        backgroundColor: selectedColor
                    }}
                ></span>
                <span
                    onClick={() => { this.onClick() }}
                    className="HEX dropbtn">
                </span>
                <div
                    id="myDropdown"
                    className={`dropdown-content ${this.state.isDropd ? 'show' : ''}`}>
                    <div>
                        {colorList.map((color, key) => {
                            return (
                                <p
                                    key={key}
                                    className="dropdown-elem"
                                    onClick={(e) => { this.onSelectColor(e) }}
                                    data-color={color.value}
                                >{color.name}
                                    <span
                                        style={{
                                            backgroundColor: color.value
                                        }}
                                        className="color-preview"></span>
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default HEX;