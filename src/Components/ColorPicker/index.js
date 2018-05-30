import * as React from 'react';
import HEX from './src/hex';
import RGB from './src/rgb';
import './styles/index.css';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor_hex: '#000000',
            selectedColor_rgb: {
                red: 0,
                green: 0,
                blue: 0
            },
            closeAllDropDowns: false
        }
    }
    setColorHex(hex) {
        this.setState({
            selectedColor_hex: hex
        })
        this.props.onChange(hex);
    }
    render() {
        return (
            <div className="ColorPicker">
                <div className="color-hex">
                    <p>{this.state.selectedColor_hex}</p>
                </div>
                <HEX
                    setColorHex={(hex) => { this.setColorHex(hex) }}
                    colorList={this.props.colorsList}
                    selectedColor={this.state.selectedColor_hex}
                />
                <RGB
                    setColorHex={(hex) => { this.setColorHex(hex) }}
                    colorList={this.props.colorsList}
                    selectedColor={this.state.selectedColor_rgb}
                    selectedColorHex={this.state.selectedColor_hex}
                />
            </div>
        );
    }
}

export default ColorPicker;