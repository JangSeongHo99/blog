import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	
	let [글제목,글제목변경] = useState(['제5회 대한민국 SW융합 해커톤 대회', '빅데이터 기반 국민참여형 대중교통 문제 개선방안 공모전', '2020 군장병 SW 해커톤 대회']);

  return (
    <div className="App">
    	<div className="black-nav">
			<div>개발 Blog</div>
		</div>
    	<div className="list">
			<h3> {글제목[0]}</h3>
			<p>2018.8.30 ~ 2018.9.1</p>
			<hr/>
		</div>
		<div className="list">
			<h3> {글제목[1]}</h3>
			<p>2018.12.15</p>
			<hr/>
		</div>
		<div className="list">
			<h3> {글제목[2]}</h3>
			<p>2020.09.16 ~ 2020.11.12</p>
			<hr/>
		</div>
    </div>
  );
}

export default App;
