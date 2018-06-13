import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getarraydata} from "actions/articleslist";
import './articlelist.css';


class Articlelist extends Component {
    componentDidMount() {
        console.log (this.props.number);
        let catanum = this.props.number;
        let autourl = 'https://api.github.com/repos/BenlovedLamphere/Blog/issues';
        let cataurlhead = 'https://api.github.com/repos/BenlovedLamphere/Blog/issues?labels=';
        let cataurl;
        switch (catanum) {
            case '1':
                cataurl = cataurlhead + '%E5%9F%BA%E7%A1%80%E5%BA%94%E7%94%A8';
                break;
            case '2':
                cataurl = cataurlhead + '%E8%BF%9B%E9%98%B6%E5%AD%A6%E4%B9%A0';
                break;
            case '3':
                cataurl = cataurlhead + '%E5%89%8D%E7%AB%AF%E6%A8%A1%E5%BF%AB%E5%8C%96';
                break;
            case '4':
                cataurl = cataurlhead + '%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86';
                break;
            case '5':
                cataurl = cataurlhead + '%E8%AE%BE%E8%AE%A1%E5%92%8C%E4%BA%A7%E5%93%81';
                break;
            case '6':
                cataurl = cataurlhead + '%E6%9D%82%E8%AE%B0';
            default:
                break;
            return;
        }

        if (!/^[1-6]+$/.test(catanum)) {
            this.props.getarraydata(autourl);
        } else {
            this.props.getarraydata(cataurl);
        }
    }
	render(){
		console.log(this.props);
        let articlesdata,articles,date,day,moth,year,title,imgstart,imgend,titleimg,descstart,descend,desc,id,goarticle,labels,cata;
        if (this.props.articlelist.list) {
            articlesdata = this.props.articlelist.list;
            articles =  articlesdata.map((elt)=>{
                             date = elt.created_at.substring(0,10).split("-");
                             day = date[2];
                             moth = date[1];
                             year = date[0];
                             title = elt.title;
                             imgstart = elt.body.indexOf('https://user-images');
                             imgend = elt.body.indexOf('.jpg') + 4;
                             titleimg = elt.body.substring(imgstart,imgend);
                             descstart = elt.body.indexOf('\r\n\r\n');
                             descend = elt.body.indexOf('---');
                             desc = elt.body.substring(descstart,descend).trim();
                             id = elt.number;
                             goarticle = '/article' + '/' + id;
                             labels = elt.labels.find((ev)=>{
                                return /^[\u4E00-\u9FA5]+$/.test(ev.name);
                             })
                             cata = labels.name;
                            console.log(date,titleimg,desc);
                            return  <div className = 'forarticle' key = {id}>  
                                        <div className = 'writeretc'>
                                            <p className = 'date'>{day}</p>
                                            <p className = 'moth'>{moth}. {year}</p>
                                            <span className = 'line'></span>
                                            <p className = 'writer'>BY <span>BEN</span></p>
                                            <p className = 'column'>IN <span>{cata}</span></p>
                                        </div>
                                        <div className = 'articleetc'>
                                            <Link to= {goarticle} ><h2>{title}</h2></Link>
                                            <dl>
                                                <dt><Link to= {goarticle} ><img src = {titleimg} alt = {title}/></Link></dt>
                                                <dd>{desc}</dd>
                                            </dl>
                                            <Link to= {goarticle} className = 'readmore'   ><span>READ MORE</span></Link>
                                        </div>
                                    </div>
                        })

        } 
		return (
    		<div className = 'left'>  

    			{articles}


            </div>
		)
	}
}


const mapStateToProps = (state) => {
    return {
        articlelist: state.articleslist
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getarraydata: (url) => {
            dispatch(getarraydata(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articlelist);