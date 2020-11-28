/* eslint-disabled-next-line */	

import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
	
	let [글제목, 글제목변경] = useState(['제5회 대한민국 SW융합 해커톤 대회', '빅데이터 기반 국민참여형 대중교통 문제 개선방안 공모전', '2020 군장병 SW 해커톤 대회']);
	let [따봉, 따봉변경] = useState(0);
	
	function 제목바꾸기(){
		var newArray = [...글제목];
		newArray[0] = "여자코트 추천";
		글제목변경(newArray);
	}
  return (
    <div className="App">
    	<div className="black-nav">
			<div>개발 Blog</div>
		</div>
		<button onClick={ 제목바꾸기 }> 버튼 </button>
    	<div className="list">
			<h3> {글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉 + 1)}}>👍</span> { 따봉 } </h3>
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
