import React, {Component} from 'react';
import Butterfly1 from './Butterfly1.jpg';
import Butterfly2 from './Butterfly2.jpg';
import Butterfly3 from './Butterfly3.jpg';

/**
 * TRILL INTERNSHIP 2021 APPLICATION:
 * Frontend Web Development
 * Chandra Burnham
 * 1/12/2021
 *
 * This app displays images of butterflies on the
 * page and prints a quote of the day from
 * https://quotes.rest/qod API.
 *
 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qotd: '' // Stores quote of the day
        };
    }

    // Gets the quote of the day.
    async componentDidMount() {
        try {
            let response = await fetch('https://quotes.rest/qod?language=en')
            if (!response.ok) {
                alert(`Something went wrong. STATUS CODE: ${response.status}`);
                return;
            }

            response = await response.json();
            this.setState({
                qotd: response.contents.quotes[0].quote
            })
        } catch (e) {
            console.log(e);
        }
    }

    // Renders the qotd, text, and images on the page.
    render() {
        return (
            <div>
                <h1>Butterflies</h1>
                <p>{this.state.qotd}</p>
                <div id="container">
                    <div>
                        <img src={Butterfly1} alt="Danaus Plexippus butterfly"/>
                        <div id="caption">Danaus Plexippus</div>
                    </div>
                    <div>
                        <img src={Butterfly2} alt="Morpho Pelides butterfly"/>
                        <div id="caption">Morpho Pelides</div>
                    </div>
                    <div>
                        <img src={Butterfly3} alt="Delias Eucharia butterfly"/>
                        <div id="caption">Delias Eucharia</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;