import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import Articlelist from 'components/Articlelist/Articlelist'
import Rightmenu from 'components/Rightmenu/Rightmenu'
import {Helmet} from "react-helmet";
import  './home.css';

class Home extends Component {
    render() {
        return (
            <div className = 'bigbody' >
                <Helmet>
                    <title>奔奔前端成长笔记-Ben's Blog</title>
                </Helmet>            
                <div className = 'h2head'>
                    <span className = 'junzi'>君子終日乾乾，夕惕若厲。——《易經》</span>
                </div>
                 <div className = 'middlebody'>
                    <Articlelist/>
                    <Rightmenu/>
                </div>
            </div>
        )
    }
}

export default hot(module)(Home);



                // <Helmet>
                //     <title>奔奔前端成长笔记-Ben's Blog</title>
                //     <meta name="keywords" content="前端,前端开发,包管理,模块化,HTML, CSS3, ECMAScript6, React, JavaScript,redux,react-router" />
                //     <meta name="description" content="奔奔前端成长笔记是一个基于react技术开发的个人前端笔记合集，你可以将他看作一个前端技术博客，但我还是愿意把他看作个人技术成长中的笔记本。该笔记本记录了一个前端工程师成长道路上需要逐步完善的知识点，包括了基础（HTML,CSS,Javascritp）、成长（ECMAScript6+）、模块化（React,Redux,React-Router）、包管理（GitHub,Webpack,NPM）等几大项。知识体系毫不系统，仅供参考。" />
                // </Helmet>

                //         // {articles}
                    // <Rightmenu/>