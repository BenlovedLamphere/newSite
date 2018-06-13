import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gettagsdata} from "actions/rightmenu";
import './rightmenu.css';



class Rightmenu extends Component {

    componentDidMount() {
        let gettagsurl = 'https://api.github.com/repos/BenlovedLamphere/Blog/labels';
        this.props.gettagsdata(gettagsurl);
    }

	render () {
        console.log(this.props);
        let tagsdata,tagarr,tagelt;
        if (this.props.tagslist.tags) {
            tagsdata = this.props.tagslist.tags;
            tagarr = tagsdata.filter((ev)=>{
                return /[a-z]/i.test(ev.name);
            })
        }
        tagelt = tagarr.map((et)=>{
            return   <li key = {et.id}><a href = 'javascript:;'>{et.name}</a></li>
        })

		return (
            <div className = 'rightmenu'>
                <h3>ABOUT ME</h3>
                <dl>
                    <dd className ='littletitle'>Designed By:</dd>
                    <dd>Photoshop/Sketch</dd>
                    <dd className ='littletitle'>Technologies<br/>Used By：</dd>
                    <dd>React/Redux/React-Router/ECMAScript6</dd>
                    <dd>SCSS/GitHub-issues</dd>
                    <dt className ='littletitle'>Contact：</dt>
                    <dt>6820088@QQ.com</dt>
                    <dt className ='littletitle'>GitHub：</dt>
                    <dt><a href="https://github.com/BenlovedLamphere">BenlovedLamphere</a></dt>
                </dl>
                <h3>TAGS CLOUD</h3>
                <ul>
                    {tagelt}
                </ul>
            </div>
		)		
	}
}

const mapStateToProps = (state) => {
    return {
        tagslist: state.rightmenu
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        gettagsdata: (url) => {
            dispatch(gettagsdata(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rightmenu);