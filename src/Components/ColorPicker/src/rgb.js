import * as React from 'react';

class RGB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: props.selectedColor,
            isDropd: false,
        }
    }
    slider = {
        red: null,
        green: null,
        blue: null,
    }
    componentWillReceiveProps(nextProps, nextState) {
        this.updateSliders(nextProps.selectedColorHex);
    }
    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (e.target.className !== 'RGB dropdown' &&
                e.target.className !== 'RGB dropbtn' &&
                e.target.className !== 'slidecontainer' &&
                e.target.className !== 'slider') {
                this.setState({
                    isDropd: false
                });
            }
        }, false);
        this.slider.red.value = '0';
        this.slider.green.value = '0';
        this.slider.blue.value = '0';
    }
    onClick(e) {
        this.setState({
            isDropd: !this.state.isDropd
        });
    }
    close() {
        this.setState({
            isDropd: false
        });
    }
    onSelectColor(e) {
        const newColor = e.currentTarget.getAttribute('data-color');
        this.props.setColorHex(newColor);
        this.onClick();
    }
    setColor() {
        const redValue = this.slider.red.value;
        const greenValue = this.slider.green.value;
        const blueValue = this.slider.blue.value;
        this.setState({
            selectedColor: {
                red: redValue,
                green: greenValue,
                blue: blueValue,
            }
        })
        this.convertToHex({
            red: redValue,
            green: greenValue,
            blue: blueValue,
        });
    }
    pad(n) {
        return (n.length < 2) ? "0" + n : n;
    }
    convertToHex(data) {
        const { red, green, blue } = data;
        const r_hex = parseInt(red, 10).toString(16),
            g_hex = parseInt(green, 10).toString(16),
            b_hex = parseInt(blue, 10).toString(16),
            hex = "#" + this.pad(r_hex) + this.pad(g_hex) + this.pad(b_hex);
        this.props.setColorHex(hex);
    }
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    updateSliders(hexColor) {
        const red = this.hexToRgb(hexColor).r;
        const green = this.hexToRgb(hexColor).g;
        const blue = this.hexToRgb(hexColor).b;
        this.setState({
            selectedColor: {
                red,
                green,
                blue
            }
        })
        this.slider.red.value = red;
        this.slider.green.value = green;
        this.slider.blue.value = blue;
    }
    render() {
        const { colorList, selectedColor } = this.props;
        return (
            <div className="RGB dropdown">
                <span
                    onClick={(e) => { this.onClick(e) }}
                    className="RGB dropbtn">
                </span>
                <div
                    id="myDropdown"
                    className={`dropdown-content ${this.state.isDropd ? 'show' : ''}`}>
                    <div className="slidecontainer">
                        <div className="sliders">
                            <span>R</span>
                            <input type="range" min="0" max="255" className="slider" id="red" ref={(elem) => { this.slider.red = elem }}
                                onChange={null}
                            />
                            <span>G</span>
                            <input type="range" min="0" max="255" className="slider" id="green" ref={(elem) => { this.slider.green = elem }}
                                onChange={null}
                            />
                            <span>B</span>
                            <input type="range" min="0" max="255" className="slider" id="blue" ref={(elem) => { this.slider.blue = elem }}
                                onChange={null}
                            />
                        </div>
                        <div className="control-btn">
                            <button
                                onClick={() => {
                                    this.close();
                                }}
                            >Cancel</button>
                            <button
                                onClick={() => {
                                    this.setColor();
                                }}
                            >Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RGB;