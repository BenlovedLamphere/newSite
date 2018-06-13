import React, {Component} from 'react';
import Articlelist from 'components/Articlelist/Articlelist';
import Rightmenu from 'components/Rightmenu/Rightmenu';
import  './catalog.css';

export default class Catalog extends Component {

    render() {
    	let catanum = this.props.match.params.number;
    	
    	console.log (this.props.match.params.number);
        return (
            <div className = 'bigbody' >
                <div className = 'h2head'>
                    <span className = 'junzi'>君子終日乾乾，夕惕若厲。——《易經》</span>
                </div>
                 <div className = 'middlebody'>
                    <Articlelist number = {catanum}/>	


                    <Rightmenu/>
                </div>
            </div>
        )
    }
}
