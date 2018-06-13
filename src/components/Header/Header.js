import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {clickphone,clickqq,clickweixin,resetwhat } from 'actions/header.js';
import {connect} from 'react-redux';
import Win from 'components/Setfontsize/Setfontsize';
import  './header.css';


class Header extends Component {

    componentDidMount() {
        Win(false);
    }

    render() {
            console.log (this.props);
            let popupsdiv;
            let popupsdivson;
            let goBasics = '/catalog' + '/' + '1';
            let goAdvanced = '/catalog' + '/' + '2';
            let goModularization = '/catalog' + '/' + '3';
            let goPackagemanagement = '/catalog' + '/' + '4';
            let goDesignnprod = '/catalog' + '/' + '5';
            let goEssays = '/catalog' + '/' + '6';

            switch (this.props.popups.what) {
                case 'phone':
                    popupsdivson =  <div>
                                    <p className = 'popupword'>某度的电话太烦人，就不放手机号啦，所以去添加我的QQ吧～</p>
                                    <a className = 'button' href = 'javascript:;' onClick = {()=>this.props.clickqq()}>
                                        点击前往添加QQ
                                    </a>
                                    </div>

                    break;
                case 'qq':
                    popupsdivson =  <div>
                                    <p className = 'popupword'>一个不常登录的QQ号：<span>6820088</span>，但是平时还是用微信比较多，还是去扫微信二维码加我吧！</p>
                                    <a className = 'button' href = 'javascript:;' onClick = {()=>this.props.clickweixin()}>
                                        点击扫描微信二维码
                                    </a>
                                    </div>
                    break;
                case 'weixin':
                    popupsdivson =  <div>
                                    <img className = 'qrcode' src = {require('./img/qrcode.jpg')} />
                                    <p className = 'weixinword'>扫描二维码添加微信<br/>或在手机上搜索微信号'<span>cdp8501</span>'添加</p>
                                    </div>
                    break;
                case 'none': 
                    popupsdivson = ''
                    break;
                default: 
                    popupsdivson = ''
            }

            if (this.props.popups.what !== 'none') {
                popupsdiv = <div className = 'layoutmask'>
                                <div className = 'layoutbox'>
                                    <a className='closer' href = 'javascript:;' onClick = {()=>this.props.resetwhat()}>
                                        <img className= 'close' src ={require('./img/close.png')} />
                                    </a>
                                    {popupsdivson}
                                </div>
                            </div>;
            } else {
                popupsdiv = ''
            }            
        return (
            <div className = 'bighead'>
                {popupsdiv}
                <div className = 'w100'>
                    <div className = 'w1000'>
                        <dl>
                            <dt><img src = {require('./img/cdp.jpg')} alt = '头像' /></dt>
                            <dd><Link to="/">首 页</Link></dd>
                            <dd><a href = '' >关 于</a></dd>
                            <dd><a href = "javascript:;" onClick={()=>this.props.clickphone()}>联 系</a></dd>
                        </dl>
                        <ul>
                            <li><a href = "javascript:;" onClick={()=>this.props.clickphone()}><img src = {require('./img/phonelg.png')} alt = ''/></a></li>
                            <li><a href = "javascript:;" onClick={()=>this.props.clickqq()}><img src = {require('./img/qqlg.png')} alt = ''/></a></li>
                            <li><a href = "javascript:;" onClick={()=>this.props.clickweixin()}><img src = {require('./img/weixinlg.png')} alt = ''/></a></li>
                        </ul>
                    </div>
                </div>

                <div className = 'sitenamenmenu'>
                    <div className = 'left'>
                        <h1>奔奔前端成长笔记</h1>
                        <h2>Ben's Front-end Notes</h2>
                    </div>
                    <ul className = 'right'>
                        <li>
                            <Link to = {goBasics}>
                                <span>基础应用</span>
                                <p>JS/HTML/CSS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to = {goAdvanced}>
                                <span>进阶学习</span>
                                <p>ECMASCRIPT6+</p>
                            </Link>
                        </li>
                        <li>
                            <Link to = {goModularization}>
                                <span>前端模块化</span>
                                <p>REACT/REDUX</p>
                            </Link>
                        </li>
                        <li>
                            <Link to = {goPackagemanagement}>
                                <span>项目管理</span>
                                <p>NPM/WEBPACK/GIT</p>
                            </Link>
                        </li>
                        <li>
                            <Link to = {goDesignnprod}>
                                <span>设计和产品</span>
                                <p>PS/SKETCH/MOCK</p>
                            </Link>
                        </li>
                        <li>
                            <Link to = {goEssays}>
                                <span>杂记</span>
                                <p>ESSAYS</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <img className = 'goingup' src = {require('./img/adown.png')} alt = '向上翻' />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        popups: state.header
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickphone: () => {
            dispatch(clickphone())
        },
        clickqq:()=> {
            dispatch(clickqq())
        },
        clickweixin:()=> {
            dispatch(clickweixin())
        },
        resetwhat:()=> {
            dispatch(resetwhat())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

