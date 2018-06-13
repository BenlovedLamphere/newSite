
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {getarticle} from "actions/article";


import Rightmenu from 'components/Rightmenu/Rightmenu';

import marked from 'marked';
import hljs from 'highlight.js';
import  './article.css';
import  './atom-one-dark.css';

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class Article extends Component {
    componentDidMount() {
        let articlenum = this.props.match.params.number;
        this.props.getarticle(articlenum);
    }
	render(){
        console.log (this.props);
        let output,articlebody,articletitle,day,moth,year,labels,cata;
        if (this.props.articletext.art.body) {
            articlebody = this.props.articletext.art.body;
            output = marked(articlebody);
            articletitle = this.props.articletext.art.title;
            let date = this.props.articletext.art.created_at.substring(0,10).split("-");
            day = date[2];
            moth = date[1];
            year = date[0];
            labels = this.props.articletext.art.labels.find((ev)=>{
                return /^[\u4E00-\u9FA5]+$/.test(ev.name);
            })
            cata = labels.name
          }

		return (
            <div className = 'bigbody'>
                <div className = 'h2head'>
                    <span className ='junzi'>纸上得来终觉浅，绝知此事要躬行。——《冬夜读书示子聿》</span>
                </div>
                 <div className = 'middlebody'>
                    <div className = 'left'>


						<div className = 'forarticle'>  
                            <div className = 'writeretc'>
                                <p className = 'date'>{day}</p>
                                <p className = 'moth'>{moth}. {year}</p>
                                <span className = 'line'></span>
                                <p className = 'writer'>BY <span>BEN</span></p>
                                <p className = 'column'>IN <span>{cata}</span></p>
                            </div>
                            <div className = 'articleetc'>
                                <h2>{articletitle}</h2>
                                <div className = 'article' dangerouslySetInnerHTML={{ __html: output }} />
                            </div>
                        </div>

                    </div>


                    <Rightmenu/>


                </div>
            </div>
		)
	}
}
const mapStateToProps = (state) => {
    return {
        articletext: state.article
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getarticle: (num) => {
            dispatch(getarticle(num))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);


// 


