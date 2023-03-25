import React from "react";



class CardSuco extends React.Component {
    render() {
        const { suco } = this.props
        const { hex } = suco;

        return (
            <li className="card-container">
                <div
                    className="quadrado"
                    style={{ backgroundColor: hex }}></div>
                <h2>
                    {`Seu hexadecimal é: ${suco.hex}`}
                </h2>
            </li>
        )
    }
};

export default CardSuco;